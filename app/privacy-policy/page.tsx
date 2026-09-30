import type { Metadata } from "next"
import { PolicyHeader } from "@/components/policies/policy-header"
import { PolicySummaryCallout } from "@/components/policies/policy-summary-callout"
import { PrivacyPolicyContent } from "@/components/policies/privacy-policy-content"
import { siteConfig } from "@/lib/site-nav"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${siteConfig.name} collects, uses, and protects personal information for customers and website visitors.`,
  alternates: { canonical: "/privacy-policy" },
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <PolicyHeader
        title="Privacy Policy"
        description={`What ${siteConfig.name} collects, why we collect it, and how we protect it, whether you are browsing or already a customer.`}
        lastUpdated="September 14, 2026"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
      />
      <PolicySummaryCallout
        highlights={[
          "We collect only what we need to sign you up, bill you, support your account, and run this website.",
          "We never sell your personal information.",
          "We share account details with utilities, billing and metering partners, and regulators only when service or the law requires it.",
          "You can ask to see, correct, or delete your information using the contact details at the end of this page.",
        ]}
      />
      <PrivacyPolicyContent />
    </>
  )
}
