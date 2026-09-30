import Link from "next/link"
import { HeadsetIcon, InfoIcon, PhoneIcon } from "lucide-react"
import { siteConfig } from "@/lib/site-nav"

export function ImportantNotice() {
  return (
    <section className="bg-white px-3 pb-12 md:px-5 md:pb-16" aria-labelledby="important-notice-heading">
      <div className="mx-auto grid max-w-[1240px] gap-4 md:grid-cols-[1fr_1.2fr]">
        <div className="rounded-2xl border border-forest/10 bg-cream p-7 md:p-9">
          <span className="inline-flex size-11 items-center justify-center rounded-full bg-white text-moss">
            <InfoIcon className="size-5" aria-hidden />
          </span>
          <h2 id="important-notice-heading" className="mt-5 font-display text-2xl font-bold text-forest">
            A quick note about us
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-forest/70 md:text-[15px]">
            <span className="font-semibold text-forest">{siteConfig.name}</span> is an independent information and
            guidance service. We do not sell or deliver energy ourselves. We offer help, guidance, and information only,
            and every service is fulfilled by its respective provider.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-2xl bg-mint p-7 md:p-9">
          <div className="relative flex h-full flex-col">
            <span className="inline-flex size-11 items-center justify-center rounded-full bg-forest text-lime">
              <HeadsetIcon className="size-5" aria-hidden />
            </span>
            <h3 className="mt-5 font-display text-2xl font-bold text-forest md:text-3xl">Talk to a real person</h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-forest/70 md:text-[15px]">
              Questions about electricity or gas options? Call and a member of the {siteConfig.name} team will walk you
              through it in plain language.
            </p>
            <Link
              href={siteConfig.phoneTel}
              className="mt-7 inline-flex min-h-12 w-fit items-center gap-2.5 rounded-lg bg-forest px-7 text-base font-bold text-white transition hover:bg-forest-soft"
            >
              <PhoneIcon className="size-5 shrink-0 text-lime" aria-hidden />
              Call {siteConfig.phone}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
