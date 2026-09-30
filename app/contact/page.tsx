import type { Metadata } from "next"
import { ContactCards } from "@/components/contact/contact-cards"
import { ContactChannels } from "@/components/contact/contact-channels"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactHeader } from "@/components/contact/contact-header"
import { ContactSidebar } from "@/components/contact/contact-sidebar"
import { FaqAccordion } from "@/components/shared/faq-accordion"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { faqByPage } from "@/lib/faq-content"
import { siteConfig } from "@/lib/site-nav"

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Reach ${siteConfig.name} for sign-ups, moves, billing, and plan questions. Call ${siteConfig.phone} or send us a message.`,
  alternates: { canonical: "/contact" },
}

export default function ContactPage() {
  return (
    <>
      <ContactHeader />
      <SectionWrapper background="white">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-14">
          <div className="space-y-8">
            <ContactChannels />
            <ContactSidebar />
          </div>
          <ContactForm />
        </div>
      </SectionWrapper>
      <ContactCards />
      <FaqAccordion items={faqByPage.contact} background="white" title="Questions about reaching us" />
    </>
  )
}
