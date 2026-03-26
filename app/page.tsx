"use client"

import { Navbar } from "@/components/sections/navbar"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Projects } from "@/components/sections/projects"
import { Skills } from "@/components/sections/skills"
import { Achievements } from "@/components/sections/achievements"
import { Timeline } from "@/components/sections/timeline"
import { Certifications } from "@/components/sections/certifications"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/sections/footer"
import { SplineBackground } from "@/components/spline-background"

export default function HomePage() {
  return (
    <main className="relative min-h-screen">
      {/* Spline 3D Background - fixed, renders as canvas in DOM so cursor tracking works everywhere */}
      <SplineBackground key="spline-v2" />

      {/* All page content */}
      <div className="relative z-[60]" style={{ pointerEvents: 'none' }}>
        <Navbar />
        <Hero />
        <div className="bg-grid-pattern bg-stars">
          <About />
          <Projects />
          <Skills />
          <Achievements />
          <Timeline />
          <Certifications />
          <Contact />
        </div>
        <Footer />
      </div>
    </main>
  )
}
