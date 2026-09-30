import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type PageSectionHeaderProps = {
  eyebrow?: string
  title: ReactNode
  description?: string
  action?: ReactNode
  align?: "left" | "center"
  tone?: "light" | "dark"
  className?: string
}

export function PageSectionHeader({
  eyebrow,
  title,
  description,
  action,
  align = "left",
  tone = "light",
  className,
}: PageSectionHeaderProps) {
  const dark = tone === "dark"
  return (
    <div
      className={cn(
        "mb-10 flex flex-col gap-5 md:mb-14",
        align === "center" ? "items-center text-center" : "md:flex-row md:items-end md:justify-between",
        className
      )}
    >
      <div className={cn("max-w-2xl", align === "center" && "mx-auto")}>
        {eyebrow ? (
          <p className={cn("eyebrow", dark && "text-lime")}>{eyebrow}</p>
        ) : null}
        <h2 className={cn("heading-section", eyebrow && "mt-4", dark ? "text-white" : "text-forest")}>{title}</h2>
        {description ? (
          <p className={cn("mt-4 text-base leading-relaxed", dark ? "text-white/70" : "text-forest/70")}>{description}</p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  )
}
