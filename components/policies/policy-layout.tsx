import Link from "next/link"
import type { ReactNode } from "react"
import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react"
import { siteConfig } from "@/lib/site-nav"
import { SectionWrapper } from "@/components/layout/section-wrapper"

export type PolicySection = { id: string; label: string; body: ReactNode }

type PolicyLayoutProps = {
  tocLabel: string
  sections: PolicySection[]
  contactPrompt: string
}

export function PolicyLayout({ tocLabel, sections, contactPrompt }: PolicyLayoutProps) {
  return (
    <SectionWrapper background="white" padding="sm">
      <div className="grid gap-10 lg:grid-cols-[17rem_1fr] lg:gap-16">
        <aside className="min-w-0 lg:sticky lg:top-28 lg:self-start">
          <nav aria-label={tocLabel} className="rounded-2xl bg-cream p-5">
            <p className="px-2 text-xs font-semibold tracking-wide text-forest/55 uppercase">Jump to</p>
            <ol className="mt-3 flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:gap-1 lg:overflow-visible lg:pb-0">
              {sections.map((s, index) => (
                <li key={s.id} className="shrink-0">
                  <Link
                    href={`#${s.id}`}
                    className="flex min-h-10 items-center gap-3 rounded-lg px-3 text-sm text-forest/75 transition hover:bg-white hover:text-forest max-lg:bg-white"
                  >
                    <span className="font-display text-xs text-moss tabular-nums">{String(index + 1).padStart(2, "0")}</span>
                    {s.label}
                  </Link>
                </li>
              ))}
              <li className="shrink-0">
                <Link
                  href="#contact"
                  className="flex min-h-10 items-center gap-3 rounded-lg px-3 text-sm font-semibold text-forest transition hover:bg-white max-lg:bg-white"
                >
                  <span className="font-display text-xs text-moss">@</span>
                  Contact us
                </Link>
              </li>
            </ol>
          </nav>
        </aside>

        <article className="min-w-0 space-y-4">
          {sections.map((s, index) => (
            <section key={s.id} id={s.id} className="scroll-mt-28 rounded-2xl border border-forest/10 p-6 md:p-8">
              <p className="font-display text-sm text-moss">{String(index + 1).padStart(2, "0")}</p>
              <h2 className="mt-1 font-display text-2xl font-bold text-forest md:text-3xl">{s.label}</h2>
              <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-forest/75 [&_li]:pl-1 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_ul]:marker:text-moss">
                {s.body}
              </div>
            </section>
          ))}

          <section id="contact" className="scroll-mt-28 rounded-2xl bg-forest p-6 text-white md:p-8">
            <h2 className="font-display text-2xl font-bold md:text-3xl">Contact us</h2>
            <p className="mt-2 text-sm text-white/70">{contactPrompt}</p>
            <ul className="mt-6 grid gap-3 md:grid-cols-3">
              <li>
                <Link href={siteConfig.phoneTel} className="flex h-full items-start gap-3 rounded-2xl bg-white/[0.06] p-4 transition hover:bg-white/10">
                  <PhoneIcon className="mt-0.5 size-4 shrink-0 text-lime" aria-hidden />
                  <span className="text-sm">
                    <span className="block text-xs text-white/55">Phone</span>
                    <span className="font-semibold">{siteConfig.phone}</span>
                  </span>
                </Link>
              </li>
              <li>
                <Link href={siteConfig.emailMailto} className="flex h-full items-start gap-3 rounded-2xl bg-white/[0.06] p-4 transition hover:bg-white/10">
                  <MailIcon className="mt-0.5 size-4 shrink-0 text-lime" aria-hidden />
                  <span className="min-w-0 text-sm">
                    <span className="block text-xs text-white/55">Email</span>
                    <span className="block font-semibold break-all">{siteConfig.email}</span>
                  </span>
                </Link>
              </li>
              <li className="flex items-start gap-3 rounded-2xl bg-white/[0.06] p-4">
                <MapPinIcon className="mt-0.5 size-4 shrink-0 text-lime" aria-hidden />
                <span className="text-sm">
                  <span className="block text-xs text-white/55">Mail</span>
                  {siteConfig.addressLines.map((line) => (
                    <span key={line} className="block font-semibold">
                      {line}
                    </span>
                  ))}
                </span>
              </li>
            </ul>
          </section>
        </article>
      </div>
    </SectionWrapper>
  )
}
