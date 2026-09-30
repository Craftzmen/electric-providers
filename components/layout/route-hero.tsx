import Link from "next/link"
import Image, { type StaticImageData } from "next/image"
import type { ReactNode } from "react"
import { ChevronRightIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export type RouteHeroBreadcrumb = { label: string; href?: string }

type RouteHeroProps = {
  breadcrumbs: RouteHeroBreadcrumb[]
  eyebrow?: string
  title: ReactNode
  description?: string
  aside?: ReactNode
  actions?: ReactNode
  image?: StaticImageData
  imageAlt?: string
  className?: string
}

export function Breadcrumbs({ items, className }: { items: RouteHeroBreadcrumb[]; className?: string }) {
  return (
    <nav aria-label="Breadcrumb" className={cn("mb-6", className)}>
      <ol className="flex flex-wrap items-center gap-1.5 text-sm">
        {items.map((c, i) => (
          <li key={`${c.label}-${i}`} className="flex items-center gap-1.5">
            {i > 0 ? <ChevronRightIcon className="size-3.5 text-forest/35" aria-hidden /> : null}
            {c.href ? (
              <Link href={c.href} className="font-medium text-forest/60 transition hover:text-forest">
                {c.label}
              </Link>
            ) : (
              <span aria-current="page" className="font-semibold text-forest">
                {c.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

/** Split page opener: copy on the left, photo or supporting card on the right. */
export function RouteHero({
  breadcrumbs,
  eyebrow,
  title,
  description,
  aside,
  actions,
  image,
  imageAlt = "",
  className,
}: RouteHeroProps) {
  const hasSide = Boolean(image || aside)

  return (
    <section className={cn("border-b border-forest/8 bg-cream", className)}>
      <div className="mx-auto grid max-w-[1240px] gap-10 px-5 py-12 md:px-8 md:py-16 lg:grid-cols-12 lg:items-center lg:gap-14 lg:py-20">
        <div className={hasSide ? "lg:col-span-6" : "lg:col-span-9"}>
          <Breadcrumbs items={breadcrumbs} />
          {eyebrow ? <p className="eyebrow mb-4">{eyebrow}</p> : null}
          <h1 className="heading-display text-forest">{title}</h1>
          {description ? (
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-forest/70 md:text-lg">{description}</p>
          ) : null}
          {actions ? <div className="mt-8 flex flex-wrap gap-3">{actions}</div> : null}
        </div>

        {hasSide ? (
          <div className="lg:col-span-6">
            {image ? (
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-mint">
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 600px"
                  quality={72}
                  className="object-cover"
                />
              </div>
            ) : null}
            {aside ? <div className={image ? "relative z-10 -mt-12 px-4 sm:px-8" : undefined}>{aside}</div> : null}
          </div>
        ) : null}
      </div>
    </section>
  )
}
