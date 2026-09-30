export { plans, rateDisclosure, planTypeLabel, audienceLabel, formatRate, formatFee, formatCurrency } from "@/lib/rates-content"
export type { Plan, PlanAudience, PlanType } from "@/lib/rates-content"

export const plansPage = {
  eyebrow: "Plans",
  title: "Pick a price. Keep it for the whole term.",
  description:
    "Fixed-price electricity and gas for homes and businesses. Every plan shows the supply price, monthly fee, term, and any cancellation fee before you sign up.",
} as const

export const glossary = [
  {
    term: "Supply price",
    definition: "What we charge for each kilowatt-hour you use. On a fixed-price plan it stays the same for your entire term.",
  },
  {
    term: "Monthly service fee",
    definition: "A small flat amount for running your account. It is billed every month, whatever your usage.",
  },
  {
    term: "Delivery charges",
    definition: "Set by your utility and passed through at cost. They are identical no matter which supplier you pick.",
  },
  {
    term: "Cancellation fee",
    definition: "A one-time charge if you leave before your term ends. We waive it if you move out of our service area.",
  },
] as const
