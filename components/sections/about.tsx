"use client"

import { motion } from "framer-motion"
import { SectionWrapper } from "@/components/section-wrapper"
import { aboutText } from "@/data/portfolio"
import { Cpu, Eye, ShieldCheck } from "lucide-react"

const pillars = [
  {
    icon: Cpu,
    title: "Scalability",
    description: "Designing systems that grow with demand, not crumble under it.",
  },
  {
    icon: Eye,
    title: "Observability",
    description: "If you can't measure it, you can't fix it. Monitoring everything.",
  },
  {
    icon: ShieldCheck,
    title: "Resilience",
    description: "Building for failure so the system never truly fails.",
  },
]

export function About() {
  return (
    <SectionWrapper id="about">
      <div className="mb-12">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-3 block font-mono text-sm text-glow-blue"
        >
          // about me
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl font-bold text-text-primary md:text-4xl text-balance"
        >
          Engineering philosophy
        </motion.h2>
      </div>

      <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
        {/* Text column */}
        <div className="flex flex-col gap-6 lg:w-3/5">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg leading-relaxed text-text-secondary"
          >
            {aboutText.philosophy}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg leading-relaxed text-text-secondary"
          >
            {aboutText.approach}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-lg leading-relaxed text-text-secondary"
          >
            {aboutText.focus}
          </motion.p>
        </div>

        {/* Pillars column */}
        <div className="flex flex-col gap-4 lg:w-2/5">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="group card-hover rounded-xl border border-border bg-card backdrop-blur-xl p-6 transition-all hover:border-glow-blue/40 hover:glow-blue"
            >
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-glow-blue/10 text-glow-blue transition-colors group-hover:bg-glow-blue/20">
                  <pillar.icon size={20} />
                </div>
                <h3 className="text-lg font-semibold text-text-primary">
                  {pillar.title}
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-text-secondary">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
