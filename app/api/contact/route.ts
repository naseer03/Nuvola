import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, company, message } = body

    // Validate required fields
    if (!name || !email || !phone || !company || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Create email content
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

    const smtpHost = process.env.SMTP_HOST
    const smtpPort = Number.parseInt(process.env.SMTP_PORT ?? "587", 10)
    const smtpUser = process.env.SMTP_USER
    const smtpPass = process.env.SMTP_PASS
    const smtpFrom = process.env.SMTP_FROM ?? smtpUser

    if (!smtpHost || !smtpUser || !smtpPass || !smtpFrom) {
      console.error("[contact-api] Missing SMTP configuration")
      return NextResponse.json({ error: "Email service is not configured" }, { status: 500 })
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    })

    await transporter.sendMail({
      from: smtpFrom,
      to: "info@nuvolacg.com",
      replyTo: email as string,
      subject: `New Lead: ${name as string} from ${company as string}`,
      text: emailContent,
    })

    return NextResponse.json({ success: true, message: "Message sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("[v0] Error processing contact form:", error)
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }
}
