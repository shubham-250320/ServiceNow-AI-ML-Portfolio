"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: "blue" | "purple" | "cyan" | "amber" | "green";
  onClick?: () => void;
}

const glowColors = {
  blue:   "hover:border-[#1f8476]/40 hover:shadow-[#1f8476]/8",
  purple: "hover:border-[#293e40]/40 hover:shadow-[#293e40]/8",
  cyan:   "hover:border-[#81b5a1]/40 hover:shadow-[#81b5a1]/8",
  amber:  "hover:border-amber-400/40 hover:shadow-amber-400/8",
  green:  "hover:border-[#1f8476]/40 hover:shadow-[#1f8476]/8",
};

export function Card({ children, className, hover = false, glow, onClick }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -3 } : undefined}
      transition={{ duration: 0.2 }}
      onClick={onClick}
      className={cn(
        "rounded-2xl border border-slate-200 bg-white",
        hover && "cursor-pointer transition-all duration-300 hover:shadow-lg",
        glow && glowColors[glow],
        className
      )}
    >
      {children}
    </motion.div>
  );
}