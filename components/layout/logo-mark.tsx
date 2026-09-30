import { cn } from "@/lib/utils"

type LogoMarkProps = {
  size?: number
  className?: string
}

/** Leaf with a lightning-bolt cutout on a rounded lime tile. */
export function LogoMark({ size = 32, className }: LogoMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
      aria-hidden
    >
      <rect width="32" height="32" rx="10" fill="hsl(84 78% 55%)" />
      <path d="M8 24C8 13 14.5 7 25 7c0 11-6.5 17-17 17z" fill="hsl(158 45% 16%)" />
      <path d="M18.2 10.5l-5.4 7.6h3.4l-1.6 5.4 5.6-7.9h-3.4l1.4-5.1z" fill="hsl(84 78% 55%)" />
    </svg>
  )
}
