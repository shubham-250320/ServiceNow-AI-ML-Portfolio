"use client";
import { motion } from "framer-motion";
import { Linkedin, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { PROFILE } from "@/lib/data";
import { Button } from "@/components/ui/Button";

export function Contact() {
  return (
    <section id="contact" className="relative py-28 px-6">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(75,158,255,0.05) 0%, transparent 70%)" }}
      />

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative p-10 md:p-14 rounded-3xl border border-white/[0.08] bg-white/[0.02] overflow-hidden text-center"
        >
          {/* Gradient border top */}
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, #4B9EFF, #A855F7, transparent)" }}
          />

          {/* Background glow */}
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 70% 40% at 50% 0%, rgba(75,158,255,0.05), transparent)" }}
          />

          <div className="relative z-10">
            {/* Status */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/20 bg-green-500/5 text-green-400 text-xs font-medium mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
              Currently open to senior ServiceNow AI roles
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Let&apos;s Build Something
              <br />
              <span style={{
                background: "linear-gradient(135deg, #4B9EFF, #A855F7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Significant
              </span>
            </h2>

            <p className="text-slate-400 text-base max-w-xl mx-auto mb-10 leading-relaxed">
              I&apos;m looking for senior platform engineering or AI/automation architect roles where I can design systems that operate at real enterprise scale. If that&apos;s you, let&apos;s talk.
            </p>

            {/* Location */}
            <div className="flex items-center justify-center gap-1.5 text-slate-500 text-sm mb-10">
              <MapPin size={13} className="text-blue-400" />
              <span>{PROFILE.location}</span>
            </div>

            {/* CTA links */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button
                variant="primary"
                size="lg"
                href={PROFILE.linkedin}
              >
                <Linkedin size={16} />
                Connect on LinkedIn
                <ArrowUpRight size={14} />
              </Button>
              <Button
                variant="ghost"
                size="lg"
                href={`mailto:${PROFILE.email}`}
              >
                <Mail size={16} />
                {PROFILE.email}
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
