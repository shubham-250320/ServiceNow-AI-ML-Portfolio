"use client";
import { motion } from "framer-motion";
import { MapPin, Zap, Brain, Server, Code2 } from "lucide-react";
import { PROFILE, STATS } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const techStack = [
  "ServiceNow",
  "Now Assist",
  "NASK",
  "Now LLM",
  "Predictive Intelligence",
  "Flow Designer",
  "IntegrationHub",
  "ChatGPT API",
  "JavaScript",
  "REST APIs",
  "CMDB",
  "Virtual Agent",
];

const statIcons = [Zap, Server, Brain, Code2];

export function About() {
  return (
    <section id="about" className="relative py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: text */}
          <div>
            <SectionHeading
              label="About"
              title="Platform Engineering at Enterprise Scale"
              subtitle={undefined}
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4 text-slate-400 text-base leading-relaxed"
            >
              <p>
                I build AI-native systems on the ServiceNow platform that handle real production load — 2,00,000+ users, 400+ weekly incidents, 3,000+ knowledge articles. My work sits at the intersection of enterprise automation and generative AI.
              </p>
              <p>
                At Volkswagen, I architect GenAI middleware integrating LLMs directly into ITSM workflows. At Scania, I shipped ML models into live production that reduced costs by 20%. I write clean, performant GlideRecord logic and design systems that survive scale.
              </p>
              <p>
                I hold 4 active ServiceNow certifications including the Now Assist for ITSM Pro Plus suite cert, and I consistently place top-3 in competitive AI hackathons.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-6 flex items-center gap-2 text-slate-500 text-sm"
            >
              <MapPin size={13} className="text-blue-400" />
              <span>{PROFILE.location}</span>
            </motion.div>

            {/* Tech stack row */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-8 flex flex-wrap gap-2"
            >
              {techStack.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.04 }}
                  className="skill-chip"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Right: stats grid */}
          <div>
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((stat, i) => {
                const Icon = statIcons[i];
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i }}
                    className="relative p-6 rounded-2xl border border-white/[0.08] bg-white/[0.03] overflow-hidden group hover:border-blue-500/20 hover:bg-blue-500/[0.03] transition-all duration-300"
                  >
                    {/* Background glow */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ background: "radial-gradient(circle at 50% 100%, rgba(75,158,255,0.05), transparent)" }}
                    />
                    <div className="relative z-10">
                      <Icon size={18} className="text-blue-400/60 mb-3" />
                      <div className="text-4xl font-bold text-white mb-1 tabular-nums">
                        <AnimatedCounter
                          value={stat.value}
                          suffix={stat.suffix}
                          compact={stat.compact}
                        />
                      </div>
                      <div className="text-xs text-slate-500 uppercase tracking-wider font-medium">
                        {stat.label}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Quote card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-4 p-5 rounded-2xl border border-blue-500/15 bg-blue-500/[0.04]"
            >
              <p className="text-sm text-slate-400 leading-relaxed italic">
                "Not just ticket-by-ticket dev work — I design platform-level systems that eliminate entire categories of manual effort."
              </p>
              <p className="text-xs text-blue-400 mt-2">— Shubham Soni</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
