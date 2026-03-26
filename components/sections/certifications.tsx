"use client"

import { motion } from "framer-motion"
import { SectionWrapper } from "@/components/section-wrapper"
import { certifications } from "@/data/portfolio"
import { Award, BadgeCheck, Cloud, Database, Code, ShieldCheck } from "lucide-react"

const badgeIcons: Record<string, React.ElementType> = {
  professional: ShieldCheck,
  google: BadgeCheck,
  cloud: Cloud,
  data: Database,
  engineering: Code,
}

const badgeColors: Record<string, string> = {
  professional: "bg-glow-blue/10 text-glow-blue border-glow-blue/30",
  google: "bg-cosmic-accent/10 text-cosmic-accent border-cosmic-accent/30",
  cloud: "bg-glow-blue-soft/10 text-glow-blue-soft border-glow-blue-soft/30",
  data: "bg-cosmic-glow/10 text-cosmic-glow border-cosmic-glow/30",
  engineering: "bg-glow-blue/10 text-glow-blue border-glow-blue/30",
}

export function Certifications() {
  return (
    <SectionWrapper id="certifications">
      <div className="mb-12">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-3 block font-mono text-sm text-glow-blue"
        >
          // credentials
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl font-bold text-text-primary md:text-4xl text-balance"
        >
          Certifications
        </motion.h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {certifications.map((cert, i) => {
          const Icon = badgeIcons[cert.badge] || Award
          const colorClass =
            badgeColors[cert.badge] || "bg-surface text-text-secondary border-border"

          return (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group card-hover flex flex-col rounded-xl border border-border bg-card backdrop-blur-xl p-5 transition-all hover:border-glow-blue/30 hover:glow-blue"
            >
              <div
                className={`mb-4 flex h-10 w-10 items-center justify-center rounded-lg border ${colorClass}`}
              >
                <Icon size={18} />
              </div>
              <h3 className="mb-1 text-sm font-semibold leading-snug text-text-primary">
                {cert.name}
              </h3>
              <p className="text-xs text-text-secondary">{cert.issuer}</p>
              <div className="mt-auto pt-3">
                <span className="font-mono text-xs text-text-secondary">
                  {cert.date}
                </span>
                {cert.expires && (
                  <span className="ml-2 text-xs text-text-secondary">
                    {"| Exp: "}{cert.expires}
                  </span>
                )}
              </div>
            </motion.div>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
