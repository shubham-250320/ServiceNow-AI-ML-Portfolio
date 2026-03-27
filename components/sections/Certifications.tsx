"use client";
import { motion } from "framer-motion";
import { BadgeCheck, ExternalLink } from "lucide-react";
import { CERTIFICATIONS } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Certifications() {
  return (
    <section id="certifications" className="relative py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Certifications"
          title="ServiceNow Certified"
          subtitle="4 active certifications covering system administration, application development, ITSM, and cutting-edge AI capabilities."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CERTIFICATIONS.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-6 rounded-2xl border border-white/[0.08] bg-white/[0.02] hover:-translate-y-1 hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
              style={{
                ["--cert-color" as string]: cert.color,
              } as React.CSSProperties}
            >
              {/* Top accent bar */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 opacity-60 group-hover:opacity-100 transition-opacity"
                style={{ background: cert.color }}
              />

              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{ background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${cert.color}10, transparent)` }}
              />

              <div className="relative z-10">
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                  style={{ background: `${cert.color}15`, border: `1px solid ${cert.color}30` }}
                >
                  <BadgeCheck size={20} style={{ color: cert.color }} />
                </div>

                {/* Short name */}
                <div
                  className="text-2xl font-bold mb-2"
                  style={{ color: cert.color }}
                >
                  {cert.short}
                </div>

                {/* Full name */}
                <p className="text-xs text-slate-400 leading-relaxed mb-4">{cert.name}</p>

                {/* Issuer */}
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-600 font-medium">{cert.issuer}</span>
                  <ExternalLink size={12} className="text-slate-700 group-hover:text-slate-400 transition-colors" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
