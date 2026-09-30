import Link from "next/link"
import { ArrowRightIcon, PhoneIcon } from "lucide-react"
import { siteConfig } from "@/lib/site-nav"

type SupportBlockProps = {
  title?: string
  description?: string
  ctaLabel?: string
  ctaHref?: string
}

export function SupportBlock({
  title = "Rather talk it through with a person?",
  description = "Our support team picks up six days a week. Keep your address and a recent utility bill nearby and we can usually finish in one call.",
  ctaLabel = "Send us a message",
  ctaHref = "/contact",
}: SupportBlockProps) {
  return (
    <section className="bg-white px-3 py-10 md:px-5 md:py-14">
      <div className="relative mx-auto max-w-[1240px] overflow-hidden rounded-2xl bg-forest px-6 py-12 text-white md:rounded-3xl md:px-14 md:py-16">
        <div
          className="pointer-events-none absolute -top-24 -right-24 size-72 rounded-full bg-lime/25 blur-3xl"
          aria-hidden
        />
        <div className="relative grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <div>
            <h2 className="font-display text-3xl font-bold leading-tight md:text-[2.75rem]">{title}</h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70">{description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={siteConfig.phoneTel}
                className="inline-flex min-h-12 items-center gap-2 rounded-lg bg-lime px-6 text-sm font-bold text-forest transition hover:bg-lime-soft"
              >
                <PhoneIcon className="size-4" aria-hidden />
                {siteConfig.phone}
              </Link>
              <Link
                href={ctaHref}
                className="inline-flex min-h-12 items-center gap-2 rounded-lg border border-white/25 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                {ctaLabel}
                <ArrowRightIcon className="size-4" aria-hidden />
              </Link>
            </div>
          </div>
          <ul className="grid gap-3 text-sm">
            <li className="rounded-2xl bg-white/[0.06] px-5 py-4">
              <span className="block text-xs text-white/55">Support hours</span>
              <span className="mt-1 block font-semibold">{siteConfig.hours}</span>
            </li>
            <li className="rounded-2xl bg-white/[0.06] px-5 py-4">
              <span className="block text-xs text-white/55">Email</span>
              <Link href={siteConfig.emailMailto} className="mt-1 block break-all font-semibold hover:underline">
                {siteConfig.email}
              </Link>
            </li>
            <li className="rounded-2xl bg-white/[0.06] px-5 py-4">
              <span className="block text-xs text-white/55">{siteConfig.hqLabel}</span>
              <span className="mt-1 block font-semibold">{siteConfig.addressLines.join(", ")}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
