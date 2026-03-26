"use client"

import { motion } from "framer-motion"
import { SectionWrapper } from "@/components/section-wrapper"
import { skillCategories } from "@/data/portfolio"
import { Code, Layers, Database, Cloud, Shield, Monitor } from "lucide-react"

const iconMap: Record<string, React.ElementType> = {
  code: Code,
  layers: Layers,
  database: Database,
  cloud: Cloud,
  shield: Shield,
  monitor: Monitor,
}

export function Skills() {
  return (
    <SectionWrapper id="skills">
      <div className="mb-12">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-3 block font-mono text-sm text-glow-blue"
        >
          // tech stack
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl font-bold text-text-primary md:text-4xl text-balance"
        >
          Skills & technologies
        </motion.h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((cat, i) => {
          const Icon = iconMap[cat.icon] || Code
          return (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group card-hover rounded-2xl border border-border bg-card backdrop-blur-xl p-6 transition-all hover:border-glow-blue/30 hover:glow-blue"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-glow-blue/10 text-glow-blue transition-colors group-hover:bg-glow-blue/20">
                  <Icon size={20} />
                </div>
                <h3 className="text-base font-semibold text-text-primary">
                  {cat.name}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="skill-tag rounded-md bg-surface px-3 py-1.5 text-xs font-medium text-text-secondary hover:text-glow-blue hover:bg-glow-blue/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
