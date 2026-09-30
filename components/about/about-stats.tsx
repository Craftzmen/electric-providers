import { aboutFacts } from "@/lib/about-content"
import { SectionWrapper } from "@/components/layout/section-wrapper"

export function AboutStats() {
  return (
    <SectionWrapper background="mint">
      <h2 className="sr-only">Electric Providers at a glance</h2>
      <dl className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {aboutFacts.map((fact) => (
          <div key={fact.label} className="border-l-2 border-lime-deep pl-6">
            <dt className="sr-only">{fact.label}</dt>
            <dd>
              <span className="block font-display text-7xl leading-none font-bold text-forest md:text-8xl">{fact.value}</span>
              <span className="mt-4 block max-w-[14rem] text-sm leading-relaxed text-forest/70">{fact.label}</span>
            </dd>
          </div>
        ))}
      </dl>
    </SectionWrapper>
  )
}
