"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, Zap } from "lucide-react";
import { PROJECTS } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";

const colorMap: Record<string, { border: string; glow: string; text: string; bg: string; badge: "blue" | "purple" | "cyan" | "green" }> = {
  blue: {
    border: "hover:border-blue-500/40",
    glow: "hover:shadow-blue-500/10",
    text: "text-blue-400",
    bg: "bg-blue-500/10",
    badge: "blue",
  },
  purple: {
    border: "hover:border-purple-500/40",
    glow: "hover:shadow-purple-500/10",
    text: "text-purple-400",
    bg: "bg-purple-500/10",
    badge: "purple",
  },
  cyan: {
    border: "hover:border-cyan-500/40",
    glow: "hover:shadow-cyan-500/10",
    text: "text-cyan-400",
    bg: "bg-cyan-500/10",
    badge: "cyan",
  },
  green: {
    border: "hover:border-green-500/40",
    glow: "hover:shadow-green-500/10",
    text: "text-green-400",
    bg: "bg-green-500/10",
    badge: "green",
  },
};

export function Projects() {
  const featured = PROJECTS.find((p) => p.featured);
  const rest = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative py-28 px-6">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 40% at 100% 50%, rgba(168,85,247,0.05) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto ">
        <SectionHeading
          label="Projects"
          title="Systems That Ship"
          subtitle="Production-grade AI and automation solutions — measured in real metrics, not slide decks."
        />

        {/* Featured project */}
        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`relative mb-6 p-8 md:p-10 rounded-2xl border border-white/[0.08] bg-white/[0.02] overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-2xl ${colorMap[featured.color].border} ${colorMap[featured.color].glow}`}
          >
            {/* Top accent bar */}
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{ background: "linear-gradient(90deg, transparent, #4B9EFF, #A855F7, transparent)" }}
            />

            {/* Background glow on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(75,158,255,0.06), transparent)" }}
            />

            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              {/* Left */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Badge variant="blue">Featured</Badge>
                  <Badge variant="amber">{featured.year}</Badge>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">{featured.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">{featured.description}</p>
                <div className="flex items-center gap-2 text-xs text-amber-400 bg-amber-500/10 border border-amber-500/20 rounded-lg px-3 py-2 w-fit">
                  <Zap size={12} />
                  {featured.achievement}
                </div>
              </div>

              {/* Right: metric */}
              <div className="flex flex-col items-center md:items-end gap-4">
                <div className="text-center md:text-right">
                  <div className="text-5xl md:text-6xl font-bold text-white mb-1 tracking-tight">
                    {featured.impact}
                  </div>
                  <div className="text-sm text-slate-500 uppercase tracking-wider">{featured.impactLabel}</div>
                </div>

                <div className="flex flex-wrap gap-2 justify-center md:justify-end">
                  {featured.tech.map((t) => (
                    <span key={t} className="skill-chip">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Other projects grid */}
        <div className="grid md:grid-cols-3 gap-5">
          {rest.map((project, i) => {
            const colors = colorMap[project.color];
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative p-6 rounded-2xl border border-white/[0.08] bg-white/[0.02] overflow-hidden group cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${colors.border} ${colors.glow}`}
              >
                {/* Top accent */}
                <div className={`absolute top-0 left-0 right-0 h-px ${colors.bg}`} />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex gap-2 flex-wrap">
                      <Badge variant={colors.badge}>{project.year}</Badge>
                    </div>
                    <ArrowUpRight size={16} className="text-slate-600 group-hover:text-white transition-colors" />
                  </div>

                  <h3 className="text-base font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-5">{project.description}</p>

                  {/* Impact metric */}
                  <div className={`mb-4 p-3 rounded-xl ${colors.bg} border border-white/[0.06]`}>
                    <div className={`text-2xl font-bold ${colors.text} mb-0.5`}>{project.impact}</div>
                    <div className="text-xs text-slate-500">{project.impactLabel}</div>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 3).map((t) => (
                      <span key={t} className="skill-chip text-[11px]">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
