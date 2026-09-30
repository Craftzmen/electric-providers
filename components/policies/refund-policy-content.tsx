import { siteConfig } from "@/lib/site-nav"
import { PolicyLayout, type PolicySection } from "@/components/policies/policy-layout"

const sections: PolicySection[] = [
  {
    id: "overview",
    label: "Overview",
    body: (
      <p>
        This policy covers every {siteConfig.name} account, including electricity, natural gas, and renewable plans. If
        your welcome packet or monthly statement says something different from this page, the terms in those documents
        apply.
      </p>
    ),
  },
  {
    id: "billing",
    label: "Bills and payments",
    body: (
      <p>
        Your monthly charges depend on your plan, the energy you actually use, and any taxes or regulatory fees. Fixed-price
        plans bill the supply price stated in your welcome packet; variable-price plans follow market pricing explained
        when you sign up. Late payments may carry a fee, as shown on your statement.
      </p>
    ),
  },
  {
    id: "cancellation",
    label: "Cancelling your plan",
    body: (
      <p>
        Home customers can cancel at any time, subject to any cancellation fee listed for their plan and a final billing
        cycle coordinated with the local utility. Business plans may have minimum terms stated at sign-up. Please give us
        at least 15 days notice before your preferred stop date so we can arrange the switch without any interruption.
      </p>
    ),
  },
  {
    id: "deposits",
    label: "Deposits",
    body: (
      <p>
        Some accounts may need a security deposit based on a credit check or payment history. Deposits earn interest where
        the law requires it and are credited to your final statement or refunded after a good payment record, usually
        within 30 days of closing the account.
      </p>
    ),
  },
  {
    id: "disputes",
    label: "Questioning a charge",
    body: (
      <p>
        If a charge looks wrong, contact us within 60 days of the statement date with your account number and the details.
        We will review your usage data, the price applied, and any fees, then reply in writing. Filing a chargeback may
        pause account changes until the question is resolved.
      </p>
    ),
  },
]

export function RefundPolicyContent() {
  return (
    <PolicyLayout
      tocLabel="Refund policy table of contents"
      sections={sections}
      contactPrompt="Questions about a bill, a refund, or cancelling? We are happy to help."
    />
  )
}
