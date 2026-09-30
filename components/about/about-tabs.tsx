"use client"

import { useId, useState } from "react"
import { cn } from "@/lib/utils"
import { aboutValues } from "@/lib/about-content"
import { SectionWrapper } from "@/components/layout/section-wrapper"

export function AboutTabs() {
  const [active, setActive] = useState(0)
  const baseId = useId()
  const current = aboutValues[active]

  return (
    <SectionWrapper background="cream">
      <div className="mx-auto max-w-3xl text-center">
        <p className="eyebrow">How we work</p>
        <div role="tablist" aria-label="How we work" className="mt-6 inline-flex flex-wrap justify-center gap-1 rounded-xl bg-white p-1.5">
          {aboutValues.map((value, index) => (
            <button
              key={value.title}
              type="button"
              role="tab"
              id={`${baseId}-tab-${index}`}
              aria-selected={active === index}
              aria-controls={`${baseId}-panel`}
              onClick={() => setActive(index)}
              className={cn(
                "min-h-11 rounded-lg px-5 text-sm font-semibold transition",
                active === index ? "bg-forest text-white" : "text-forest/65 hover:text-forest"
              )}
            >
              {value.title}
            </button>
          ))}
        </div>
        <div
          role="tabpanel"
          id={`${baseId}-panel`}
          aria-labelledby={`${baseId}-tab-${active}`}
          className="mt-10 rounded-2xl bg-white p-8 md:p-12"
        >
          <h2 className="font-display text-3xl font-bold text-forest">{current.title}</h2>
          <p className="mt-4 text-base leading-relaxed text-forest/70 md:text-lg">{current.description}</p>
        </div>
      </div>
    </SectionWrapper>
  )
}
