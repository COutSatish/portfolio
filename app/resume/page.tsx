"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/sections/navbar"
import { Footer } from "@/components/sections/footer"
import { SplineBackground } from "@/components/spline-background"
import {
  personalInfo,
  aboutText,
  timeline,
  skillCategories,
  certifications,
  keyAchievements,
  coreCompetencies,
} from "@/data/portfolio"
import {
  Download,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  TrendingUp,
  Award,
  Briefcase,
  GraduationCap,
  ChevronRight,
} from "lucide-react"

export default function ResumePage() {
  const experience = timeline.filter((t) => t.type === "work")
  const education = timeline.filter((t) => t.type === "education")

  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
  }

  return (
    <main className="relative min-h-screen">
      <SplineBackground key="spline-resume" />
      <div className="relative z-[60]" style={{ pointerEvents: 'none' }}>
        <Navbar />
        <div
          className="resume-content mx-auto max-w-5xl px-6 py-32"
        >
          {/* ─── Header ─── */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div>
                <h1 className="text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
                  {personalInfo.name}
                </h1>
                <p className="mt-2 text-xl font-medium text-glow-blue">
                  {personalInfo.title}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-text-secondary">
                  <span className="flex items-center gap-1.5">
                    <Mail size={14} className="text-glow-blue" />{" "}
                    {personalInfo.email}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Phone size={14} className="text-glow-blue" />{" "}
                    {personalInfo.phone}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={14} className="text-glow-blue" />{" "}
                    {personalInfo.location}
                  </span>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-glow-blue transition-colors hover:text-glow-blue-soft"
                  >
                    <Linkedin size={14} /> LinkedIn
                  </a>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-glow-blue transition-colors hover:text-glow-blue-soft"
                  >
                    <Github size={14} /> GitHub
                  </a>
                </div>
              </div>

              <a
                href="/Satish_Pyata_Resume.pdf"
                download
                className="group flex shrink-0 items-center gap-2 rounded-xl border border-glow-blue bg-glow-blue/10 px-7 py-3.5 font-semibold text-glow-blue transition-all hover:bg-glow-blue/20 hover:glow-blue-strong"
                style={{ pointerEvents: 'auto' }}
              >
                <Download
                  size={20}
                  className="transition-transform group-hover:-translate-y-0.5"
                />
                Download PDF
              </a>
            </div>

            {/* Divider */}
            <div className="mt-8 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          </motion.div>

          <div className="space-y-20">
            {/* ─── Professional Summary ─── */}
            <motion.section {...fadeUp} transition={{ delay: 0.1 }}>
              <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold text-text-primary">
                <span className="inline-block h-6 w-1 rounded-full bg-glow-blue" />
                Professional Summary
              </h2>
              <div className="rounded-2xl border border-border bg-card/50 p-6 backdrop-blur-sm">
                <p className="text-text-secondary leading-relaxed">
                  {aboutText.philosophy}
                </p>
                <p className="mt-4 text-text-secondary leading-relaxed">
                  {aboutText.approach}
                </p>
                <p className="mt-4 text-text-secondary leading-relaxed">
                  {aboutText.focus}
                </p>
              </div>
            </motion.section>

            {/* ─── Core Competencies ─── */}
            <motion.section {...fadeUp} transition={{ delay: 0.15 }}>
              <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold text-text-primary">
                <span className="inline-block h-6 w-1 rounded-full bg-cosmic-accent" />
                Core Competencies
              </h2>
              <div className="flex flex-wrap gap-3">
                {coreCompetencies.map((comp) => (
                  <span
                    key={comp}
                    className="rounded-full border border-border bg-card/50 px-4 py-2 text-sm font-medium text-text-secondary backdrop-blur-sm transition-colors hover:border-glow-blue/40 hover:text-glow-blue"
                  >
                    {comp}
                  </span>
                ))}
              </div>
            </motion.section>

            {/* ─── Experience ─── */}
            <motion.section {...fadeUp} transition={{ delay: 0.2 }}>
              <h2 className="mb-8 flex items-center gap-2 text-2xl font-bold text-text-primary">
                <span className="inline-block h-6 w-1 rounded-full bg-glow-blue" />
                Professional Experience
              </h2>
              <div className="relative space-y-0">
                {/* Vertical timeline line */}
                <div className="absolute left-[15px] top-2 bottom-2 w-px bg-border" />

                {experience
                  .slice()
                  .reverse()
                  .map((job, idx) => (
                    <motion.div
                      key={idx}
                      {...fadeUp}
                      transition={{ delay: 0.1 + idx * 0.08 }}
                      className="relative pl-10 pb-10 last:pb-0"
                    >
                      {/* Dot */}
                      <div className="absolute left-[11px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-glow-blue bg-background" />

                      <div className="rounded-xl border border-border bg-card/50 p-5 backdrop-blur-sm transition-all hover:border-glow-blue/30">
                        <div className="mb-2 flex flex-wrap items-center gap-3">
                          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-glow-blue/10 text-glow-blue">
                            <Briefcase size={14} />
                          </div>
                          <span className="font-mono text-xs text-glow-blue">
                            {job.year}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-text-primary">
                          {job.title}
                        </h3>
                        <p className="mb-3 text-sm font-medium text-text-secondary">
                          {job.org}
                        </p>
                        <p className="text-sm leading-relaxed text-text-secondary">
                          {job.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </motion.section>

            {/* ─── Technical Skills ─── */}
            <motion.section {...fadeUp} transition={{ delay: 0.25 }}>
              <h2 className="mb-8 flex items-center gap-2 text-2xl font-bold text-text-primary">
                <span className="inline-block h-6 w-1 rounded-full bg-cosmic-accent" />
                Technical Skills
              </h2>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                {skillCategories.map((category, idx) => (
                  <motion.div
                    key={idx}
                    {...fadeUp}
                    transition={{ delay: 0.1 + idx * 0.06 }}
                    className="rounded-xl border border-border bg-card/50 p-5 backdrop-blur-sm transition-all hover:border-glow-blue/30"
                  >
                    <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-glow-blue">
                      {category.name}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="rounded-md bg-surface px-2.5 py-1 text-xs font-medium text-text-secondary"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* ─── Key Achievements ─── */}
            <motion.section {...fadeUp} transition={{ delay: 0.3 }}>
              <h2 className="mb-8 flex items-center gap-2 text-2xl font-bold text-text-primary">
                <span className="inline-block h-6 w-1 rounded-full bg-glow-blue" />
                Key Achievements & Impact
              </h2>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                {keyAchievements.map((achievement, idx) => (
                  <motion.div
                    key={idx}
                    {...fadeUp}
                    transition={{ delay: 0.1 + idx * 0.06 }}
                    className="group rounded-xl border border-border bg-card/50 p-5 backdrop-blur-sm transition-all hover:border-glow-blue/30"
                  >
                    <div className="mb-3 flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-glow-blue">
                          {achievement.metric}
                        </span>
                        <span className="ml-2 text-xs text-text-secondary">
                          {achievement.metricLabel}
                        </span>
                      </div>
                      <span className="rounded-full bg-cosmic-accent/10 px-2.5 py-0.5 text-xs font-medium text-cosmic-accent">
                        {achievement.company}
                      </span>
                    </div>
                    <h3 className="mb-2 text-sm font-bold text-text-primary">
                      {achievement.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-text-secondary">
                      {achievement.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* ─── Education ─── */}
            <motion.section {...fadeUp} transition={{ delay: 0.35 }}>
              <h2 className="mb-8 flex items-center gap-2 text-2xl font-bold text-text-primary">
                <span className="inline-block h-6 w-1 rounded-full bg-cosmic-accent" />
                Education
              </h2>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                {education
                  .slice()
                  .reverse()
                  .map((edu, idx) => (
                    <motion.div
                      key={idx}
                      {...fadeUp}
                      transition={{ delay: 0.1 + idx * 0.08 }}
                      className="rounded-xl border border-border bg-card/50 p-5 backdrop-blur-sm transition-all hover:border-cosmic-accent/30"
                    >
                      <div className="mb-3 flex items-center gap-2">
                        <div className="flex h-7 w-7 items-center justify-center rounded-md bg-cosmic-accent/10 text-cosmic-accent">
                          <GraduationCap size={14} />
                        </div>
                        <span className="font-mono text-xs text-text-secondary">
                          {edu.year}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-text-primary">
                        {edu.title}
                      </h3>
                      <p className="mb-2 text-sm font-medium text-cosmic-accent">
                        {edu.org}
                      </p>
                      <p className="text-sm leading-relaxed text-text-secondary">
                        {edu.description}
                      </p>
                    </motion.div>
                  ))}
              </div>
            </motion.section>

            {/* ─── Certifications ─── */}
            <motion.section {...fadeUp} transition={{ delay: 0.4 }}>
              <h2 className="mb-8 flex items-center gap-2 text-2xl font-bold text-text-primary">
                <span className="inline-block h-6 w-1 rounded-full bg-glow-blue" />
                Certifications
              </h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {certifications.map((cert, idx) => (
                  <motion.div
                    key={idx}
                    {...fadeUp}
                    transition={{ delay: 0.05 + idx * 0.04 }}
                    className="flex items-start gap-3 rounded-xl border border-border bg-card/50 p-4 backdrop-blur-sm transition-all hover:border-glow-blue/30"
                  >
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-glow-blue/10 text-glow-blue">
                      <Award size={16} />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold leading-snug text-text-primary">
                        {cert.name}
                      </h3>
                      <p className="text-xs text-text-secondary">
                        {cert.issuer} • {cert.date}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* ─── Bottom CTA ─── */}
          <motion.div
            {...fadeUp}
            transition={{ delay: 0.45 }}
            className="mt-20 flex flex-col items-center justify-center gap-4 rounded-2xl border border-border bg-card/50 p-8 text-center backdrop-blur-sm sm:flex-row"
          >
            <p className="text-text-secondary">
              Interested in working together?
            </p>
            <a
              href={`mailto:${personalInfo.email}`}
              className="group flex items-center gap-2 rounded-xl bg-glow-blue px-6 py-3 font-semibold text-background transition-all hover:bg-glow-blue-soft"
              style={{ pointerEvents: 'auto' }}
            >
              Get in Touch
              <ChevronRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
          </motion.div>
        </div>
        <Footer />
      </div>
    </main>
  )
}
