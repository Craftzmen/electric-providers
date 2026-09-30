import Image from "next/image"
import Link from "next/link"
import { ArrowRightIcon, CheckIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { services } from "@/lib/services-content"
import { PHOTOS } from "@/lib/remote-images"
import { SectionWrapper } from "@/components/layout/section-wrapper"

export function ServicesGrid() {
  return (
    <SectionWrapper background="white">
      <div className="space-y-20 md:space-y-28">
        {services.map((service, index) => {
          const flipped = index % 2 === 1
          return (
            <article key={service.slug} id={service.slug} className="grid scroll-mt-28 items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div className={cn("relative", flipped && "lg:order-2")}>
                <div
                  className={cn(
                    "relative aspect-[5/4] overflow-hidden rounded-3xl",
                    flipped ? "" : ""
                  )}
                >
                  <Image
                    src={PHOTOS[service.photo]}
                    alt={service.photoAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    quality={70}
                    className="object-cover"
                  />
                </div>
                <span
                  className={cn(
                    "absolute top-5 rounded-full bg-white px-4 py-2 text-xs font-semibold text-forest shadow-md",
                    flipped ? "right-5" : "left-5"
                  )}
                >
                  {service.tag}
                </span>
              </div>
              <div className={cn(flipped && "lg:order-1")}>
                <p className="font-display text-6xl font-bold text-lime-deep/40">0{index + 1}</p>
                <h2 className="heading-section mt-2 text-forest">{service.title}</h2>
                <p className="mt-4 text-base leading-relaxed text-forest/70">{service.description}</p>
                <p className="mt-5 rounded-2xl bg-cream px-5 py-4 text-sm text-forest/80">
                  <span className="font-semibold text-forest">A great fit for: </span>
                  {service.bestFor}
                </p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {service.included.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-forest/80">
                      <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-lime">
                        <CheckIcon className="size-3 text-forest" aria-hidden />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href={service.href}
                  className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-lg bg-forest px-6 text-sm font-semibold text-white transition hover:bg-forest-soft"
                >
                  {service.cta}
                  <ArrowRightIcon className="size-4" aria-hidden />
                </Link>
              </div>
            </article>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
