"use client"

import { useEffect, useRef, useState } from "react"
import Spline from "@splinetool/react-spline"

const RAW_SCENE_URL = process.env.NEXT_PUBLIC_SPLINE_SCENE_URL

const SPLINE_SCENE_URL =
  RAW_SCENE_URL &&
  RAW_SCENE_URL.includes("prod.spline.design") &&
  RAW_SCENE_URL.endsWith(".splinecode")
    ? RAW_SCENE_URL
    : null

export function SplineBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [ready, setReady] = useState(false)

  if (!SPLINE_SCENE_URL) {
    return (
      <div
        className="fixed inset-0 z-50"
        style={{ backgroundColor: "#06080D" }}
        aria-hidden="true"
      />
    )
  }

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let scrollTimer: ReturnType<typeof setTimeout> | null = null

    const onWheel = () => {
      container.style.pointerEvents = "none"
      if (scrollTimer) clearTimeout(scrollTimer)
      scrollTimer = setTimeout(() => {
        container.style.pointerEvents = "auto"
      }, 120)
    }

    const onClick = (e: MouseEvent) => {
      if (!container.contains(e.target as Node)) return

      container.style.pointerEvents = "none"
      const el = document.elementFromPoint(
        e.clientX,
        e.clientY
      ) as HTMLElement | null
      container.style.pointerEvents = "auto"

      if (!el) return

      el.dispatchEvent(
        new MouseEvent("click", {
          bubbles: true,
          cancelable: true,
          clientX: e.clientX,
          clientY: e.clientY,
          view: window,
        })
      )

      const anchor = el.closest("a") as HTMLAnchorElement | null
      if (!anchor) return

      const href = anchor.getAttribute("href")
      if (!href) return

      if (href.startsWith("#")) {
        e.preventDefault()
        const target = document.querySelector(href)
        if (target) target.scrollIntoView({ behavior: "smooth" })
      } else {
        e.preventDefault()
        if (anchor.target === "_blank") {
          window.open(href, "_blank", "noopener,noreferrer")
        } else {
          window.location.href = href
        }
      }
    }

    const onTouchStart = () => {
      container.style.pointerEvents = "none"
    }
    const onTouchEnd = () => {
      setTimeout(() => {
        container.style.pointerEvents = "auto"
      }, 200)
    }

    window.addEventListener("wheel", onWheel, { passive: true })
    document.addEventListener("click", onClick, true)
    window.addEventListener("touchstart", onTouchStart, { passive: true })
    window.addEventListener("touchend", onTouchEnd, { passive: true })

    return () => {
      window.removeEventListener("wheel", onWheel)
      document.removeEventListener("click", onClick, true)
      window.removeEventListener("touchstart", onTouchStart)
      window.removeEventListener("touchend", onTouchEnd)
      if (scrollTimer) clearTimeout(scrollTimer)
    }
  }, [])

  return (
    <>
      {!ready && (
        <div
          className="fixed inset-0 z-50"
          style={{ backgroundColor: "#06080D" }}
          aria-hidden="true"
        />
      )}

      <div
        ref={containerRef}
        className="fixed inset-0 z-50"
        style={{ pointerEvents: "auto" }}
        aria-hidden="true"
      >
        <Spline
          scene={SPLINE_SCENE_URL}
          onLoad={() => setReady(true)}
        />
      </div>
    </>
  )
}
