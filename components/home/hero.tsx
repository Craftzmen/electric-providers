import Image from "next/image"
import Link from "next/link"
import { ShieldCheckIcon } from "lucide-react"
import { homeHero } from "@/lib/home-content"
import { PHOTOS } from "@/lib/remote-images"
import { ZipLookupForm } from "@/components/home/zip-lookup-form"

export function Hero() {
  return (
    <section className="border-b border-forest/8 bg-cream">
      <div className="mx-auto grid max-w-[1240px] gap-12 px-5 py-12 md:px-8 md:py-16 lg:grid-cols-12 lg:items-center lg:gap-14 lg:py-20">
        <div className="lg:col-span-6">
          <p className="eyebrow">{homeHero.eyebrow}</p>
          <h1 className="heading-display mt-5 text-forest lg:text-[3.75rem]">
            {homeHero.title}{" "}
            <span className="relative isolate whitespace-nowrap text-moss">
              {homeHero.titleAccent}
              <span className="absolute inset-x-0 bottom-1 -z-10 h-3 rounded-sm bg-lime/55" aria-hidden />
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-forest/70 md:text-lg">{homeHero.lead}</p>
          <ZipLookupForm className="mt-8" />
          <p className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-forest/60">
            <ShieldCheckIcon className="size-4 text-moss" aria-hidden />
            No credit card needed.
            <Link href="/how-it-works" className="font-semibold text-forest underline decoration-lime-deep decoration-2 underline-offset-4">
              See how switching works
            </Link>
          </p>
        </div>

        <div className="lg:col-span-6">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-mint lg:aspect-[5/6]">
            <Image
              src={PHOTOS.homeGarden}
              alt="White two-story house with a front porch and a green lawn"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 600px"
              quality={72}
              className="object-cover"
            />
            <div className="absolute inset-x-4 bottom-4 grid grid-cols-2 gap-3 sm:inset-x-6 sm:bottom-6">
              {homeHero.chips.map((chip) => (
                <div key={chip.label} className="rounded-xl bg-white/95 p-4 shadow-lg backdrop-blur">
                  <p className="text-2xl font-bold tracking-tight text-forest md:text-3xl">{chip.value}</p>
                  <p className="mt-0.5 text-xs leading-snug text-forest/65">{chip.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
