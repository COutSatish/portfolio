"use client"

import { motion } from "framer-motion"
import { SectionWrapper } from "@/components/section-wrapper"
import { timeline } from "@/data/portfolio"
import { Briefcase, GraduationCap } from "lucide-react"

export function Timeline() {
  return (
    <SectionWrapper id="timeline">
      <div className="mb-12">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-3 block font-mono text-sm text-glow-blue"
        >
          // journey
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl font-bold text-text-primary md:text-4xl text-balance"
        >
          My growth path
        </motion.h2>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-border md:left-1/2 md:-translate-x-px" />

        <div className="flex flex-col gap-12">
          {timeline.map((item, i) => {
            const isLeft = i % 2 === 0
            const Icon = item.type === "education" ? GraduationCap : Briefcase
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex flex-col md:flex-row md:items-start ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-6 z-10 flex h-3 w-3 -translate-x-1/2 items-center justify-center rounded-full border-2 border-glow-blue bg-background md:left-1/2">
                  <div className="h-1.5 w-1.5 rounded-full bg-glow-blue" />
                </div>

                {/* Card */}
                <div
                  className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${
                    isLeft ? "md:pr-8 md:text-right" : "md:pl-8"
                  }`}
                >
                  <div className="group rounded-xl border border-border bg-card backdrop-blur-xl p-5 transition-all hover:border-glow-blue/30 hover:glow-blue">
                    <div
                      className={`mb-3 flex items-center gap-2 ${
                        isLeft ? "md:justify-end" : ""
                      }`}
                    >
                      <div
                        className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                          item.type === "education"
                            ? "bg-cosmic-accent/10 text-cosmic-accent"
                            : "bg-glow-blue/10 text-glow-blue"
                        }`}
                      >
                        <Icon size={16} />
                      </div>
                      <span className="font-mono text-xs text-text-secondary">
                        {item.year}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-text-primary">
                      {item.title}
                    </h3>
                    <p className="mt-0.5 text-sm font-medium text-glow-blue">
                      {item.org}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </SectionWrapper>
  )
}
