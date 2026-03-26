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
  title: "Satish Kumar Pyata | Senior Java Full Stack Developer",
  description:
    "Portfolio of Satish Kumar Pyata - Senior Java Full Stack Developer with 9+ years of experience in distributed systems, microservices, Spring Boot, Kafka, AWS, Angular, and React.",
  keywords: [
    "Satish Kumar Pyata",
    "Backend Engineer",
    "Java Developer",
    "Spring Boot",
    "Kafka",
    "AWS",
    "Kubernetes",
    "Distributed Systems",
  ],
  authors: [{ name: "Satish Kumar Pyata" }],
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
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
