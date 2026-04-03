import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-space-mono",
})

export const metadata: Metadata = {
  title: "Satish Kumar P | Senior Java Full Stack Developer",
  description:
    "Portfolio of Satish Kumar P - Senior Java Full Stack Developer with 9+ years of experience in financial services, microservices, Spring Boot, Kafka, AWS, Angular, and React.",
  keywords: [
    "Satish Kumar P",
    "Senior Java Full Stack Developer",
    "Java Developer",
    "Spring Boot",
    "Kafka",
    "AWS",
    "Angular",
    "React",
    "Financial Services",
    "Morgan Stanley",
  ],
  authors: [{ name: "Satish Kumar P" }],
}

export const viewport: Viewport = {
  themeColor: "#06080D",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
