"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { SectionWrapper } from "@/components/section-wrapper"
import { featuredProjects } from "@/data/portfolio"
import { ArrowRight, ExternalLink, ChevronDown, ChevronUp } from "lucide-react"

const typeColors: Record<string, string> = {
  source: "border-cosmic-accent/60 bg-cosmic-accent/10 text-cosmic-accent",
  queue: "border-glow-blue/60 bg-glow-blue/10 text-glow-blue",
  process: "border-chart-5/60 bg-chart-5/10 text-chart-5",
  ml: "border-glow-blue-soft/60 bg-glow-blue-soft/10 text-glow-blue-soft",
  storage: "border-cosmic-glow/60 bg-cosmic-glow/10 text-cosmic-glow",
  output: "border-glow-blue/60 bg-glow-blue/10 text-glow-blue",
  gateway: "border-cosmic-accent/60 bg-cosmic-accent/10 text-cosmic-accent",
}

function ArchitectureDiagram({
  nodes,
}: {
  nodes: { label: string; type: string }[]
}) {
  return (
    <div className="flex flex-wrap items-center gap-2 py-4">
      {nodes.map((node, i) => (
        <div key={node.label} className="flex items-center gap-2">
          <div
            className={`rounded-lg border px-3 py-2 text-xs font-medium ${
              typeColors[node.type] || "border-border bg-surface text-text-secondary"
            }`}
          >
            {node.label}
          </div>
          {i < nodes.length - 1 && (
            <ArrowRight size={14} className="text-border" />
          )}
        </div>
      ))}
    </div>
  )
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof featuredProjects)[0]
  index: number
}) {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group rounded-2xl border border-border bg-card backdrop-blur-xl transition-all hover:border-glow-blue/30 hover:glow-blue"
    >
      {/* Header */}
      <div className="p-6 pb-4 md:p-8 md:pb-4">
        <div className="mb-2 flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-text-primary md:text-2xl">
              {project.title}
            </h3>
            <p className="mt-1 font-mono text-sm text-glow-blue">{project.tagline}</p>
          </div>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 rounded-lg p-2 text-text-secondary transition-all hover:text-glow-blue hover:bg-glow-blue/10"
              aria-label={`View ${project.title} on GitHub`}
              style={{ pointerEvents: 'auto' }}
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
        <p className="text-sm font-medium text-cosmic-accent">{project.impact}</p>
      </div>

      {/* Architecture */}
      <div className="px-6 md:px-8">
        <ArchitectureDiagram nodes={project.architecture} />
      </div>

      {/* Tech badges */}
      <div className="flex flex-wrap gap-2 px-6 py-4 md:px-8">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-md bg-surface px-2.5 py-1 text-xs font-medium text-text-secondary"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Expand toggle */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex w-full items-center justify-center gap-2 border-t border-border px-6 py-3 text-sm text-text-secondary transition-colors hover:text-glow-blue"
        aria-expanded={expanded}
        style={{ pointerEvents: 'auto' }}
      >
        {expanded ? "Show less" : "View details"}
        {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>

      {/* Expanded content */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="grid gap-6 border-t border-border p-6 md:grid-cols-2 md:p-8">
              {/* Problem */}
              <div>
                <h4 className="mb-2 font-mono text-xs font-semibold uppercase tracking-wider text-cosmic-accent">
                  Problem
                </h4>
                <p className="text-sm leading-relaxed text-text-secondary">
                  {project.problem}
                </p>
              </div>
              {/* Solution */}
              <div>
                <h4 className="mb-2 font-mono text-xs font-semibold uppercase tracking-wider text-glow-blue">
                  Solution
                </h4>
                <p className="text-sm leading-relaxed text-text-secondary">
                  {project.solution}
                </p>
              </div>
              {/* Challenges */}
              <div className="md:col-span-2">
                <h4 className="mb-3 font-mono text-xs font-semibold uppercase tracking-wider text-text-secondary">
                  Challenges
                </h4>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {project.challenges.map((c) => (
                    <li
                      key={c}
                      className="flex items-start gap-2 text-sm text-text-secondary"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-glow-blue" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export function Projects() {
  return (
    <SectionWrapper id="projects">
      <div className="mb-12">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-3 block font-mono text-sm text-glow-blue"
        >
          // featured systems
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl font-bold text-text-primary md:text-4xl text-balance"
        >
          What I&apos;ve built
        </motion.h2>
      </div>

      <div className="flex flex-col gap-6">
        {featuredProjects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </SectionWrapper>
  )
}
