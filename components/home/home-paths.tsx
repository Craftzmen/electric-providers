import Image from "next/image"
import Link from "next/link"
import { ArrowUpRightIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { homePaths } from "@/lib/home-content"
import { PHOTOS } from "@/lib/remote-images"
import { PageSectionHeader } from "@/components/layout/page-section-header"
import { SectionWrapper } from "@/components/layout/section-wrapper"

export function HomePaths() {
  const [primary, ...rest] = homePaths
  return (
    <SectionWrapper background="white" className="pt-4 md:pt-8">
      <PageSectionHeader
        eyebrow="Find your fit"
        title="One provider, three ways we help"
        description="Whether you run a household, a storefront, or a field crew, start with the path that matches you."
      />
      <div className="grid gap-4 lg:grid-cols-2 lg:grid-rows-2">
        <PathCard item={primary} className="lg:row-span-2" tall />
        {rest.map((item) => (
          <PathCard key={item.title} item={item} />
        ))}
      </div>
    </SectionWrapper>
  )
}

function PathCard({ item, className, tall }: { item: (typeof homePaths)[number]; className?: string; tall?: boolean }) {
  return (
    <Link
      href={item.href}
      className={cn(
        "group relative isolate flex min-h-72 flex-col justify-end overflow-hidden rounded-2xl p-7 text-white md:p-9",
        tall && "min-h-96 lg:min-h-full",
        className
      )}
    >
      <Image
        src={PHOTOS[item.photo]}
        alt=""
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        quality={68}
        className="-z-10 object-cover transition duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-forest via-forest/55 to-forest/5" aria-hidden />
      <span className="absolute top-6 right-6 inline-flex size-12 items-center justify-center rounded-full bg-white/15 backdrop-blur transition group-hover:bg-lime group-hover:text-forest">
        <ArrowUpRightIcon className="size-5" aria-hidden />
      </span>
      <h3 className={cn("font-display font-bold", tall ? "text-4xl md:text-5xl" : "text-3xl")}>{item.title}</h3>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-white/80 md:text-base">{item.description}</p>
      <span className="mt-5 inline-flex w-fit rounded-full bg-white px-4 py-2 text-sm font-semibold text-forest">{item.cta}</span>
    </Link>
  )
}
