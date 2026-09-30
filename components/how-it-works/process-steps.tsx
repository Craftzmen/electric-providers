import Image from "next/image"
import { processSteps } from "@/lib/how-it-works-content"
import { PHOTOS } from "@/lib/remote-images"
import { SectionWrapper } from "@/components/layout/section-wrapper"

export function ProcessSteps() {
  return (
    <SectionWrapper background="white">
      <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="eyebrow">The process</p>
          <h2 className="heading-section mt-4 text-forest">From sign-up to first statement</h2>
          <p className="mt-4 text-base leading-relaxed text-forest/70">
            Nothing changes at your meter. Your utility keeps delivering power; only the supply price on your statement changes.
          </p>
          <div className="relative mt-8 aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src={PHOTOS.smartPhone}
              alt="Hand holding a smartphone next to a smart home device on a door"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              quality={70}
              className="object-cover"
            />
          </div>
        </div>
        <ol className="relative">
          <span className="absolute top-2 bottom-2 left-[27px] w-0.5 rounded-full bg-gradient-to-b from-lime via-moss to-forest" aria-hidden />
          {processSteps.map((step) => (
            <li key={step.step} className="relative flex gap-6 pb-12 last:pb-0">
              <span className="relative z-10 inline-flex size-14 shrink-0 items-center justify-center rounded-full border-4 border-white bg-mint font-display text-xl font-bold text-forest">
                {step.step}
              </span>
              <div className="rounded-2xl border border-forest/10 bg-white p-6 md:p-7">
                <h3 className="font-display text-2xl font-bold text-forest">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-forest/70 md:text-[15px]">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </SectionWrapper>
  )
}
