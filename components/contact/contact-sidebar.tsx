import { MapPinIcon } from "lucide-react"
import { siteConfig } from "@/lib/site-nav"

const phoneMenu = [
  { key: "1", label: "Outage or gas leak, connect to my utility" },
  { key: "2", label: "Bills and payments" },
  { key: "3", label: "Sign-ups, moves, and plan changes" },
  { key: "4", label: "Business and equipment sales" },
] as const

export function ContactSidebar() {
  return (
    <div className="space-y-4">
      <div className="rounded-2xl bg-cream p-6">
        <h2 className="font-display text-xl font-bold text-forest">Phone menu shortcuts</h2>
        <ol className="mt-4 space-y-2.5">
          {phoneMenu.map((item) => (
            <li key={item.key} className="flex items-center gap-3 text-sm text-forest/80">
              <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-forest font-semibold text-lime">
                {item.key}
              </span>
              {item.label}
            </li>
          ))}
        </ol>
      </div>
      <div className="flex items-start gap-4 rounded-2xl border border-forest/10 p-6">
        <MapPinIcon className="mt-0.5 size-5 shrink-0 text-moss" aria-hidden />
        <address className="text-sm leading-relaxed text-forest/75 not-italic">
          <span className="block font-semibold text-forest">{siteConfig.name}</span>
          {siteConfig.addressLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </address>
      </div>
    </div>
  )
}
