"use client";
import { motion } from "framer-motion";
import { ArrowDown, Linkedin, Mail, Github, ExternalLink } from "lucide-react";
import { PROFILE } from "@/lib/data";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(75,158,255,0.12) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 80% 80%, rgba(168,85,247,0.08) 0%, transparent 60%)",
          }}
        />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      {/* Floating orbs */}
      <motion.div
        animate={{ y: [0, -30, 0], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-[10%] w-64 h-64 rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(75,158,255,0.08), transparent)" }}
      />
      <motion.div
        animate={{ y: [0, 20, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/4 right-[10%] w-80 h-80 rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(168,85,247,0.07), transparent)" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center mb-8"
        >
          <Badge variant="green" dot className="text-xs">
            {PROFILE.availability}
          </Badge>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-6"
        >
          <span className="text-white">Building </span>
          <span
            style={{
              background: "linear-gradient(135deg, #fff 0%, #4B9EFF 40%, #A855F7 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            AI-Native
          </span>
          <br />
          <span className="text-white">Enterprise Systems</span>
        </motion.h1>

        {/* Name + title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mb-4"
        >
          <span className="text-lg text-slate-300 font-medium">{PROFILE.name}</span>
          <span className="text-slate-600 mx-3">·</span>
          <span className="text-lg text-slate-400">{PROFILE.title}</span>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {PROFILE.heroSubtitle}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <Button variant="primary" size="lg" href="#projects">
            View Projects
            <ExternalLink size={15} />
          </Button>
          <Button variant="ghost" size="lg" href="/resume">
            Download Resume
          </Button>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex items-center justify-center gap-5"
        >
          {[
            { icon: Linkedin, href: PROFILE.linkedin, label: "LinkedIn" },
            { icon: Mail, href: `mailto:${PROFILE.email}`, label: "Email" },
            { icon: Github, href: PROFILE.github, label: "GitHub" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              aria-label={label}
              className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/[0.08] bg-white/[0.03] text-slate-400 hover:text-white hover:border-blue-500/30 hover:bg-blue-500/5 transition-all duration-200 text-sm"
            >
              <Icon size={15} />
              <span>{label}</span>
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}
