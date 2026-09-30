import { aboutIntro } from "@/lib/about-content"
import { PHOTOS } from "@/lib/remote-images"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { MediaSplit } from "@/components/shared/media-split"

export function AboutIntro() {
  return (
    <SectionWrapper background="white">
      <MediaSplit
        image={PHOTOS.brightOffice}
        imageAlt="Bright, plant-filled office lounge with modern chairs"
        reverse
        badge={
          <p className="text-sm">
            <span className="block font-display text-2xl font-bold text-forest">Brooklyn, NY</span>
            <span className="text-forest/60">Where our team works</span>
          </p>
        }
      >
        <p className="eyebrow">Our story</p>
        <h2 className="heading-section mt-4 text-forest">A power company that talks like a person</h2>
        <div className="mt-6 space-y-4 text-base leading-relaxed text-forest/70">
          {aboutIntro.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </div>
      </MediaSplit>
    </SectionWrapper>
  )
}
