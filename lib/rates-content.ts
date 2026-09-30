/**
 * Plan and pricing data. Figures are sample placeholders and must be replaced
 * with filed prices before publishing. The home preview, pricing page, plan
 * details, and contact form all read from here.
 */

export type PlanType = "fixed" | "variable" | "renewable"
export type PlanAudience = "residential" | "business"

export type Plan = {
  slug: string
  name: string
  type: PlanType
  audience: PlanAudience
  rateCentsPerKwh: number
  baseChargeMonthly: number
  termMonths: number
  earlyTerminationFee: number
  renewablePct: number
  gasIncluded: boolean
  featured?: boolean
  summary: string
  bestFor: string
  details: string[]
  billing: string
}

export const plans: Plan[] = [
  {
    slug: "evergreen-12",
    name: "Evergreen 12",
    type: "fixed",
    audience: "residential",
    rateCentsPerKwh: 11.6,
    baseChargeMonthly: 3.95,
    termMonths: 12,
    earlyTerminationFee: 0,
    renewablePct: 50,
    gasIncluded: false,
    featured: true,
    summary: "A one-year fixed price for home electricity, with half your usage matched to renewable sources.",
    bestFor: "Renters and homeowners who want a steady price and the freedom to leave without a fee.",
    details: [
      "Supply price held at 11.6¢ per kWh for 12 monthly bills",
      "Flat $3.95 monthly service fee",
      "50% of your usage matched with renewable energy certificates",
      "Leave any time with 15 days notice and no cancellation fee",
      "Paperless statements and autopay included at no cost",
    ],
    billing:
      "Your utility sends one statement that lists the Electric Providers supply price, the monthly service fee, and the utility's own delivery charges on separate lines.",
  },
  {
    slug: "steady-24",
    name: "Steady 24",
    type: "fixed",
    audience: "residential",
    rateCentsPerKwh: 11.2,
    baseChargeMonthly: 5.95,
    termMonths: 24,
    earlyTerminationFee: 60,
    renewablePct: 0,
    gasIncluded: true,
    summary: "Two years of fixed pricing for both electricity and natural gas, combined on one statement.",
    bestFor: "Households that heat or cook with gas and want both bills priced together for longer.",
    details: [
      "Supply price held at 11.2¢ per kWh for 24 monthly bills",
      "Natural gas at a fixed price per therm, confirmed when you sign up",
      "One $5.95 monthly service fee covers both services",
      "$60 cancellation fee if you leave before month 24",
      "Seasonal usage reminders for electricity and gas",
    ],
    billing:
      "Electricity and gas share a single monthly statement. Gas is billed per therm at the fixed price in your welcome packet.",
  },
  {
    slug: "longleaf-36",
    name: "Longleaf 36",
    type: "fixed",
    audience: "business",
    rateCentsPerKwh: 10.9,
    baseChargeMonthly: 12.95,
    termMonths: 36,
    earlyTerminationFee: 125,
    renewablePct: 0,
    gasIncluded: false,
    summary: "A three-year fixed supply price that makes business budgeting simpler.",
    bestFor: "Shops, restaurants, and offices that want the lowest locked price and plan to stay put.",
    details: [
      "Supply price held at 10.9¢ per kWh for 36 monthly bills",
      "$12.95 monthly service fee per meter",
      "Combine several locations onto one invoice",
      "$125 cancellation fee per meter before month 36",
      "A dedicated account contact for three or more meters",
    ],
    billing:
      "Each meter is listed on its own page, with an optional summary invoice that totals every location.",
  },
  {
    slug: "canopy-100",
    name: "Canopy 100 Renewable",
    type: "renewable",
    audience: "business",
    rateCentsPerKwh: 12.5,
    baseChargeMonthly: 13.95,
    termMonths: 36,
    earlyTerminationFee: 150,
    renewablePct: 100,
    gasIncluded: false,
    featured: true,
    summary: "Fixed business pricing with every kilowatt-hour matched to certified renewable generation.",
    bestFor: "Businesses with sustainability goals, green certifications, or customers who ask about sourcing.",
    details: [
      "Supply price held at 12.5¢ per kWh for 36 monthly bills",
      "100% of usage matched with retired renewable energy certificates",
      "Yearly certificate retirement report for your records",
      "Window decal and badge to share your renewable commitment",
      "$150 cancellation fee per meter before month 36",
    ],
    billing:
      "Invoices can be combined across locations. Certificate retirement reports are sent every January for the prior year.",
  },
]

export const rateDisclosure =
  "Prices shown are samples. They exclude your utility's delivery charges, taxes, and regulatory fees. Your final price depends on your utility zone and sign-up date and is confirmed in your welcome packet."

export const planTypeLabel: Record<PlanType, string> = {
  fixed: "Fixed price",
  variable: "Variable price",
  renewable: "Fixed price, 100% renewable",
}

export const audienceLabel: Record<PlanAudience, string> = {
  residential: "Home",
  business: "Business",
}

export function formatRate(cents: number) {
  return `${cents.toFixed(1)}¢/kWh`
}

export function formatFee(amount: number) {
  return amount === 0 ? "None" : `$${amount}`
}

export function formatCurrency(amount: number) {
  return `$${amount.toFixed(2)}`
}
