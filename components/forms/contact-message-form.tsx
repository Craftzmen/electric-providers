"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { ChevronDownIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { formatRate, plans } from "@/lib/rates-content"
import { siteConfig } from "@/lib/site-nav"

const topics = [
  { value: "start", label: "Start new service" },
  { value: "transfer", label: "Move my plan to a new address" },
  { value: "billing", label: "Bill or payment question" },
  { value: "account", label: "Update my account or plan" },
  { value: "business", label: "Business sign-up or multi-location quote" },
  { value: "equipment", label: "Field equipment quote" },
  { value: "outage", label: "Outage help" },
  { value: "accessibility", label: "Accessibility request" },
  { value: "general", label: "Something else" },
] as const

type TopicValue = (typeof topics)[number]["value"]

function isTopic(value: string): value is TopicValue {
  return topics.some((t) => t.value === value)
}

function topicFromSearchParams(searchParams: URLSearchParams) {
  const topic = searchParams.get("topic") ?? ""
  if (isTopic(topic)) return topic
  if (searchParams.get("plan")) return "start"
  return ""
}

function planFromSearchParams(searchParams: URLSearchParams) {
  const planParam = searchParams.get("plan") ?? ""
  return plans.some((p) => p.slug === planParam) ? planParam : ""
}

const fieldClass = "h-12 rounded-lg border-forest/15 bg-white px-4 text-sm text-forest"
const labelClass = "pl-1 text-xs font-semibold text-forest/70"

export function ContactMessageForm() {
  const searchParams = useSearchParams()
  const [status, setStatus] = useState<"idle" | "sent">("idle")
  const [selectedTopic, setSelectedTopic] = useState("")
  const [selectedPlan, setSelectedPlan] = useState("")
  const topic = selectedTopic || topicFromSearchParams(searchParams)
  const plan = selectedPlan || planFromSearchParams(searchParams)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = String(data.get("name") ?? "").trim()
    const email = String(data.get("email") ?? "").trim()
    const phone = String(data.get("phone") ?? "").trim()
    const address = String(data.get("address") ?? "").trim()
    const accountNumber = String(data.get("accountNumber") ?? "").trim()
    const topicValue = String(data.get("topic") ?? "").trim()
    const planValue = String(data.get("plan") ?? "").trim()
    const message = String(data.get("message") ?? "").trim()
    if (!name || !email || !message) return

    const topicLabel = topics.find((t) => t.value === topicValue)?.label ?? "Not specified"
    const planLabel = plans.find((p) => p.slug === planValue)?.name ?? "Not specified"
    const subject = encodeURIComponent(`[${siteConfig.name}] ${topicLabel} from ${name}`)
    const lines = [
      message,
      "",
      `Topic: ${topicLabel}`,
      `Plan: ${planLabel}`,
      `Service address: ${address || "Not provided"}`,
      `Account number: ${accountNumber || "Not provided"}`,
    ]
    const contactLine = phone ? `${name}\n${email}\n${phone}` : `${name}\n${email}`
    const body = encodeURIComponent(`${lines.join("\n")}\n\n${contactLine}`)
    window.location.href = `${siteConfig.emailMailto}?subject=${subject}&body=${body}`
    setStatus("sent")
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-1.5">
          <Label htmlFor="topic" className={labelClass}>What can we help with?</Label>
          <div className="relative">
            <select
              id="topic"
              name="topic"
              value={topic}
              onChange={(e) => setSelectedTopic(e.target.value)}
              className={`flex w-full appearance-none border pr-12 outline-none focus-visible:border-moss focus-visible:ring-4 focus-visible:ring-mint ${fieldClass}`}
            >
              <option value="">Choose a topic</option>
              {topics.map((t) => (
                <option key={t.value} value={t.value}>
                  {t.label}
                </option>
              ))}
            </select>
            <ChevronDownIcon className="pointer-events-none absolute top-1/2 right-5 size-4 -translate-y-1/2 text-forest/50" aria-hidden />
          </div>
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="plan" className={labelClass}>Plan (if signing up)</Label>
          <div className="relative">
            <select
              id="plan"
              name="plan"
              value={plan}
              onChange={(e) => setSelectedPlan(e.target.value)}
              className={`flex w-full appearance-none border pr-12 outline-none focus-visible:border-moss focus-visible:ring-4 focus-visible:ring-mint ${fieldClass}`}
            >
              <option value="">Not sure yet</option>
              {plans.map((p) => (
                <option key={p.slug} value={p.slug}>
                  {p.name} · {formatRate(p.rateCentsPerKwh)} · {p.termMonths} months
                </option>
              ))}
            </select>
            <ChevronDownIcon className="pointer-events-none absolute top-1/2 right-5 size-4 -translate-y-1/2 text-forest/50" aria-hidden />
          </div>
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-1.5">
          <Label htmlFor="name" className={labelClass}>Full name</Label>
          <Input id="name" name="name" autoComplete="name" required className={fieldClass} />
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="email" className={labelClass}>Email</Label>
          <Input id="email" name="email" type="email" autoComplete="email" required className={fieldClass} />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-1.5">
          <Label htmlFor="phone" className={labelClass}>Phone</Label>
          <Input id="phone" name="phone" type="tel" autoComplete="tel" className={fieldClass} />
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="accountNumber" className={labelClass}>Utility account number (optional)</Label>
          <Input id="accountNumber" name="accountNumber" inputMode="numeric" autoComplete="off" className={fieldClass} />
        </div>
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="address" className={labelClass}>Service address</Label>
        <Input id="address" name="address" autoComplete="street-address" placeholder="Street, city, state, ZIP" className={fieldClass} />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="message" className={labelClass}>Your message</Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us what you need. Signing up? Add your ideal start date and current supplier."
          className="min-h-36 rounded-xl border-forest/15 bg-white px-4 text-sm text-forest"
        />
      </div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" size="lg" className="w-full bg-forest px-8 text-white hover:bg-forest-soft sm:w-auto">
          Send message
        </Button>
        {status === "sent" ? (
          <p className="text-xs text-forest/60">
            Mail app did not open? Email{" "}
            <a className="font-medium text-forest underline underline-offset-4" href={siteConfig.emailMailto}>
              {siteConfig.email}
            </a>
            .
          </p>
        ) : (
          <p className="text-xs text-forest/60">Sending opens your email app with your message filled in.</p>
        )}
      </div>
    </form>
  )
}
