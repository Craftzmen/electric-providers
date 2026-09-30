import * as React from "react"
import { cn } from "@/lib/utils"

export type SectionBackground = "white" | "cream" | "mint" | "forest"

interface SectionWrapperProps {
  children: React.ReactNode
  className?: string
  containerClassName?: string
  id?: string
  background?: SectionBackground
  padding?: "default" | "sm" | "lg" | "none"
}

const bgMap: Record<SectionBackground, string> = {
  white: "bg-white",
  cream: "bg-cream",
  mint: "bg-mint",
  forest: "bg-forest text-white",
}

const paddingMap = {
  default: "py-16 md:py-24",
  sm: "py-12 md:py-16",
  lg: "py-20 md:py-32",
  none: "",
}

export function SectionWrapper({
  children,
  className,
  containerClassName,
  id,
  background = "white",
  padding = "default",
}: SectionWrapperProps) {
  return (
    <section id={id} className={cn("scroll-mt-28", bgMap[background], paddingMap[padding], className)}>
      <div className={cn("mx-auto max-w-[1240px] px-5 md:px-8", containerClassName)}>{children}</div>
    </section>
  )
}
