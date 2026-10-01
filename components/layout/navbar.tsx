"use client"

import * as React from "react"
import { startTransition } from "react"
import { createPortal } from "react-dom"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowUpRightIcon, MenuIcon, PhoneIcon, XIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { audienceNav, mainNav, policyNav, siteConfig, utilityNav } from "@/lib/site-nav"
import { BrandLogo } from "@/components/layout/brand-logo"

export function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = React.useState(false)
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const [mobileSlideIn, setMobileSlideIn] = React.useState(false)
  const mobilePanelRef = React.useRef<HTMLDivElement>(null)
  const mobileClosingUserRef = React.useRef(false)

  const closeMobile = React.useCallback(() => {
    mobileClosingUserRef.current = true
    setMobileSlideIn((slideIn) => {
      if (!slideIn) {
        queueMicrotask(() => setMobileOpen(false))
      }
      return false
    })
  }, [])

  const openMobile = React.useCallback(() => {
    mobileClosingUserRef.current = false
    setMobileOpen(true)
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setMobileSlideIn(true))
    })
  }, [])

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  React.useEffect(() => {
    startTransition(() => {
      setMobileSlideIn(false)
      setMobileOpen(false)
    })
  }, [pathname])

  React.useEffect(() => {
    if (!mobileOpen) return
    const html = document.documentElement
    const prevHtmlOverflow = html.style.overflow
    const prevBodyOverflow = document.body.style.overflow
    html.style.overflow = "hidden"
    document.body.style.overflow = "hidden"
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMobile()
    }
    document.addEventListener("keydown", onKey)
    return () => {
      html.style.overflow = prevHtmlOverflow
      document.body.style.overflow = prevBodyOverflow
      document.removeEventListener("keydown", onKey)
    }
  }, [mobileOpen, closeMobile])

  React.useEffect(() => {
    if (!mobileOpen || mobileSlideIn || !mobileClosingUserRef.current) return
    const id = window.setTimeout(() => {
      mobileClosingUserRef.current = false
      setMobileOpen(false)
    }, 400)
    return () => window.clearTimeout(id)
  }, [mobileOpen, mobileSlideIn])

  React.useEffect(() => {
    if (!mobileOpen) return
    const panel = mobilePanelRef.current
    if (!panel) return

    const onTransitionEnd = (e: TransitionEvent) => {
      if (e.target !== panel || e.propertyName !== "opacity") return
      setMobileSlideIn((current) => {
        if (!current) {
          mobileClosingUserRef.current = false
          queueMicrotask(() => setMobileOpen(false))
        }
        return current
      })
    }

    panel.addEventListener("transitionend", onTransitionEnd)
    return () => panel.removeEventListener("transitionend", onTransitionEnd)
  }, [mobileOpen])

  const isActive = (href: string) => {
    const path = href.split("?")[0]
    if (path === "/") return pathname === "/"
    return pathname.startsWith(path)
  }

  const menuOpen = mobileOpen && mobileSlideIn

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur-lg transition-shadow",
        scrolled ? "border-forest/10 shadow-[0_8px_24px_-16px_hsl(158_45%_16%/0.3)]" : "border-forest/8"
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-[72px] max-w-[1240px] items-center justify-between gap-3 px-5 md:px-8 xl:gap-6"
      >
        <BrandLogo size="sm" className="shrink-0" />

        <ul className="hidden h-full items-center lg:flex">
          {[...mainNav, ...policyNav].map((item) => (
            <li key={item.href} className="h-full">
              <Link
                href={item.href}
                className={cn(
                  "relative inline-flex h-full items-center px-1.5 text-[13px] font-semibold whitespace-nowrap transition-colors after:absolute after:inset-x-1.5 after:bottom-0 after:h-[3px] after:rounded-t-full after:transition-colors xl:px-3 xl:text-sm xl:after:inset-x-3",
                  isActive(item.href)
                    ? "text-forest after:bg-lime-deep"
                    : "text-forest/65 after:bg-transparent hover:text-forest"
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="hidden h-10 items-center rounded-lg px-3.5 text-sm font-semibold text-forest transition hover:bg-mint sm:inline-flex lg:hidden"
          >
            Contact
          </Link>
          <Link
            href={siteConfig.phoneTel}
            className="inline-flex h-10 items-center gap-2 rounded-lg bg-forest px-4 text-sm font-bold text-white transition hover:bg-forest-soft"
          >
            <PhoneIcon className="size-4 text-lime" aria-hidden />
            <span className="hidden xl:inline">{siteConfig.phone}</span>
            <span className="xl:hidden">Call</span>
          </Link>
          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={menuOpen ? closeMobile : openMobile}
            className="inline-flex size-10 items-center justify-center rounded-lg border border-forest/15 text-forest transition hover:bg-mint lg:hidden"
          >
            {menuOpen ? <XIcon className="size-5" /> : <MenuIcon className="size-5" />}
          </button>
        </div>
      </nav>

      {typeof document !== "undefined" && mobileOpen
        ? createPortal(
            <div
              ref={mobilePanelRef}
              id="mobile-navigation"
              role="dialog"
              aria-modal="true"
              aria-label="Site navigation"
              className={cn(
                "fixed inset-0 z-[610] flex h-dvh flex-col bg-cream transition-[opacity,transform] duration-300 ease-out lg:hidden",
                mobileSlideIn ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-3 opacity-0"
              )}
            >
              <div className="relative flex h-[72px] shrink-0 items-center justify-between border-b border-forest/10 bg-white px-5">
                <BrandLogo size="sm" />
                <button
                  type="button"
                  className="inline-flex size-10 items-center justify-center rounded-lg border border-forest/15 text-forest"
                  onClick={closeMobile}
                  aria-label="Close menu"
                >
                  <XIcon className="size-5" />
                </button>
              </div>
              <div className="relative flex min-h-0 flex-1 flex-col overflow-y-auto px-5 pb-8">
                <ul className="mt-4 divide-y divide-forest/10">
                  {[...mainNav, ...policyNav].map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={closeMobile}
                        className={cn(
                          "flex items-center justify-between py-4 text-xl font-bold tracking-tight",
                          isActive(link.href) ? "text-moss" : "text-forest"
                        )}
                      >
                        {link.label}
                        <ArrowUpRightIcon className="size-5 text-forest/30" aria-hidden />
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap gap-2">
                  {[...audienceNav, ...utilityNav].map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={closeMobile}
                      className="inline-flex min-h-10 items-center rounded-lg border border-forest/15 bg-white px-3.5 text-sm font-medium text-forest"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>

                <div className="mt-auto pt-10">
                  <Link
                    href={siteConfig.phoneTel}
                    onClick={closeMobile}
                    className="flex h-13 w-full items-center justify-center gap-2 rounded-xl bg-forest text-base font-bold text-white"
                  >
                    <PhoneIcon className="size-5" aria-hidden />
                    Call {siteConfig.phone}
                  </Link>
                  <p className="mt-3 text-center text-xs text-forest/60">{siteConfig.hours}</p>
                </div>
              </div>
            </div>,
            document.body
          )
        : null}
    </header>
  )
}
