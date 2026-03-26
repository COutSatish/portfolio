"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react"
import { personalInfo } from "@/data/portfolio"

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Content */}
      <div className="relative z-20 mx-auto max-w-4xl px-6 text-center">
        {/* Name Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8 inline-block"
        >
          <span className="rounded-full border border-glow-blue/30 bg-background/60 backdrop-blur-md px-4 py-2 font-mono text-sm text-glow-blue">
            {personalInfo.name}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-6 text-4xl font-bold leading-tight tracking-tight text-text-primary md:text-6xl lg:text-7xl text-balance"
        >
          {personalInfo.headline.split(personalInfo.highlightedText)[0]}
          <span className="text-gradient-cosmic">{personalInfo.highlightedText}</span>
          {personalInfo.headline.split(personalInfo.highlightedText)[1]}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-10 font-mono text-base tracking-wider text-text-secondary md:text-lg"
        >
          {personalInfo.subtitle}
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2 rounded-xl bg-glow-blue px-8 py-3.5 text-base font-semibold text-background transition-all hover:bg-glow-blue-soft glow-blue"
            style={{ pointerEvents: 'auto' }}
          >
            View Work
            <span className="transition-transform group-hover:translate-x-1">
              &rarr;
            </span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-background/40 backdrop-blur-md px-8 py-3.5 text-base font-medium text-text-primary transition-all hover:border-cosmic-accent hover:text-cosmic-accent"
            style={{ pointerEvents: 'auto' }}
          >
            Contact
          </a>
        </motion.div>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex items-center justify-center gap-5"
        >
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg p-2 text-text-secondary transition-all hover:text-glow-blue hover:bg-glow-blue/10"
            aria-label="GitHub"
            style={{ pointerEvents: 'auto' }}
          >
            <Github size={22} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg p-2 text-text-secondary transition-all hover:text-glow-blue hover:bg-glow-blue/10"
            aria-label="LinkedIn"
            style={{ pointerEvents: 'auto' }}
          >
            <Linkedin size={22} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="rounded-lg p-2 text-text-secondary transition-all hover:text-glow-blue hover:bg-glow-blue/10"
            aria-label="Email"
            style={{ pointerEvents: 'auto' }}
          >
            <Mail size={22} />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={28} className="text-text-secondary/60" />
        </motion.div>
      </motion.div>
    </section>
  )
}
