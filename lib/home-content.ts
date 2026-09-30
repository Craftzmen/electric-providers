import type { PhotoKey } from "@/lib/remote-images"

export const homeHero = {
  eyebrow: "Fixed prices · Renewable options · Real people",
  title: "Power your home with a price that",
  titleAccent: "stays put.",
  lead:
    "Electric Providers makes choosing electricity and gas simple. Pick a fixed price, see every fee before you sign, and let your utility keep the lights on the way it always has.",
  chips: [
    { value: "11.2¢", label: "per kWh, starting price" },
    { value: "$0", label: "cancellation fee on Evergreen 12" },
  ],
} as const

export const trustFacts = [
  { label: "Prices locked", value: "12 to 36 months" },
  { label: "Hidden fees", value: "None, ever" },
  { label: "Renewable match", value: "Up to 100%" },
  { label: "Phone support", value: "6 days a week" },
] as const

export type AccountHelp = {
  label: string
  description: string
  href: string
  icon: "start" | "transfer" | "outage" | "bill"
}

export const accountHelp: AccountHelp[] = [
  {
    label: "Start new service",
    description: "Moving in or switching? Set up electricity or gas at your address.",
    href: "/contact?topic=start",
    icon: "start",
  },
  {
    label: "Move my plan",
    description: "Take your current price with you to a new address.",
    href: "/contact?topic=transfer",
    icon: "transfer",
  },
  {
    label: "Outage help",
    description: "Your utility restores power. We will point you to the right number.",
    href: "/contact?topic=outage",
    icon: "outage",
  },
  {
    label: "Pay my bill",
    description: "Pay by phone, turn on autopay, or ask about a line item.",
    href: "/contact?topic=billing",
    icon: "bill",
  },
]

export type HomePath = {
  title: string
  photo: PhotoKey
  description: string
  href: string
  cta: string
}

export const homePaths: HomePath[] = [
  {
    title: "For homes",
    photo: "family",
    description:
      "Fixed prices for apartments, condos, and houses, with an optional gas bundle and a renewable match built in.",
    href: "/plans?audience=residential",
    cta: "See home pricing",
  },
  {
    title: "For businesses",
    photo: "cafe",
    description: "Longer locked prices, combined invoices for several locations, and a 100% renewable option.",
    href: "/plans?audience=business",
    cta: "See business pricing",
  },
  {
    title: "For field crews",
    photo: "locators",
    description: "Our equipment desk supplies locators, inspection cameras, and accessories to utility contractors.",
    href: "/products",
    cta: "Browse equipment",
  },
]

export const homeRenewable = {
  stat: "100%",
  statLabel: "of your usage matched to wind and solar on Canopy 100",
  title: "Greener power without changing a thing at home.",
  description:
    "The electricity that reaches your outlets comes from the same grid either way. What changes is where your money goes: we retire renewable energy certificates to match what you use, and you get the paperwork to prove it.",
  points: [
    "Certificates retired on your behalf",
    "Yearly retirement report every January",
    "The same fixed price for the whole term",
  ],
  cta: { label: "Explore Canopy 100", href: "/plans#canopy-100" },
} as const

export const homeSwitchSteps = [
  { title: "Pick a price", description: "Compare supply price, term length, and fees side by side." },
  { title: "Sign up in minutes", description: "Online or by phone. Have your address and utility account number ready." },
  { title: "We handle the paperwork", description: "We tell your utility, and the switch happens on your next meter read." },
  { title: "Nothing else changes", description: "Same wires, same meter, same utility. Just a better price on your bill." },
] as const

export const homeSwitchNeeds = [
  "Your service address",
  "Utility account number from a recent bill",
  "Meter or ESI ID, if your bill shows one",
  "A phone number and email for updates",
] as const
