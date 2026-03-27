"use client";
import { motion } from "framer-motion";
import { Layers, Cpu, Code2, GitMerge, ShieldCheck } from "lucide-react";
import { SKILLS } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";

const iconMap: Record<string, React.ElementType> = {
  layers: Layers,
  cpu: Cpu,
  code2: Code2,
  "git-merge": GitMerge,
  "shield-check": ShieldCheck,
};

export function Skills() {
  return (
    <section id="skills" className="relative py-28 px-6">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 50% 40% at 50% 50%, rgba(75,158,255,0.04) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Skills"
          title="Technology Stack"
          subtitle="4 years of production-hardened expertise across the ServiceNow platform, GenAI tooling, and enterprise integration patterns."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILLS.map((group, i) => {
            const Icon = iconMap[group.icon] || Layers;
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group p-6 rounded-2xl border border-white/[0.08] bg-white/[0.02] hover:border-blue-500/20 hover:bg-blue-500/[0.02] transition-all duration-300"
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/15 transition-colors">
                    <Icon size={16} className="text-blue-400" />
                  </div>
                  <h3 className="text-sm font-semibold text-white">{group.category}</h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, j) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 + j * 0.03 }}
                      className="skill-chip text-[11px]"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
