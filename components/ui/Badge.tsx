"use client";
import { cn } from "@/lib/utils";

type BadgeVariant = "blue" | "purple" | "cyan" | "green" | "amber" | "gold" | "default";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
  dot?: boolean;
}

const variantStyles: Record<BadgeVariant, string> = {
  blue:    "bg-[#1f8476]/10 text-[#1f8476] border-[#1f8476]/25",
  purple:  "bg-[#293e40]/10 text-[#293e40] border-[#293e40]/25",
  cyan:    "bg-[#81b5a1]/15 text-[#1f8476] border-[#81b5a1]/35",
  green:   "bg-[#1f8476]/10 text-[#1f8476] border-[#1f8476]/25",
  amber:   "bg-amber-500/10 text-amber-700 border-amber-400/30",
  gold:    "bg-yellow-400/10 text-yellow-700 border-yellow-400/30",
  default: "bg-slate-100 text-slate-600 border-slate-200",
};

export function Badge({ children, variant = "default", className, dot }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border tracking-wide",
        variantStyles[variant],
        className
      )}
    >
      {dot && (
        <span className="relative flex h-1.5 w-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1f8476] opacity-70" />
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#1f8476]" />
        </span>
      )}
      {children}
    </span>
  );
}