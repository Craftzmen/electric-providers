import type { Metadata } from "next"
import { Hero } from "@/components/home/hero"
import { HomeTrustStrip } from "@/components/home/home-trust-strip"
import { HomePaths } from "@/components/home/home-paths"
import { HomeRatesPreview } from "@/components/home/home-rates-preview"
import { HomeSwitching } from "@/components/home/home-switching"
import { HomeRenewable } from "@/components/home/home-renewable"
import { HomeAccountHelp } from "@/components/home/home-account-help"
import { HomeNotices } from "@/components/home/home-notices"
import { siteConfig } from "@/lib/site-nav"

export const metadata: Metadata = {
  title: { absolute: `${siteConfig.name} | Fixed-Price Electricity, Gas, and Renewable Plans` },
  description: siteConfig.description,
  keywords: ["Electric Providers", "fixed-price electricity", "natural gas plans", "renewable electricity", "switch electricity provider"],
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    url: "/",
    type: "website",
  },
  alternates: { canonical: "/" },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <HomeTrustStrip />
      <HomePaths />
      <HomeRatesPreview />
      <HomeSwitching />
      <HomeRenewable />
      <HomeAccountHelp />
      <HomeNotices />
    </>
  )
}
