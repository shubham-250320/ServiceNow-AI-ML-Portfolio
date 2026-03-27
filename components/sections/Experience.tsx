"use client";
import { motion } from "framer-motion";
import { CheckCircle2, Building2 } from "lucide-react";
import { EXPERIENCE } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";

export function Experience() {
  return (
    <section id="experience" className="relative py-28 px-6">
      {/* Section background */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 50% at 0% 50%, rgba(75,158,255,0.04) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Experience"
          title="Where I've Built"
          subtitle="4+ years of production-grade work across enterprise platforms serving tens of thousands of users."
        />

        <div className="relative max-w-4xl">
          {/* Vertical line */}
          <div className="absolute left-[23px] top-4 bottom-4 w-px bg-gradient-to-b from-blue-500/50 via-purple-500/30 to-transparent hidden md:block" />

          <div className="space-y-12">
            {EXPERIENCE.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative flex gap-6 md:gap-10 group"
              >
                {/* Timeline dot */}
                <div className="relative flex-shrink-0 hidden md:block">
                  <div className={`w-12 h-12 rounded-xl border flex items-center justify-center transition-all duration-300 group-hover:scale-105 ${
                    exp.current
                      ? "border-blue-500/40 bg-blue-500/10 shadow-lg shadow-blue-500/10"
                      : "border-purple-500/30 bg-purple-500/5"
                  }`}>
                    <Building2 size={18} className={exp.current ? "text-blue-400" : "text-purple-400"} />
                  </div>
                </div>

                {/* Content card */}
                <div className="flex-1 p-6 md:p-8 rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm group-hover:border-white/[0.12] group-hover:bg-white/[0.04] transition-all duration-300">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">{exp.role}</h3>
                      <p className="text-sm text-slate-400 font-medium">{exp.company}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 items-center">
                      <Badge variant={exp.badgeColor as "blue" | "purple"}>
                        {exp.badge}
                      </Badge>
                      <span className="text-xs text-slate-500 bg-white/[0.04] px-3 py-1 rounded-full border border-white/[0.06]">
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.15 + j * 0.08 }}
                        className="flex items-start gap-3 text-sm text-slate-400 leading-relaxed group/item"
                      >
                        <CheckCircle2 size={14} className="text-blue-400/70 mt-0.5 flex-shrink-0 group-hover/item:text-blue-400 transition-colors" />
                        <span className="group-hover/item:text-slate-300 transition-colors">{highlight}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
