"use client";
import { motion } from "framer-motion";
import { Trophy, Award, Star } from "lucide-react";
import { RECOGNITION } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";

const iconMap: Record<string, React.ElementType> = {
  trophy: Trophy,
  award: Award,
  star: Star,
};

export function Recognition() {
  return (
    <section id="recognition" className="relative py-28 px-6">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 40% at 30% 50%, rgba(245,158,11,0.04) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Recognition"
          title="Awards & Achievements"
          subtitle="Consistently recognised for AI innovation at the highest levels — executive awards and global hackathon podiums."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {RECOGNITION.map((award, i) => {
            const Icon = iconMap[award.icon] || Trophy;
            return (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="relative p-7 rounded-2xl border border-amber-500/15 bg-amber-500/[0.03] overflow-hidden group hover:border-amber-500/30 hover:bg-amber-500/[0.06] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/5"
              >
                {/* Background shimmer */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(245,158,11,0.05), transparent)" }}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-5 group-hover:bg-amber-500/15 group-hover:border-amber-500/40 transition-all duration-300">
                    <Icon size={20} className="text-amber-400" />
                  </div>

                  {/* Year badge */}
                  <Badge variant="amber" className="mb-3">{award.year}</Badge>

                  {/* Title */}
                  <h3 className="text-base font-semibold text-white mb-1">{award.title}</h3>
                  <p className="text-xs text-amber-400/80 font-medium mb-3">{award.event}</p>
                  <p className="text-sm text-slate-400 leading-relaxed">{award.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
