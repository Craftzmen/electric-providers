import { BuildingIcon, SparklesIcon } from "lucide-react"
import { accountTools, responsibilitySplit } from "@/lib/services-content"
import { PageSectionHeader } from "@/components/layout/page-section-header"
import { SectionWrapper } from "@/components/layout/section-wrapper"

export function ServicesDashboard() {
  const { us, utility } = responsibilitySplit
  return (
    <SectionWrapper background="mint">
      <PageSectionHeader
        eyebrow="Who does what"
        title="You get a better price. Your utility keeps the grid running."
        align="center"
      />
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl bg-forest p-8 text-white md:p-10">
          <span className="inline-flex size-12 items-center justify-center rounded-full bg-lime text-forest">
            <SparklesIcon className="size-5" aria-hidden />
          </span>
          <h3 className="mt-5 font-display text-2xl font-bold">{us.title}</h3>
          <ul className="mt-5 space-y-3 text-sm text-white/80">
            {us.items.map((item) => (
              <li key={item} className="border-b border-white/10 pb-3 last:border-0">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl bg-white p-8 md:p-10">
          <span className="inline-flex size-12 items-center justify-center rounded-full bg-cream text-forest">
            <BuildingIcon className="size-5" aria-hidden />
          </span>
          <h3 className="mt-5 font-display text-2xl font-bold text-forest">{utility.title}</h3>
          <ul className="mt-5 space-y-3 text-sm text-forest/75">
            {utility.items.map((item) => (
              <li key={item} className="border-b border-forest/10 pb-3 last:border-0">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-10 text-center">
        <p className="text-sm font-semibold text-forest">Included with every account</p>
        <ul className="mt-4 flex flex-wrap justify-center gap-2">
          {accountTools.map((tool) => (
            <li key={tool} className="rounded-full border border-forest/10 bg-white px-4 py-2 text-sm text-forest/80">
              {tool}
            </li>
          ))}
        </ul>
      </div>
    </SectionWrapper>
  )
}
