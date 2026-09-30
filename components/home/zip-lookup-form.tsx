"use client"

import { useId, useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowRightIcon, MapPinIcon } from "lucide-react"
import { cn } from "@/lib/utils"

type ZipLookupFormProps = {
  className?: string
  audience?: "residential" | "business"
}

export function ZipLookupForm({ className, audience }: ZipLookupFormProps) {
  const router = useRouter()
  const inputId = useId()
  const errorId = `${inputId}-error`
  const [zip, setZip] = useState("")
  const [error, setError] = useState<string | null>(null)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const trimmed = zip.trim()
    if (!/^\d{5}$/.test(trimmed)) {
      setError("Please enter a 5-digit ZIP code.")
      return
    }
    setError(null)
    const params = new URLSearchParams({ zip: trimmed })
    if (audience) params.set("audience", audience)
    router.push(`/plans?${params.toString()}`)
  }

  return (
    <form onSubmit={handleSubmit} noValidate className={cn("w-full max-w-lg", className)}>
      <label htmlFor={inputId} className="sr-only">
        ZIP code
      </label>
      <div
        className={cn(
          "flex items-center gap-2 rounded-xl border bg-white p-1.5 pl-4 shadow-[0_10px_30px_-18px_hsl(158_45%_16%/0.4)] transition focus-within:ring-4 focus-within:ring-mint",
          error ? "border-destructive" : "border-forest/15"
        )}
      >
        <MapPinIcon className="size-5 shrink-0 text-moss" aria-hidden />
        <input
          id={inputId}
          name="zip"
          inputMode="numeric"
          autoComplete="postal-code"
          pattern="\d{5}"
          maxLength={5}
          placeholder="Enter your ZIP code"
          value={zip}
          onChange={(e) => setZip(e.target.value.replace(/\D/g, "").slice(0, 5))}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? errorId : undefined}
          className="h-11 min-w-0 flex-1 bg-transparent text-base text-forest placeholder:text-forest/45 focus:outline-none"
        />
        <button
          type="submit"
          className="inline-flex h-11 shrink-0 items-center gap-1.5 rounded-lg bg-forest px-5 text-sm font-semibold text-white transition hover:bg-forest-soft"
        >
          Check prices
          <ArrowRightIcon className="size-4" aria-hidden />
        </button>
      </div>
      {error ? (
        <p id={errorId} className="mt-2 pl-1 text-xs text-destructive">
          {error}
        </p>
      ) : null}
    </form>
  )
}
