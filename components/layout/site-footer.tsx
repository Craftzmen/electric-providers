import Link from "next/link"
import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react"
import {
  footerBusinessLinks,
  footerCompanyLinks,
  footerLegalLinks,
  footerResidentialLinks,
  footerSupportLinks,
  siteConfig,
} from "@/lib/site-nav"
import { BrandLogo } from "@/components/layout/brand-logo"

type Column = { heading: string; links: { href: string; label: string }[] }

const columns: Column[] = [
  { heading: "Residential", links: footerResidentialLinks },
  { heading: "Business", links: footerBusinessLinks },
  { heading: "Company", links: footerCompanyLinks },
  { heading: "Support", links: footerSupportLinks },
  { heading: "Legal", links: footerLegalLinks },
]

export function SiteFooter() {
  return (
    <footer className="rounded-t-3xl bg-cream text-forest md:rounded-t-3xl">
      <div className="mx-auto max-w-[1240px] px-5 pt-14 pb-8 md:px-8 md:pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_2fr]">
          <div>
            <BrandLogo layout="stacked" size="md" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-forest/65">{siteConfig.tagline}.</p>
            <ul className="mt-7 space-y-3 text-sm">
              <li>
                <Link href={siteConfig.phoneTel} className="inline-flex items-center gap-3 font-semibold hover:text-moss">
                  <span className="inline-flex size-9 items-center justify-center rounded-full bg-lime">
                    <PhoneIcon className="size-4" aria-hidden />
                  </span>
                  {siteConfig.phone}
                </Link>
              </li>
              <li>
                <Link href={siteConfig.emailMailto} className="inline-flex items-center gap-3 break-all hover:text-moss">
                  <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-white">
                    <MailIcon className="size-4" aria-hidden />
                  </span>
                  {siteConfig.email}
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-white">
                  <MapPinIcon className="size-4" aria-hidden />
                </span>
                {siteConfig.addressLines.join(", ")}
              </li>
            </ul>
            <p className="mt-4 text-xs text-forest/55">Support hours: {siteConfig.hours}</p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-5">
            {columns.map((column) => (
              <div key={column.heading}>
                <p className="mb-4 text-sm font-bold tracking-wide">{column.heading}</p>
                <ul className="space-y-2.5">
                  {column.links.map((link) => (
                    <li key={`${column.heading}-${link.label}`}>
                      <Link href={link.href} className="text-sm text-forest/70 transition hover:text-forest">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-14 rounded-2xl bg-white/70 p-5 text-xs leading-relaxed text-forest/60">{siteConfig.legalNotice}</p>

        <p
          className="mt-12 select-none font-display text-[9.2vw] leading-none font-extrabold tracking-[-0.05em] whitespace-nowrap text-forest/[0.07] lg:text-[7.5rem]"
          aria-hidden
        >
          Electric Providers
        </p>

        <div className="mt-6 flex flex-col gap-2 border-t border-forest/10 pt-6 text-xs text-forest/55 sm:flex-row sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p>Honest pricing. Real people. Cleaner power.</p>
        </div>
      </div>
    </footer>
  )
}
