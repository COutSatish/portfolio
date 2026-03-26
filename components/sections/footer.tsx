import { personalInfo } from "@/data/portfolio"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card backdrop-blur-xl px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        <p className="font-mono text-sm text-text-secondary">
          {"Built by "}
          <span className="text-glow-blue">{personalInfo.name}</span>
        </p>
        <p className="font-mono text-xs text-text-secondary/60">
          Designed with intention. Built with Next.js.
        </p>
      </div>
    </footer>
  )
}
