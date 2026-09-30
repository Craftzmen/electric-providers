import { CalendarIcon } from "lucide-react"
import { Breadcrumbs } from "@/components/layout/route-hero"

export type PolicyBreadcrumb = { label: string; href?: string }

type PolicyHeaderProps = {
  title: string
  description: string
  lastUpdated: string
  breadcrumbs: PolicyBreadcrumb[]
}

export function PolicyHeader({ title, description, lastUpdated, breadcrumbs }: PolicyHeaderProps) {
  return (
    <section className="border-b border-forest/8 bg-cream">
      <div className="mx-auto max-w-[1240px] px-5 py-12 md:px-8 md:py-16">
        <div className="max-w-3xl">
          <Breadcrumbs items={breadcrumbs} />
          <p className="eyebrow mb-4">Legal</p>
          <h1 className="heading-display text-forest">{title}</h1>
          <p className="mt-5 text-base leading-relaxed text-forest/70 md:text-lg">{description}</p>
          <p className="mt-6 inline-flex items-center gap-2 rounded-lg border border-forest/10 bg-white px-3 py-2 text-sm text-forest/70">
            <CalendarIcon className="size-4 text-moss" aria-hidden />
            Effective <span className="font-semibold text-forest">{lastUpdated}</span>
          </p>
        </div>
      </div>
    </section>
  )
}
