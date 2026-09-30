import Link from "next/link"
import { ClockIcon, MailIcon, ReceiptIcon, ZapOffIcon } from "lucide-react"
import { siteConfig } from "@/lib/site-nav"

const channels = [
  {
    icon: ReceiptIcon,
    title: "Bills and payments",
    detail: `${siteConfig.phone}, option 2`,
    note: "Pay by phone, autopay, questions about a charge",
    href: "/contact?topic=billing",
  },
  {
    icon: ZapOffIcon,
    title: "Outages and gas leaks",
    detail: "Call your local utility first",
    note: "Option 1 on our line connects you",
    href: "/contact?topic=outage",
  },
  {
    icon: MailIcon,
    title: "Email",
    detail: siteConfig.email,
    note: "Reply within one business day",
    href: siteConfig.emailMailto,
  },
  {
    icon: ClockIcon,
    title: "Hours",
    detail: siteConfig.hours,
    note: "Holidays included",
    href: undefined,
  },
] as const

export function ContactChannels() {
  return (
    <div>
      <h2 className="font-display text-2xl font-bold text-forest">Other ways to reach us</h2>
      <ul className="mt-5 space-y-3" aria-label="Ways to reach us">
        {channels.map(({ icon: Icon, title, detail, note, href }) => {
          const body = (
            <>
              <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-mint text-moss">
                <Icon className="size-5" aria-hidden />
              </span>
              <span className="min-w-0">
                <span className="block text-xs font-medium text-forest/55">{title}</span>
                <span className="block font-semibold break-words text-forest">{detail}</span>
                <span className="block text-xs text-forest/55">{note}</span>
              </span>
            </>
          )
          return (
            <li key={title}>
              {href ? (
                <Link href={href} className="flex items-center gap-4 rounded-full border border-forest/10 bg-white py-3 pr-6 pl-3 transition hover:border-moss/40 max-sm:rounded-3xl">
                  {body}
                </Link>
              ) : (
                <div className="flex items-center gap-4 rounded-full border border-forest/10 bg-white py-3 pr-6 pl-3 max-sm:rounded-3xl">{body}</div>
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
