"use client";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

type ButtonVariant = "primary" | "ghost" | "outline";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
  href?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-blue-500 hover:bg-blue-400 text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 border border-blue-400/50",
  ghost:
    "bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 hover:border-white/20",
  outline:
    "bg-transparent hover:bg-white/5 text-blue-400 hover:text-blue-300 border border-blue-500/40 hover:border-blue-400",
};

const sizeStyles = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className, children, href, ...props }, ref) => {
    const classes = cn(
      "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200 ease-out active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2 focus:ring-offset-[#030712] cursor-pointer",
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    if (href) {
      return (
        <a href={href} className={classes} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
          {children}
        </a>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
