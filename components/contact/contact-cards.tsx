import { FileTextIcon } from "lucide-react"
import { SectionWrapper } from "@/components/layout/section-wrapper"

const haveReady = [
  { label: "Account number", detail: "Printed on your current utility or supplier bill." },
  { label: "Service address", detail: "Where power or gas is delivered, unit number included." },
  { label: "Meter or ESI ID", detail: "On most bills; needed for moves and some sign-ups." },
  { label: "A recent bill", detail: "Helps us confirm your utility, rate class, and usage." },
]

export function ContactCards() {
  return (
    <SectionWrapper background="mint" padding="sm">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
        <div className="flex items-center gap-4 lg:w-80 lg:shrink-0">
          <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-white text-moss">
            <FileTextIcon className="size-5" aria-hidden />
          </span>
          <div>
            <h2 className="font-display text-2xl font-bold text-forest">Save time on the call</h2>
            <p className="mt-1 text-sm text-forest/65">Have these nearby and most requests take one call.</p>
          </div>
        </div>
        <dl className="grid flex-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {haveReady.map((item) => (
            <div key={item.label} className="rounded-3xl bg-white p-5">
              <dt className="text-sm font-semibold text-forest">{item.label}</dt>
              <dd className="mt-1 text-xs leading-relaxed text-forest/65">{item.detail}</dd>
            </div>
          ))}
        </dl>
      </div>
    </SectionWrapper>
  )
}
