import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import { Suspense } from "react"

import "./globals.css"
import { FinancePopup } from "@/components/finance/finance-popup"
import { ImportantNotice } from "@/components/layout/important-notice"
import { Navbar } from "@/components/layout/navbar"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/lib/site-nav"

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://electricproviders.com"),
  title: {
    default: `${siteConfig.name} | Cleaner, Simpler Power for Homes and Businesses`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    type: "website",
    url: "/",
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.tagline,
  },
  keywords: [
    "Electric Providers",
    "electricity provider",
    "fixed-rate electricity",
    "natural gas supply",
    "renewable electricity plans",
  ],
}

async function DeferredFooter() {
  const { SiteFooter } = await import("@/components/layout/site-footer")
  return <SiteFooter />
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={cn("antialiased", jakarta.variable, "font-sans")}>
      <body className="bg-white">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <ImportantNotice />
        <Suspense fallback={<footer className="min-h-40 bg-cream" aria-hidden />}>
          <DeferredFooter />
        </Suspense>
        <FinancePopup />
      </body>
    </html>
  )
}
