import type { PhotoKey } from "@/lib/remote-images"

export const servicesPage = {
  eyebrow: "Services",
  title: "Three ways to power the places you care about",
  description:
    "Electric Providers sets the price of the electricity and gas you use. Your local utility keeps delivering it, maintaining the lines, and answering outage calls, just like today.",
} as const

export type Service = {
  slug: string
  photo: PhotoKey
  photoAlt: string
  tag: string
  title: string
  bestFor: string
  description: string
  included: string[]
  cta: string
  href: string
}

export const services: Service[] = [
  {
    slug: "electricity",
    photo: "thermostat",
    photoAlt: "Smart thermostat on a white wall showing the room temperature",
    tag: "Most popular",
    title: "Electricity",
    bestFor: "Homes and businesses in utility areas that let customers choose their supplier.",
    description:
      "We buy electricity for you and charge one fixed supply price per kilowatt-hour for your whole term. Your utility's delivery charges show up on the same statement, passed through at cost.",
    included: [
      "Fixed price for 12, 24, or 36 months",
      "One statement with delivery charges included",
      "Usage history for every billing period",
      "Free autopay and paperless statements",
    ],
    cta: "See electricity pricing",
    href: "/plans",
  },
  {
    slug: "natural-gas",
    photo: "cottage",
    photoAlt: "White cottage with a red door behind a picket fence in autumn",
    tag: "Bundle and save",
    title: "Natural gas",
    bestFor: "Households with gas heat, hot water, or cooking that want both services priced together.",
    description:
      "Gas comes bundled with home electricity on our Steady 24 plan. The price per therm is fixed for the same term as your electricity and confirmed in your welcome packet.",
    included: [
      "Fixed price per therm for the full term",
      "Electricity and gas on one statement",
      "Your utility still handles gas delivery and emergencies",
      "Seasonal usage reminders for both services",
    ],
    cta: "See the Steady 24 bundle",
    href: "/plans?audience=residential#steady-24",
  },
  {
    slug: "renewable",
    photo: "rooftopSolar",
    photoAlt: "Rows of rooftop solar panels at sunrise",
    tag: "Up to 100% matched",
    title: "Renewable electricity",
    bestFor: "Anyone who wants their usage backed by wind and solar, with proof to show for it.",
    description:
      "Canopy 100 matches every kilowatt-hour you use with renewable energy certificates that we retire on your behalf. Evergreen 12 home customers get a 50% match included.",
    included: [
      "Certificates retired for your usage",
      "Yearly retirement report",
      "The same fixed price for the full term",
      "Combined invoicing for several locations",
    ],
    cta: "Explore Canopy 100",
    href: "/plans?audience=business#canopy-100",
  },
]

export const responsibilitySplit = {
  us: {
    title: "Electric Providers handles",
    items: [
      "Your supply price and plan terms",
      "Sign-up, renewals, and plan changes",
      "Renewable certificate retirement",
      "Billing questions about the supply line",
    ],
  },
  utility: {
    title: "Your utility still handles",
    items: [
      "Poles, wires, pipes, and your meter",
      "Power outages and gas leaks",
      "Meter reads and delivery charges",
      "Service connections and disconnections",
    ],
  },
} as const

export const accountTools = [
  "Online account",
  "Autopay",
  "Paperless statements",
  "Usage history export",
  "High-bill alerts",
  "Outage referral line",
] as const

export const audienceCards = [
  {
    title: "For homes",
    tone: "light",
    points: [
      "12- or 24-month terms",
      "Optional gas bundle",
      "50% renewable match on Evergreen 12",
      "No cancellation fee on Evergreen 12, $60 on Steady 24",
      "Phone support Monday to Saturday",
    ],
    href: "/plans?audience=residential",
    cta: "Home pricing",
  },
  {
    title: "For businesses",
    tone: "dark",
    points: [
      "36-month terms",
      "Gas available on request",
      "100% renewable option with Canopy 100",
      "$125 to $150 cancellation fee per meter",
      "Dedicated contact for three or more meters",
    ],
    href: "/plans?audience=business",
    cta: "Business pricing",
  },
] as const
