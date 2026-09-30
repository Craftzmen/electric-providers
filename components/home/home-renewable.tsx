import Image from "next/image"
import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"
import { homeRenewable } from "@/lib/home-content"
import { PHOTOS } from "@/lib/remote-images"

export function HomeRenewable() {
  return (
    <section className="px-5 md:px-8">
      <div className="relative mx-auto max-w-[1176px] overflow-hidden rounded-2xl bg-forest text-white">
        <div className="grid lg:grid-cols-[1fr_1.1fr]">
          <div className="relative min-h-72 lg:min-h-full">
            <Image
              src={PHOTOS.offshoreWind}
              alt="Offshore wind turbines standing in calm blue water"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              quality={70}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/80 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-forest/40" aria-hidden />
            <div className="absolute bottom-6 left-6 rounded-xl bg-lime p-5 text-forest md:bottom-8 md:left-8">
              <p className="font-display text-5xl leading-none font-bold tracking-[-0.04em] md:text-6xl">{homeRenewable.stat}</p>
              <p className="mt-2 max-w-[12rem] text-xs font-medium leading-snug">{homeRenewable.statLabel}</p>
            </div>
          </div>
          <div className="px-7 py-12 md:px-12 md:py-16 lg:py-20">
            <p className="eyebrow text-lime">
              Renewable
            </p>
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight md:text-5xl">{homeRenewable.title}</h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70">{homeRenewable.description}</p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-3">
              {homeRenewable.points.map((point, index) => (
                <li key={point} className="rounded-2xl border border-white/10 p-4 text-sm text-white/85">
                  <span className="block font-display text-lg text-lime">0{index + 1}</span>
                  {point}
                </li>
              ))}
            </ul>
            <Link
              href={homeRenewable.cta.href}
              className="mt-9 inline-flex min-h-12 items-center gap-2 rounded-lg bg-white px-6 text-sm font-semibold text-forest transition hover:bg-lime"
            >
              {homeRenewable.cta.label}
              <ArrowRightIcon className="size-4" aria-hidden />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
