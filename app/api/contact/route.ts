import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

/** Nodemailer requires Node.js (not Edge). */
export const runtime = "nodejs"

/** Allow time for SMTP handshake on serverless (e.g. Vercel). */
export const maxDuration = 30

function str(v: unknown): string {
  return typeof v === "string" ? v.trim() : ""
}

export async function POST(request: NextRequest) {
  try {
    let body: Record<string, unknown>
    try {
      body = await request.json()
    } catch {
      return NextResponse.json({ error: "Invalid request body.", code: "INVALID_JSON" }, { status: 400 })
    }

    const name = str(body.name)
    const email = str(body.email)
    const phone = str(body.phone)
    const company = str(body.company)
    const message = str(body.message)

    if (!name || !email || !phone || !company || !message) {
      return NextResponse.json({ error: "All fields are required.", code: "VALIDATION" }, { status: 400 })
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Please enter a valid email address.", code: "VALIDATION" }, { status: 400 })
    }

    const smtpHost = process.env.SMTP_HOST?.trim()
    const smtpPort = Number.parseInt(process.env.SMTP_PORT ?? "587", 10)
    const smtpUser = process.env.SMTP_USER?.trim()
    const smtpPass = process.env.SMTP_PASS
    const smtpFrom = process.env.SMTP_FROM?.trim() || smtpUser

    if (!smtpHost || !smtpUser || !smtpPass || !smtpFrom) {
      console.error("[contact-api] Missing SMTP env: SMTP_HOST, SMTP_USER, SMTP_PASS, and SMTP_FROM (or SMTP_USER) are required.")
      return NextResponse.json(
        {
          error:
            "The contact form cannot send mail yet (server email is not configured). Please email info@nuvolacg.com directly.",
          code: "SMTP_NOT_CONFIGURED",
        },
        { status: 503 },
      )
    }

    const useSecure =
      process.env.SMTP_SECURE === "1" ||
      process.env.SMTP_SECURE === "true" ||
      smtpPort === 465

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: useSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
      ...(process.env.SMTP_TLS_REJECT_UNAUTHORIZED === "false"
        ? { tls: { rejectUnauthorized: false } }
        : {}),
    })

    const emailContent = `
New Lead from Nuvola Website

Name: ${name}
Email: ${email}
Phone: ${phone}
Company: ${company}

Message:
${message}

---
Submitted: ${new Date().toLocaleString()}
    `

    try {
      await transporter.sendMail({
        from: smtpFrom,
        to: process.env.SMTP_TO?.trim() || "info@nuvolacg.com",
        replyTo: email,
        subject: `New Lead: ${name} from ${company}`,
        text: emailContent,
      })
    } catch (sendErr) {
      console.error("[contact-api] sendMail failed:", sendErr)
      return NextResponse.json(
        {
          error:
            "Could not deliver your message through the mail server. Please try again later or email info@nuvolacg.com.",
          code: "SMTP_SEND_FAILED",
        },
        { status: 502 },
      )
    }

    return NextResponse.json({ success: true, message: "Message sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("[contact-api] Error processing contact form:", error)
    return NextResponse.json(
      { error: "Something went wrong. Please try again later.", code: "INTERNAL" },
      { status: 500 },
    )
  }
}
