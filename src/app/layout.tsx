import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ["latin"], display: "swap" })

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0b",
}

export const metadata: Metadata = {
  title: {
    default: "Cybrbrain — Compliance + Cashflow Infrastructure for Regulated MSMEs",
    template: "%s | Cybrbrain",
  },
  description:
    "Audit-ready compliance systems and cashflow recovery infrastructure for regulated businesses. Stay compliant, recover payments faster, and maintain complete audit trails — without chaos.",
  keywords: [
    "compliance infrastructure",
    "cashflow recovery",
    "pharma MSME",
    "Schedule M compliance",
    "ALCOA+ audit trail",
    "CDSCO export notifications",
    "MSME Samadhaan",
    "GST ITC reconciliation",
    "Ahmedabad pharma",
    "regulated industries India",
  ],
  authors: [{ name: "Cybrbrain" }],
  creator: "Cybrbrain",
  metadataBase: new URL("https://cybrbrain.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Cybrbrain",
    title: "Cybrbrain — Compliance + Cashflow Infrastructure",
    description:
      "Audit-ready systems for regulated MSMEs. Protect your license. Unlock your cashflow.",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Cybrbrain Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cybrbrain — Compliance + Cashflow Infrastructure",
    description:
      "Audit-ready systems for regulated MSMEs. Protect your license. Unlock your cashflow.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
