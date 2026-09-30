import { benefits } from "@/lib/why-choose-us-content"
import { SectionWrapper } from "@/components/layout/section-wrapper"

export function BenefitsGrid() {
  return (
    <SectionWrapper background="white">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="eyebrow">Why people stay</p>
          <h2 className="heading-section mt-4 text-forest">Four promises we build everything around</h2>
        </div>
        <ol className="divide-y divide-forest/10">
          {benefits.map((benefit, index) => (
            <li key={benefit.title} className="grid gap-4 py-8 first:pt-0 last:pb-0 sm:grid-cols-[6rem_1fr] sm:gap-8">
              <span className="font-display text-7xl leading-none font-bold text-lime-deep/40">{index + 1}</span>
              <div>
                <h3 className="font-display text-2xl font-bold text-forest md:text-3xl">{benefit.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-forest/70">{benefit.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </SectionWrapper>
  )
}
