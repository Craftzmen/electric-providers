import Link from "next/link"
import { ArrowRightIcon, ShieldCheckIcon } from "lucide-react"
import { customerProtections } from "@/lib/why-choose-us-content"
import { SectionWrapper } from "@/components/layout/section-wrapper"

export function CustomerProtections() {
  return (
    <SectionWrapper background="white">
      <div className="rounded-3xl bg-mint p-8 md:p-12">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <span className="inline-flex size-14 items-center justify-center rounded-full bg-forest text-lime">
              <ShieldCheckIcon className="size-6" aria-hidden />
            </span>
            <h2 className="font-display text-3xl font-bold text-forest">Your protections</h2>
          </div>
          <p className="max-w-md text-sm text-forest/65">The rules that protect you, and where to read them in full.</p>
        </div>
        <ul className="mt-10 grid gap-4 md:grid-cols-3">
          {customerProtections.map((item) => (
            <li key={item.title} className="flex flex-col rounded-2xl bg-white p-7">
              <h3 className="font-display text-xl font-bold text-forest">{item.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-forest/70">{item.description}</p>
              <Link
                href={item.href}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-forest underline decoration-lime decoration-2 underline-offset-4"
              >
                {item.linkLabel}
                <ArrowRightIcon className="size-3.5" aria-hidden />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </SectionWrapper>
  )
}
