import type { Metadata } from "next"
import { PolicyHeader } from "@/components/policies/policy-header"
import { PolicySummaryCallout } from "@/components/policies/policy-summary-callout"
import { RefundPolicyContent } from "@/components/policies/refund-policy-content"
import { siteConfig } from "@/lib/site-nav"

export const metadata: Metadata = {
  title: "Refund Policy",
  description: `Billing, cancellation, deposit, and dispute terms for ${siteConfig.name} accounts.`,
  alternates: { canonical: "/refund-policy" },
}

export default function RefundPolicyPage() {
  return (
    <>
      <PolicyHeader
        title="Refund Policy"
        description={`How billing, cancellations, deposits, and refunds work for ${siteConfig.name} electricity and gas accounts.`}
        lastUpdated="September 14, 2026"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Refund Policy" }]}
      />
      <PolicySummaryCallout
        highlights={[
          "Fixed-price plans hold the supply price for the full term. Any cancellation fee is shown on the Plans page and in your welcome packet.",
          "Statements list our supply charges and your utility's delivery charges on separate lines, plus any taxes and regulatory fees.",
          "If a deposit is required, it is credited to your final statement or refunded within 30 days of closing the account.",
          "Questions about a charge must be raised within 60 days of the statement date, and we always reply in writing.",
        ]}
      />
      <RefundPolicyContent />
    </>
  )
}
