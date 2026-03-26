"use client"

import { motion } from "framer-motion"
import { SectionWrapper } from "@/components/section-wrapper"
import { personalInfo } from "@/data/portfolio"
import { Mail, Github, Linkedin, Phone, MapPin } from "lucide-react"

export function Contact() {
  return (
    <SectionWrapper id="contact">
      <div className="mx-auto max-w-2xl text-center">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-3 block font-mono text-sm text-glow-blue"
        >
          // let&apos;s connect
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-4 text-3xl font-bold text-text-primary md:text-4xl text-balance"
        >
          Ready to build something reliable?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-10 text-lg leading-relaxed text-text-secondary"
        >
          I&apos;m always open to discussing new opportunities, interesting
          projects, or ways to collaborate on building robust backend systems.
        </motion.p>

        {/* Contact card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="rounded-2xl border border-border bg-card backdrop-blur-xl p-8"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <a
              href={`mailto:${personalInfo.email}`}
              className="group flex items-center gap-4 rounded-xl border border-border bg-surface backdrop-blur-md p-4 transition-all hover:border-glow-blue/40 hover:glow-blue"
              style={{ pointerEvents: 'auto' }}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-glow-blue/10 text-glow-blue transition-colors group-hover:bg-glow-blue/20">
                <Mail size={20} />
              </div>
              <div className="text-left">
                <p className="text-xs text-text-secondary">Email</p>
                <p className="text-sm font-medium text-text-primary">
                  {personalInfo.email}
                </p>
              </div>
            </a>

            <a
              href={`tel:${personalInfo.phone}`}
              className="group flex items-center gap-4 rounded-xl border border-border bg-surface backdrop-blur-md p-4 transition-all hover:border-cosmic-accent/40 hover:glow-cosmic"
              style={{ pointerEvents: 'auto' }}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-cosmic-accent/10 text-cosmic-accent transition-colors group-hover:bg-cosmic-accent/20">
                <Phone size={20} />
              </div>
              <div className="text-left">
                <p className="text-xs text-text-secondary">Phone</p>
                <p className="text-sm font-medium text-text-primary">
                  {personalInfo.phone}
                </p>
              </div>
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-xl border border-border bg-surface backdrop-blur-md p-4 transition-all hover:border-glow-blue/40 hover:glow-blue"
              style={{ pointerEvents: 'auto' }}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-glow-blue/10 text-glow-blue transition-colors group-hover:bg-glow-blue/20">
                <Github size={20} />
              </div>
              <div className="text-left">
                <p className="text-xs text-text-secondary">GitHub</p>
                <p className="text-sm font-medium text-text-primary">
                  COutSatish
                </p>
              </div>
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-xl border border-border bg-surface backdrop-blur-md p-4 transition-all hover:border-glow-blue/40 hover:glow-blue"
              style={{ pointerEvents: 'auto' }}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-glow-blue/10 text-glow-blue transition-colors group-hover:bg-glow-blue/20">
                <Linkedin size={20} />
              </div>
              <div className="text-left">
                <p className="text-xs text-text-secondary">LinkedIn</p>
                <p className="text-sm font-medium text-text-primary">
                  satishpyata
                </p>
              </div>
            </a>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-text-secondary">
            <MapPin size={14} />
            <span>{personalInfo.location}</span>
          </div>

          <div className="mt-6">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 rounded-xl bg-glow-blue px-8 py-3.5 text-base font-semibold text-background transition-all hover:bg-glow-blue-soft glow-blue"
              style={{ pointerEvents: 'auto' }}
            >
              Get in Touch
              <span>&rarr;</span>
            </a>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
