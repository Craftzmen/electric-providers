import Image, { type StaticImageData } from "next/image"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type MediaSplitProps = {
  image: StaticImageData
  imageAlt: string
  children: ReactNode
  reverse?: boolean
  badge?: ReactNode
  imageClassName?: string
  className?: string
}

/** Tall rounded photo beside copy, with an optional floating badge on the photo. */
export function MediaSplit({ image, imageAlt, children, reverse = false, badge, imageClassName, className }: MediaSplitProps) {
  return (
    <div className={cn("grid items-center gap-10 lg:grid-cols-2 lg:gap-16", className)}>
      <div className={cn("relative", reverse && "lg:order-2")}>
        <div className={cn("relative aspect-[4/5] overflow-hidden rounded-2xl bg-mint sm:aspect-[5/4] lg:aspect-[4/5]", imageClassName)}>
          <Image src={image} alt={imageAlt} fill sizes="(max-width: 1024px) 100vw, 50vw" quality={70} className="object-cover" />
        </div>
        {badge ? (
          <div className={cn("absolute -bottom-5 max-w-[80%] rounded-2xl bg-white p-4 shadow-xl", reverse ? "right-5 md:-right-5" : "left-5 md:-left-5")}>
            {badge}
          </div>
        ) : null}
      </div>
      <div className={cn(reverse && "lg:order-1")}>{children}</div>
    </div>
  )
}
