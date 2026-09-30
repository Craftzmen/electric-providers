import type { Metadata } from "next"
import { AboutHeader } from "@/components/about/about-header"
import { AboutIntro } from "@/components/about/about-intro"
import { AboutStats } from "@/components/about/about-stats"
import { AboutTabs } from "@/components/about/about-tabs"
import { SupportBlock } from "@/components/layout/support-block"
import { aboutPage } from "@/lib/about-content"

export const metadata: Metadata = {
  title: "About Us",
  description: aboutPage.description,
  alternates: { canonical: "/about" },
}

export default function AboutPage() {
  return (
    <>
      <AboutHeader />
      <AboutIntro />
      <AboutStats />
      <AboutTabs />
      <SupportBlock
        title="Want to reach the team?"
        description="Press, partnership, and regulatory questions go to the same phone line and inbox as everyone else. We answer them all."
        ctaLabel="Get in touch"
      />
    </>
  )
}
