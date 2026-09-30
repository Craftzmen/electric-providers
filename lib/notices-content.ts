export type Notice = {
  date: string
  title: string
  body: string
  href?: string
}

export const notices: Notice[] = [
  {
    date: "September 2, 2026",
    title: "Seasonal pricing letter for variable-price customers",
    body:
      "If you are still on an older variable-price plan, your October statement will include a letter explaining winter pricing. Fixed-price plans are not affected.",
    href: "/plans",
  },
  {
    date: "August 19, 2026",
    title: "Scheduled online account upgrade",
    body:
      "Online account tools will be offline from 1:00 a.m. to 3:00 a.m. Eastern on Sunday, September 21. Our phone line stays open as usual.",
  },
  {
    date: "July 30, 2026",
    title: "New customers now start with paperless statements",
    body:
      "Every new sign-up receives paperless statements by default. Prefer paper? Call us any time and we will switch it at no charge.",
    href: "/contact?topic=billing",
  },
]
