import { type NextRequest, NextResponse } from "next/server"

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

    // Here you would integrate with your email service
    // For now, we'll log it and return success
    console.log("[v0] New contact form submission:", emailContent)

    // Example: Send email using a service like SendGrid, Resend, or nodemailer
    // await sendEmail({
    //   to: 'contact@nuvolacg.com',
    //   subject: `New Lead: ${name} from ${company}`,
    //   text: emailContent,
    // })

    return NextResponse.json({ success: true, message: "Message sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("[v0] Error processing contact form:", error)
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }
}
