import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

/** Nodemailer requires Node.js (not Edge). */
export const runtime = "nodejs"

/** Allow time for SMTP handshake on serverless (e.g. Vercel). */
export const maxDuration = 30

function str(v: unknown): string {
  return typeof v === "string" ? v.trim() : ""
}

type Web3Result = { ok: true } | { ok: false; message: string }

async function submitViaWeb3Forms(params: {
  accessKey: string
  name: string
  email: string
  phone: string
  company: string
  message: string
}): Promise<Web3Result> {
  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: params.accessKey,
      subject: `New lead from nuvolacg.com: ${params.name} (${params.company})`,
      from_name: "Nuvola website",
      name: params.name,
      email: params.email,
      phone: params.phone,
      company: params.company,
      message: params.message,
    }),
  })

  const data = (await res.json().catch(() => ({}))) as { success?: boolean; message?: string }
  if (res.ok && data.success) {
    return { ok: true }
  }
  return {
    ok: false,
    message: typeof data.message === "string" && data.message.length > 0 ? data.message : "Web3Forms could not send this message.",
  }
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

    const smtpConfigured = Boolean(smtpHost && smtpUser && smtpPass && smtpFrom)

    const web3Key =
      process.env.WEB3FORMS_ACCESS_KEY?.trim() ||
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim()

    if (!smtpConfigured && !web3Key) {
      console.error(
        "[contact-api] No mail provider: set WEB3FORMS_ACCESS_KEY (get a key at web3forms.com) or SMTP_HOST, SMTP_USER, SMTP_PASS, SMTP_FROM.",
      )
      return NextResponse.json(
        {
          error:
            "Contact email is not set up yet. In your hosting dashboard (e.g. Vercel → Environment Variables), add WEB3FORMS_ACCESS_KEY with your key from web3forms.com, or add SMTP settings. You can also email info@nuvolacg.com directly.",
          code: "NO_MAIL_PROVIDER",
        },
        { status: 503 },
      )
    }

    if (smtpConfigured) {
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
    }

    const web3Result = await submitViaWeb3Forms({
      accessKey: web3Key!,
      name,
      email,
      phone,
      company,
      message,
    })

    if (!web3Result.ok) {
      console.error("[contact-api] Web3Forms failed:", web3Result.message)
      return NextResponse.json(
        { error: web3Result.message, code: "WEB3_SEND_FAILED" },
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
