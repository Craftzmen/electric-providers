"use client"

import { useId, useState } from "react"
import { PlusIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import type { FaqItem } from "@/lib/faq-content"
import { SectionWrapper, type SectionBackground } from "@/components/layout/section-wrapper"

type FaqAccordionProps = {
  items: FaqItem[]
  title?: string
  description?: string
  background?: SectionBackground
}

export function FaqAccordion({
  items,
  title = "Good questions, straight answers",
  description,
  background = "white",
}: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const baseId = useId()

  return (
    <SectionWrapper background={background}>
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <p className="eyebrow">FAQ</p>
          <h2 className="heading-section mt-4 text-forest">{title}</h2>
          {description ? <p className="mt-4 text-base leading-relaxed text-forest/70">{description}</p> : null}
        </div>
        <div className="mt-10 space-y-3">
          {items.map((item, index) => {
            const isOpen = openIndex === index
            const panelId = `${baseId}-panel-${index}`
            return (
              <div
                key={item.question}
                className={cn(
                  "rounded-3xl border transition-colors",
                  isOpen ? "border-moss/20 bg-mint" : "border-forest/10 bg-white hover:border-forest/20"
                )}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex min-h-14 w-full items-center justify-between gap-4 px-6 py-4 text-left"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                >
                  <span className="text-[15px] font-semibold text-forest md:text-base">{item.question}</span>
                  <span
                    className={cn(
                      "inline-flex size-8 shrink-0 items-center justify-center rounded-full transition",
                      isOpen ? "rotate-45 bg-forest text-lime" : "bg-cream text-forest"
                    )}
                  >
                    <PlusIcon className="size-4" aria-hidden />
                  </span>
                </button>
                {isOpen ? (
                  <p id={panelId} className="px-6 pb-6 text-sm leading-relaxed text-forest/75 md:text-[15px]">
                    {item.answer}
                  </p>
                ) : null}
              </div>
            )
          })}
        </div>
      </div>
    </SectionWrapper>
  )
}
