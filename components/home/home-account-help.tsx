import Link from "next/link"
import { ArrowRightLeftIcon, ArrowUpRightIcon, HousePlugIcon, ReceiptIcon, ZapOffIcon } from "lucide-react"
import { accountHelp, type AccountHelp } from "@/lib/home-content"
import { PageSectionHeader } from "@/components/layout/page-section-header"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { InfoBarCell, InfoBarGrid, infoBarLinkClass } from "@/components/shared/info-bar-grid"

const icons: Record<AccountHelp["icon"], typeof HousePlugIcon> = {
  start: HousePlugIcon,
  transfer: ArrowRightLeftIcon,
  outage: ZapOffIcon,
  bill: ReceiptIcon,
}

export function HomeAccountHelp() {
  return (
    <SectionWrapper background="white">
      <PageSectionHeader eyebrow="Already a customer?" title="Account help, in one tap" />
      <InfoBarGrid columns={4} aria-label="Account help">
        {accountHelp.map((action) => {
          const Icon = icons[action.icon]
          return (
            <InfoBarCell key={action.label}>
              <Link href={action.href} className={`${infoBarLinkClass} flex-col`}>
                <span className="flex w-full items-center justify-between">
                  <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-mint text-moss transition group-hover:bg-lime group-hover:text-forest">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <ArrowUpRightIcon className="size-5 text-forest/30 transition group-hover:text-forest" aria-hidden />
                </span>
                <span>
                  <span className="block font-display text-xl font-bold text-forest">{action.label}</span>
                  <span className="mt-1.5 block text-sm leading-relaxed text-forest/65">{action.description}</span>
                </span>
              </Link>
            </InfoBarCell>
          )
        })}
      </InfoBarGrid>
    </SectionWrapper>
  )
}
