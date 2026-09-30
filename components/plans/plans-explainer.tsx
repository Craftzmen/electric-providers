import { BookOpenIcon } from "lucide-react"
import { glossary } from "@/lib/plans-content"
import { PageSectionHeader } from "@/components/layout/page-section-header"
import { SectionWrapper } from "@/components/layout/section-wrapper"

export function PlansExplainer() {
  return (
    <SectionWrapper background="mint">
      <PageSectionHeader
        eyebrow="Plain-language glossary"
        title="Four numbers decide your bill"
        description="Every plan on this page spells out all four before you sign anything."
        align="center"
      />
      <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {glossary.map((item, index) => (
          <div key={item.term} className="flex flex-col rounded-2xl bg-white p-7">
            <div className="flex items-center justify-between">
              <span className="font-display text-4xl font-bold text-lime-deep/50">{index + 1}</span>
              <BookOpenIcon className="size-5 text-forest/25" aria-hidden />
            </div>
            <dt className="mt-6 font-display text-xl font-bold text-forest">{item.term}</dt>
            <dd className="mt-2 text-sm leading-relaxed text-forest/65">{item.definition}</dd>
          </div>
        ))}
      </dl>
    </SectionWrapper>
  )
}
