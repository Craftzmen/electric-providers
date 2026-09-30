import Image from "next/image"
import { HandshakeIcon } from "lucide-react"
import { commitments } from "@/lib/why-choose-us-content"
import { PHOTOS } from "@/lib/remote-images"
import { PageSectionHeader } from "@/components/layout/page-section-header"
import { SectionWrapper } from "@/components/layout/section-wrapper"

export function Commitments() {
  return (
    <SectionWrapper background="cream">
      <PageSectionHeader eyebrow="In writing" title="Commitments you can hold us to" />
      <div className="grid gap-4 lg:grid-cols-3">
        <div className="relative min-h-80 overflow-hidden rounded-2xl lg:row-span-2">
          <Image
            src={PHOTOS.handsSeedling}
            alt="Two cupped hands holding a small green seedling over soil"
            fill
            sizes="(max-width: 1024px) 100vw, 33vw"
            quality={70}
            className="object-cover"
          />
          <div className="absolute inset-x-4 bottom-4 flex items-center gap-3 rounded-2xl bg-white/90 p-4 backdrop-blur">
            <HandshakeIcon className="size-6 shrink-0 text-moss" aria-hidden />
            <p className="text-sm font-semibold text-forest">Every commitment is printed in your welcome packet.</p>
          </div>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-2 lg:row-span-2">
          {commitments.map((item, index) => (
            <li
              key={item.title}
              className={index === 0 || index === 3 ? "rounded-2xl bg-forest p-8 text-white" : "rounded-2xl bg-white p-8 text-forest"}
            >
              <h3 className="font-display text-2xl font-bold">{item.title}</h3>
              <p className={index === 0 || index === 3 ? "mt-3 text-sm leading-relaxed text-white/75" : "mt-3 text-sm leading-relaxed text-forest/70"}>
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </SectionWrapper>
  )
}
