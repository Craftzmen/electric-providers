import { CheckCircle2Icon } from "lucide-react"
import { checklist } from "@/lib/how-it-works-content"
import { SectionWrapper } from "@/components/layout/section-wrapper"

export function ProcessChecklist() {
  return (
    <SectionWrapper background="cream" padding="sm">
      <div className="card-soft mx-auto grid max-w-4xl gap-8 p-8 md:grid-cols-[1fr_1.4fr] md:p-12">
        <div>
          <p className="eyebrow">Before you start</p>
          <h2 className="mt-4 font-display text-3xl font-bold text-forest">Have these ready</h2>
          <p className="mt-3 text-sm leading-relaxed text-forest/65">
            Everything is on a recent utility bill. Grab one and you are set.
          </p>
        </div>
        <ul className="grid gap-3">
          {checklist.map((item) => (
            <li key={item} className="flex items-center gap-3 rounded-2xl bg-mint px-5 py-4 text-sm font-medium text-forest">
              <CheckCircle2Icon className="size-5 shrink-0 text-moss" aria-hidden />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </SectionWrapper>
  )
}
