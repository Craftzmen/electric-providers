import { siteConfig } from "@/lib/site-nav"
import { PolicyLayout, type PolicySection } from "@/components/policies/policy-layout"

const personalInfo = [
  "The name, email, phone number, and service address you give us",
  "Account and meter details when you sign up for electricity or gas",
  "Billing and payment details, handled by secure payment partners",
  "Messages you send through our contact form, email, or online account",
]

const autoCollected = [
  "IP address and approximate location",
  "Browser, device type, and the pages you visit",
  "Cookies for analytics, saved preferences, and usage tools",
]

const howWeUse = [
  "Provide electricity, natural gas, and renewable plans",
  "Handle sign-ups, plan changes, and billing",
  "Send account notices, usage summaries, and service updates",
  "Run, protect, and improve this website and our customer tools",
  "Meet our legal and regulatory obligations",
]

const sharing = [
  "Service partners for hosting, billing, metering, and analytics",
  "Utilities and grid operators, when needed to deliver your service",
  "Government or legal authorities, when the law requires it",
]

const sections: PolicySection[] = [
  {
    id: "introduction",
    label: "Introduction",
    body: (
      <p>
        {siteConfig.name} (&ldquo;we&rdquo; or &ldquo;us&rdquo;) runs this website and offers electricity and gas plans
        to homes and businesses. This policy explains what personal information we collect, how we use it, and how we
        keep it safe when you browse our site, ask for a quote, or become a customer.
      </p>
    ),
  },
  {
    id: "information-we-collect",
    label: "What we collect",
    body: (
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl bg-cream p-5">
          <h3 className="mb-3 font-semibold text-forest">Information you give us</h3>
          <ul>
            {personalInfo.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl bg-cream p-5">
          <h3 className="mb-3 font-semibold text-forest">Information collected automatically</h3>
          <ul>
            {autoCollected.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: "how-we-use",
    label: "How we use it",
    body: (
      <ul>
        {howWeUse.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    ),
  },
  {
    id: "cookies",
    label: "Cookies",
    body: (
      <p>
        Cookies help us remember your preferences, understand how the site is used, and power account tools like usage
        charts. You can turn cookies off in your browser, although some features may stop working as expected.
      </p>
    ),
  },
  {
    id: "sharing",
    label: "Who we share with",
    body: (
      <>
        <p>We only share information with:</p>
        <ul>
          {sharing.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="font-semibold text-forest">We never sell your personal information.</p>
      </>
    ),
  },
  {
    id: "retention",
    label: "How long we keep it",
    body: (
      <p>
        We keep information only for as long as we need it to provide your service, meet billing rules, or follow the
        law. After that, we delete it or remove anything that identifies you.
      </p>
    ),
  },
  {
    id: "rights",
    label: "Your rights",
    body: (
      <p>
        Depending on where you live, you may be able to see, correct, delete, or export your personal information. Reach
        out using the details below and we will help.
      </p>
    ),
  },
  {
    id: "changes",
    label: "Updates to this policy",
    body: <p>We may update this policy from time to time. The effective date at the top of this page shows the latest version.</p>,
  },
]

export function PrivacyPolicyContent() {
  return (
    <PolicyLayout
      tocLabel="Privacy policy table of contents"
      sections={sections}
      contactPrompt="Questions about your privacy or this policy? Get in touch."
    />
  )
}
