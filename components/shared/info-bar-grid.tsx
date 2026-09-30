import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type InfoBarGridProps = {
  children: ReactNode
  columns?: 2 | 3 | 4
  className?: string
  "aria-label"?: string
}

const columnClasses: Record<2 | 3 | 4, string> = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
}

/** Grid of rounded tiles; pair with InfoBarCell children. */
export function InfoBarGrid({ children, columns = 4, className, "aria-label": ariaLabel }: InfoBarGridProps) {
  return (
    <ul aria-label={ariaLabel} className={cn("grid grid-cols-1 gap-3", columnClasses[columns], className)}>
      {children}
    </ul>
  )
}

type InfoBarCellProps = {
  children: ReactNode
  className?: string
}

export function InfoBarCell({ children, className }: InfoBarCellProps) {
  return <li className={cn("min-w-0", className)}>{children}</li>
}

export const infoBarLinkClass =
  "group flex h-full min-w-0 items-start gap-4 rounded-3xl border border-forest/10 bg-white p-6 transition hover:-translate-y-0.5 hover:border-moss/30 hover:shadow-[0_18px_40px_-24px_hsl(158_45%_16%/0.4)]"

export const infoBarStaticClass = "flex h-full min-w-0 items-start gap-4 rounded-3xl border border-forest/10 bg-white p-6"
