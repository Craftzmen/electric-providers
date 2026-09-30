import { QuoteIcon } from "lucide-react"
import { RouteHero } from "@/components/layout/route-hero"
import { aboutPage, aboutQuote } from "@/lib/about-content"
import { PHOTOS } from "@/lib/remote-images"

export function AboutHeader() {
  return (
    <RouteHero
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
      eyebrow={aboutPage.eyebrow}
      title={aboutPage.title}
      description={aboutPage.description}
      image={PHOTOS.cityStreet}
      imageAlt="Busy city avenue lined with tall buildings"
      aside={
        <figure className="rounded-2xl border border-forest/8 bg-white p-6 shadow-[0_20px_40px_-24px_hsl(158_45%_16%/0.35)]">
          <QuoteIcon className="size-7 text-lime-deep" aria-hidden />
          <blockquote className="mt-3 text-lg leading-snug font-semibold tracking-tight text-forest">
            {aboutQuote.text}
          </blockquote>
          <figcaption className="mt-4 text-sm font-semibold text-moss">{aboutQuote.attribution}</figcaption>
        </figure>
      }
    />
  )
}
