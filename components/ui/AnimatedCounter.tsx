"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  compact?: boolean;
  duration?: number;
}

function formatValue(val: number, compact?: boolean): string {
  if (compact && val >= 1000) {
    return (val / 1000).toFixed(0) + "k";
  }
  return val.toLocaleString();
}

export function AnimatedCounter({ value, suffix = "", compact, duration = 2000 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    const start = Date.now();
    const end = start + duration;

    const tick = () => {
      const now = Date.now();
      const progress = Math.min((now - start) / duration, 1);
      // easeOutExpo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(eased * value));
      if (now < end) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {formatValue(count, compact)}
      {suffix}
    </span>
  );
}
