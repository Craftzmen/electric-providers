"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowUpRightIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { productCollections } from "@/lib/product-collections"

const categories = [
  { id: "all", label: "Everything" },
  { id: "locating", label: "Locating and mapping" },
  { id: "inspection", label: "Inspection" },
  { id: "detection", label: "Detection and accessories" },
] as const

type CategoryId = (typeof categories)[number]["id"]

const categoryBySlug: Record<string, Exclude<CategoryId, "all">> = {
  "survey-and-mapping": "locating",
  "utility-locators": "locating",
  "sonde-and-camera-locators": "locating",
  "inspection-cameras": "inspection",
  "pipeline-defect-mapper": "inspection",
  "metal-detectors": "detection",
  accessories: "detection",
}

export function ProductCollections() {
  const [category, setCategory] = useState<CategoryId>("all")
  const visible =
    category === "all" ? productCollections : productCollections.filter((item) => categoryBySlug[item.slug] === category)

  return (
    <SectionWrapper id="products" background="white">
      <div className="flex flex-col gap-8">
        <div className="max-w-xl">
          <p className="eyebrow">The catalog</p>
          <h2 className="heading-section mt-4 text-forest">Field equipment we supply</h2>
          <p className="mt-4 text-base leading-relaxed text-forest/70">
            Locators, cameras, mapping receivers, and the accessories that keep a Vivax-Metrotech kit working. Ask for a
            quote on any line.
          </p>
        </div>
        <div role="group" aria-label="Filter equipment" className="flex flex-wrap gap-2 border-b border-forest/10 pb-6">
          {categories.map((item) => (
            <button
              key={item.id}
              type="button"
              aria-pressed={category === item.id}
              onClick={() => setCategory(item.id)}
              className={cn(
                "min-h-11 rounded-lg border px-4 text-sm font-semibold transition",
                category === item.id
                  ? "border-forest bg-forest text-white"
                  : "border-forest/15 bg-white text-forest/70 hover:border-forest/40 hover:text-forest"
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((item) => (
          <li key={item.slug}>
            <Link
              href={item.href}
              className="group flex h-full flex-col rounded-2xl bg-cream p-3 transition hover:bg-mint"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  quality={70}
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <span className="absolute top-3 right-3 inline-flex size-10 items-center justify-center rounded-full bg-white text-forest transition group-hover:bg-lime">
                  <ArrowUpRightIcon className="size-4" aria-hidden />
                </span>
              </div>
              <div className="flex flex-1 flex-col px-4 pt-5 pb-4">
                <h3 className="font-display text-2xl font-bold text-forest">{item.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-forest/65">{item.description}</p>
                <span className="mt-5 text-sm font-semibold text-forest underline decoration-lime decoration-2 underline-offset-4">
                  Ask for a quote
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </SectionWrapper>
  )
}
