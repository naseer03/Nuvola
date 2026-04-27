import type React from "react"
import type { Metadata } from "next"
import { Inter, Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: "Nuvola Consulting Group | Technology & Cloud Consulting Excellence",
  description:
    "Expert technology consulting in Oracle, Databases, Cloud, Business Analytics & IT Recruitment. Serving Central America, USA & Europe since 2016.",
  keywords:
    "Oracle consulting, Database consulting, Cloud solutions, Business Intelligence, IT recruitment Guatemala, Snowflake consulting",
  icons: {
    icon: "/images/nuvola-icon.png",
  },
  openGraph: {
    title: "Nuvola Consulting Group",
    description: "Technology & Cloud Consulting Excellence",
    type: "website",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body className={`font-sans antialiased`}>
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
