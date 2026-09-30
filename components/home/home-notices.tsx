import Link from "next/link"
import { ChevronDownIcon } from "lucide-react"
import { notices } from "@/lib/notices-content"
import { SectionWrapper } from "@/components/layout/section-wrapper"

export function HomeNotices() {
  return (
    <SectionWrapper background="cream" padding="sm">
      <div className="grid gap-8 lg:grid-cols-[1fr_2fr] lg:gap-14">
        <div>
          <p className="eyebrow">
            Updates
          </p>
          <h2 className="heading-section mt-4 text-forest">Customer updates</h2>
          <p className="mt-3 text-sm leading-relaxed text-forest/65">
            Service changes, maintenance windows, and pricing letters. Tap an update to read it.
          </p>
        </div>
        <div className="space-y-3">
          {notices.map((notice, index) => (
            <details
              key={notice.title}
              open={index === 0}
              className="group rounded-3xl bg-white px-6 py-5 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                <span>
                  <span className="block text-xs font-medium text-moss">{notice.date}</span>
                  <span className="mt-1 block font-semibold text-forest">{notice.title}</span>
                </span>
                <ChevronDownIcon className="size-5 shrink-0 text-forest/40 transition group-open:rotate-180" aria-hidden />
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-forest/70">{notice.body}</p>
              {notice.href ? (
                <Link href={notice.href} className="mt-3 inline-block text-sm font-semibold text-forest underline decoration-lime decoration-2 underline-offset-4">
                  Learn more
                </Link>
              ) : null}
            </details>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
