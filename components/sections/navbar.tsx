"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Journey", href: "/#timeline" },
  { label: "Certifications", href: "/#certifications" },
  { label: "Contact", href: "/#contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
            href="/"
            className="font-mono text-lg font-bold text-glow-blue tracking-tight"
            style={{ pointerEvents: 'auto' }}
          >
          {"<SP />"}
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-text-secondary transition-colors hover:text-glow-blue"
              style={{ pointerEvents: 'auto' }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/resume"
            className="rounded-lg border border-glow-blue/30 px-4 py-2 text-sm font-medium text-glow-blue transition-all hover:border-glow-blue hover:bg-glow-blue/10"
            style={{ pointerEvents: 'auto' }}
          >
            Resume
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-text-secondary md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          style={{ pointerEvents: 'auto' }}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-b border-border bg-card backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base text-text-secondary transition-colors hover:text-glow-blue"
                  style={{ pointerEvents: 'auto' }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/resume"
                className="mt-2 w-fit rounded-lg border border-glow-blue/30 px-4 py-2 text-sm font-medium text-glow-blue transition-all hover:border-glow-blue hover:bg-glow-blue/10"
                style={{ pointerEvents: 'auto' }}
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
