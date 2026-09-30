"use client"

import { useState } from "react"
import { BadgeCheckIcon, ClockIcon, Leaf, Phone, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { financeContact } from "@/lib/finance-contact"

const shellClass =
  "fixed right-4 bottom-4 z-[550] flex max-h-[calc(100vh-32px)] flex-col overflow-hidden transition-[width,height,border-radius] duration-300 ease-out sm:right-6 sm:bottom-6"
const fabShellClass = "size-14 rounded-full sm:size-16"
const panelShellClass =
  "w-[calc(100vw-32px)] rounded-2xl border border-forest/10 bg-white shadow-[0_24px_60px_-20px_hsl(158_45%_16%/0.45)] sm:w-[340px]"

/** Small screens start with the call button only so the panel never covers the first screen of content. */
export function FinancePopup() {
  const [isMinimized, setIsMinimized] = useState(false)
  const minimize = () => setIsMinimized(true)

  const fab = (
    <a
      href={financeContact.phoneHref}
      title={`Call ${financeContact.phoneDisplay}`}
      className="relative flex size-full min-h-14 min-w-14 items-center justify-center rounded-full bg-orange-500 text-white shadow-[0_6px_24px_rgba(249,115,22,0.55)] ring-2 ring-orange-300/50 transition-transform hover:scale-105 hover:bg-orange-400 active:scale-95 sm:min-h-16 sm:min-w-16"
    >
      <Phone className="size-6 sm:size-7" aria-hidden />
      <span className="absolute top-0 right-0 flex size-4 sm:size-5">
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-lime opacity-75" />
        <span className="relative inline-flex size-4 rounded-full border-2 border-white bg-lime-deep sm:size-5" />
      </span>
      <span className="sr-only">Call {financeContact.phoneDisplay}</span>
    </a>
  )

  const panel = (
    <div className="flex h-full flex-col overflow-y-auto">
      <div className="relative border-b border-forest/8 bg-mint px-5 pt-4 pb-4">
        <button
          type="button"
          onClick={minimize}
          className="absolute top-3 right-3 flex size-8 items-center justify-center rounded-lg bg-white text-forest/60 transition hover:text-forest"
          aria-label="Minimize assistance panel"
        >
          <X className="size-4" />
        </button>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 text-[11px] font-semibold text-moss">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-lime-deep opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-lime-deep" />
          </span>
          Advisors available now
        </span>
        <h3 className="mt-2.5 pr-10 text-lg font-bold leading-tight tracking-tight text-forest">
          Need help picking a plan?
        </h3>
        <p className="mt-1 text-[13px] leading-snug text-forest/65">One short call and we will compare your options with you.</p>
      </div>

      <div className="space-y-3.5 p-4">
        <ul className="flex flex-wrap gap-x-3 gap-y-1.5">
          {[
            { icon: ClockIcon, label: "Quick sign-up" },
            { icon: BadgeCheckIcon, label: "Free eligibility check" },
            { icon: Leaf, label: "Green options" },
          ].map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-1.5 text-xs font-semibold text-forest/75">
              <Icon className="size-3.5 text-moss" aria-hidden />
              {label}
            </li>
          ))}
        </ul>

        <a
          href={financeContact.phoneHref}
          title={`Call ${financeContact.phoneDisplay}`}
          className="flex min-h-12 w-full items-center justify-center gap-3 rounded-xl bg-orange-500 px-5 py-2.5 text-white shadow-[0_8px_28px_rgba(249,115,22,0.45)] ring-2 ring-orange-300/40 transition hover:scale-[1.02] hover:bg-orange-400 active:scale-[0.98]"
        >
          <Phone className="size-5 animate-pulse" aria-hidden />
          <span className="text-left">
            <span className="block text-lg font-extrabold tracking-tight">{financeContact.phoneDisplay}</span>
            <span className="block text-[10px] font-bold tracking-[0.25em] text-orange-100 uppercase">Tap to call</span>
          </span>
        </a>
      </div>
    </div>
  )

  if (!isMinimized) {
    return (
      <>
        <div role="complementary" aria-label="Plan assistance" className={cn(shellClass, fabShellClass, "sm:hidden")}>
          {fab}
        </div>
        <div role="complementary" aria-label="Plan assistance" className={cn(shellClass, panelShellClass, "max-sm:hidden")}>
          {panel}
        </div>
      </>
    )
  }

  return (
    <div role="complementary" aria-label="Plan assistance" className={cn(shellClass, fabShellClass)}>
      {fab}
    </div>
  )
}
