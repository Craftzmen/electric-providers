import { switchTimeline } from "@/lib/how-it-works-content"
import { PageSectionHeader } from "@/components/layout/page-section-header"
import { SectionWrapper } from "@/components/layout/section-wrapper"

export function SwitchTimeline() {
  return (
    <SectionWrapper background="forest">
      <PageSectionHeader
        eyebrow="Timeline"
        title="What happens, and when"
        description="Typical timing for a home switch. Some utilities take one extra billing cycle."
        tone="dark"
        align="center"
      />
      <ol className="grid gap-4 md:grid-cols-4">
        {switchTimeline.map((item) => (
          <li key={item.when} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
            <span className="inline-flex rounded-full bg-lime px-3.5 py-1.5 text-xs font-bold text-forest">{item.when}</span>
            <p className="mt-5 text-sm leading-relaxed text-white/80">{item.what}</p>
          </li>
        ))}
      </ol>
    </SectionWrapper>
  )
}
