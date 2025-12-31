import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: "Nuvola Consulting Group | Technology & Cloud Consulting Excellence",
  description:
    "Expert technology consulting in Oracle, Databases, Cloud, Business Analytics & IT Recruitment. Serving Central America, USA & Europe since 2016.",
  keywords:
    "Oracle consulting, Database consulting, Cloud solutions, Business Intelligence, IT recruitment Guatemala, Snowflake consulting",
  openGraph: {
    title: "Nuvola Consulting Group",
    description: "Technology & Cloud Consulting Excellence",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className={`font-sans antialiased`}>
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
