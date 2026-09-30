import { Suspense } from "react"
import { ContactMessageForm } from "@/components/forms/contact-message-form"

export function ContactForm() {
  return (
    <div className="rounded-2xl bg-cream p-6 md:p-10">
      <p className="eyebrow">Write to us</p>
      <h2 className="heading-section mt-4 text-forest">Send a message</h2>
      <p className="mt-3 max-w-lg text-sm leading-relaxed text-forest/65">
        Use this for sign-ups, moves, billing questions, or an equipment quote. We reply by email within one business day.
      </p>
      <div className="mt-8">
        <Suspense fallback={<div className="h-96 animate-pulse rounded-3xl bg-white/60" />}>
          <ContactMessageForm />
        </Suspense>
      </div>
    </div>
  )
}
