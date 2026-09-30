export const siteConfig = {
  name: "Electric Providers",
  tagline: "Cleaner, simpler power for the places you live and work",
  description:
    "Electric Providers offers fixed-price electricity, natural gas, and 100% renewable plans for households and small businesses, with honest pricing, no surprise fees, and real people on the phone six days a week.",
  phone: "888 469 4219",
  phoneTel: "tel:+18884694219",
  email: "Energy@thefexus.com",
  emailMailto: "mailto:Energy@thefexus.com",
  addressLines: ["1916 E 51ST Street 2FL", "Brooklyn, NY 11234"],
  hqLabel: "Our office",
  hours: "Mon–Sat, 9am–7pm ET",
  legalNotice:
    "Prices, terms, and fees on this site are sample figures and can change based on your utility zone, how much you use, and when you sign up. Your welcome packet and contract summary are the final word. Fixed-price plans lock the supply price for the full term; your local utility's delivery charges are billed at cost with no markup from us. Please review plan details and our Refund Policy before signing up.",
} as const

export type NavItem = { href: string; label: string; description?: string }

export const mainNav: NavItem[] = [
  { href: "/services", label: "Services" },
  { href: "/why-choose-us", label: "Why Us" },
  { href: "/plans", label: "Plans" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
]

export const audienceNav: NavItem[] = [
  { href: "/plans?audience=residential", label: "Residential" },
  { href: "/plans?audience=business", label: "Business" },
  { href: "/products", label: "Products" },
]

export const utilityNav: NavItem[] = [
  { href: "/contact?topic=outage", label: "Report an outage" },
  { href: "/contact?topic=billing", label: "Pay bill" },
  { href: "/contact?topic=account", label: "My account" },
]

export const policyNav: NavItem[] = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/refund-policy", label: "Refund Policy" },
]

export const footerResidentialLinks: NavItem[] = [
  { href: "/plans?audience=residential", label: "Residential plans" },
  { href: "/services#electricity", label: "Electricity Supply" },
  { href: "/services#natural-gas", label: "Natural Gas" },
  { href: "/services#renewable", label: "Renewable Energy" },
  { href: "/how-it-works", label: "How It Works" },
]

export const footerBusinessLinks: NavItem[] = [
  { href: "/plans?audience=business", label: "Business plans" },
  { href: "/plans#canopy-100", label: "100% renewable supply" },
  { href: "/products", label: "Products" },
  { href: "/contact?topic=business", label: "Business enrollment" },
]

export const footerCompanyLinks: NavItem[] = [
  { href: "/about", label: "About Us" },
  { href: "/why-choose-us", label: "Why Us" },
  { href: "/plans", label: "Plans" },
  { href: "/contact", label: "Contact" },
]

export const footerSupportLinks: NavItem[] = [
  { href: "/contact?topic=outage", label: "Report an outage" },
  { href: "/contact?topic=billing", label: "Billing and payments" },
  { href: "/contact?topic=account", label: "Account changes" },
  { href: "/contact", label: "Help center" },
]

export const footerLegalLinks: NavItem[] = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/refund-policy", label: "Refund Policy" },
  { href: "/contact?topic=accessibility", label: "Accessibility" },
]
