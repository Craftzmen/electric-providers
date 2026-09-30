import { GraduationCapIcon, RulerIcon, WrenchIcon } from "lucide-react"
import { PageSectionHeader } from "@/components/layout/page-section-header"
import { SectionWrapper } from "@/components/layout/section-wrapper"

const supportItems = [
  {
    icon: RulerIcon,
    title: "Matched to the job",
    description:
      "Before we price anything, we check frequency range, depth, and accessories against the work you do, so the kit fits the job.",
  },
  {
    icon: GraduationCapIcon,
    title: "Setup and crew training",
    description:
      "Once your gear arrives, we walk your crew through receiver setup, sonde frequencies, and current readings, on site or over video.",
  },
  {
    icon: WrenchIcon,
    title: "Parts and repairs",
    description:
      "Clamps, batteries, leads, and spare sondes are kept in stock. Anything that needs factory service goes through our warranty desk.",
  },
] as const

export function ProductsSupport() {
  return (
    <SectionWrapper background="mint">
      <PageSectionHeader
        eyebrow="After the sale"
        title="Support that ships with every kit"
        description="The same people who quote your gear help you use it."
        align="center"
      />
      <ul className="grid gap-4 md:grid-cols-3">
        {supportItems.map(({ icon: Icon, title, description }) => (
          <li key={title} className="rounded-2xl bg-white p-8">
            <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-forest text-lime">
              <Icon className="size-5" aria-hidden />
            </span>
            <h3 className="mt-6 font-display text-2xl font-bold text-forest">{title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-forest/70">{description}</p>
          </li>
        ))}
      </ul>
    </SectionWrapper>
  )
}
