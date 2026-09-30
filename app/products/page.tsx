import type { Metadata } from "next"
import { RouteHero } from "@/components/layout/route-hero"
import { ProductCollections } from "@/components/home/product-collections"
import { ProductsSupport } from "@/components/products/products-support"
import { ProductsQuoteSteps } from "@/components/products/products-quote-steps"
import { SupportBlock } from "@/components/layout/support-block"
import { siteConfig } from "@/lib/site-nav"
import { PHOTOS } from "@/lib/remote-images"

export const metadata: Metadata = {
  title: "Products",
  description:
    "Pipe and cable locators, inspection cameras, mapping receivers, and accessories for utility and locating contractors, quoted in writing.",
  alternates: { canonical: "/products" },
}

export default function ProductsPage() {
  return (
    <>
      <RouteHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Products" }]}
        eyebrow="Products"
        title="Tools for the crews who keep the grid running"
        description={`The ${siteConfig.name} equipment desk supplies locators, inspection cameras, mapping receivers, and accessories to contractors and utility crews. Every order is priced by written quote.`}
        image={PHOTOS.evCharger}
        imageAlt="Electric vehicle charging station"
        actions={
          <a
            href="#products"
            className="inline-flex min-h-12 items-center rounded-lg bg-forest px-6 text-sm font-semibold text-white transition hover:bg-forest-soft"
          >
            Browse the catalog
          </a>
        }
      />
      <ProductCollections />
      <ProductsSupport />
      <ProductsQuoteSteps />
      <SupportBlock
        title="Talk to the equipment desk"
        description="Press option 4 when you call for equipment sales, or send your job details through our contact form."
        ctaLabel="Ask for a quote"
        ctaHref="/contact?topic=equipment"
      />
    </>
  )
}
