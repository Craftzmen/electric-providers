import Link from "next/link"
import { PhoneCallIcon } from "lucide-react"
import { RouteHero } from "@/components/layout/route-hero"
import { siteConfig } from "@/lib/site-nav"

export function ContactHeader() {
  return (
    <RouteHero
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      eyebrow="Contact Us"
      title="Talk to us. A real person will answer."
      description="Sign-ups, moves, billing, and plan questions are fastest by phone. Prefer writing? Use the form below and we will reply within one business day."
      aside={
        <Link
          href={siteConfig.phoneTel}
          className="group flex flex-col items-start gap-5 rounded-2xl bg-forest p-7 text-white transition hover:bg-forest-soft sm:flex-row sm:items-center md:p-8"
        >
          <span className="inline-flex size-16 shrink-0 items-center justify-center rounded-full bg-lime text-forest transition group-hover:scale-105">
            <PhoneCallIcon className="size-7" aria-hidden />
          </span>
          <span className="flex-1">
            <span className="block text-sm text-white/65">Call us free</span>
            <span className="block text-3xl font-bold tracking-tight md:text-4xl">{siteConfig.phone}</span>
            <span className="mt-1 block text-sm text-lime">{siteConfig.hours}</span>
          </span>
        </Link>
      }
    />
  )
}
