"use client"

import { motion } from "framer-motion"
import { SectionWrapper } from "@/components/section-wrapper"
import { keyAchievements } from "@/data/portfolio"
import { Trophy, TrendingUp } from "lucide-react"

export function Achievements() {
  return (
    <SectionWrapper id="achievements">
      <div className="mb-12">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-3 block font-mono text-sm text-glow-blue"
        >
          // impact
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl font-bold text-text-primary md:text-4xl text-balance"
        >
          Key achievements & impact
        </motion.h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {keyAchievements.map((achievement, i) => (
          <motion.div
            key={achievement.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group card-hover relative overflow-hidden rounded-2xl border border-border bg-card backdrop-blur-xl p-6 transition-all hover:border-glow-blue/40 hover:glow-blue"
          >
            {/* Metric highlight */}
            <div className="mb-4 flex items-end justify-between">
              <div>
                <span className="text-3xl font-bold text-glow-blue">{achievement.metric}</span>
                <span className="ml-2 text-xs font-medium text-text-secondary">{achievement.metricLabel}</span>
              </div>
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-glow-blue/10 text-glow-blue transition-colors group-hover:bg-glow-blue/20">
                <TrendingUp size={16} />
              </div>
            </div>

            <h3 className="mb-1 text-base font-bold text-text-primary">{achievement.title}</h3>
            <span className="mb-3 inline-block rounded-full bg-cosmic-accent/10 px-2.5 py-0.5 text-xs font-medium text-cosmic-accent">
              {achievement.company}
            </span>
            <p className="text-sm leading-relaxed text-text-secondary">{achievement.description}</p>

            {/* Subtle gradient overlay on hover */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-glow-blue/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
