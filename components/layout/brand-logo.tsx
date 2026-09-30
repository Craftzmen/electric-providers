import Link from "next/link"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/lib/site-nav"
import { LogoMark } from "@/components/layout/logo-mark"

type BrandLogoProps = {
  layout?: "inline" | "stacked"
  size?: "sm" | "md" | "lg"
  className?: string
}

const markSize = { sm: 28, md: 34, lg: 44 } as const
const textSize = { sm: "text-base", md: "text-lg", lg: "text-2xl" } as const

export function BrandLogo({ layout = "inline", size = "md", className }: BrandLogoProps) {
  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} home`}
      className={cn(
        "inline-flex text-forest",
        layout === "stacked" ? "flex-col items-start gap-3" : "items-center gap-2.5",
        className
      )}
    >
      <LogoMark size={markSize[size]} />
      <span className={cn("inline-flex items-baseline gap-[0.28em] leading-none tracking-[-0.02em]", textSize[size])}>
        <span className="font-extrabold">Electric</span>
        <span className="font-medium text-moss">Providers</span>
      </span>
    </Link>
  )
}
