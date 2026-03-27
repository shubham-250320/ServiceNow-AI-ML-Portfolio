"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label: string;
  title: string;
  subtitle?: string;
  dark?: boolean;
  variant?: "default" | "accent" | "gradient"; // ✅ NEW
}

export function SectionHeading({
  label,
  title,
  subtitle,
  dark = false,
  variant = "default",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-16"
    >
      {/* LABEL */}
      <p
        className={cn(
          "text-xs font-bold tracking-[0.2em] uppercase mb-3",
          dark ? "text-accent-primary" : "text-accent-primary"
        )}
      >
        {label}
      </p>

      {/* TITLE */}
      <h2
        className={cn(
          "text-4xl font-bold mb-4 leading-tight",
          variant === "accent" && "text-accent-primary",
          variant === "gradient" && "gradient-text-green",
          variant === "default" &&
            (dark ? "text-text-inverse" : "text-text-primary")
        )}
      >
        {title}
      </h2>

      {/* SUBTITLE */}
      {subtitle && (
        <p
          className={cn(
            "text-base max-w-2xl leading-relaxed",
            dark ? "text-text-secondary" : "text-text-secondary"
          )}
        >
          {subtitle}
        </p>
      )}

      {/* DIVIDER */}
      <div className="mt-6 h-[3px] w-10 bg-accent-primary rounded-full" />
    </motion.div>
  );
}