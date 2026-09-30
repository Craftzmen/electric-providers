import { trustFacts } from "@/lib/home-content"

export function HomeTrustStrip() {
  return (
    <section aria-label="At a glance" className="border-b border-forest/8 bg-white">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <ul className="grid grid-cols-2 lg:grid-cols-4">
          {trustFacts.map((fact, index) => (
            <li
              key={fact.label}
              className={[
                "flex flex-col gap-1 py-6 md:py-8",
                index % 2 === 1 ? "border-l border-forest/10 pl-5 md:pl-8" : "",
                index === 2 ? "max-lg:border-t max-lg:border-forest/10 lg:border-l lg:border-forest/10 lg:pl-8" : "",
                index === 3 ? "max-lg:border-t max-lg:border-forest/10" : "",
              ].join(" ")}
            >
              <span className="text-xl font-bold tracking-tight text-forest md:text-2xl">{fact.value}</span>
              <span className="text-sm text-forest/60">{fact.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
