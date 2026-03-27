"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, PROFILE } from "@/lib/data";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );
    document.querySelectorAll("section[id]").forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#030712]/80 backdrop-blur-xl border-b border-white/[0.06] shadow-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="font-bold text-white text-sm tracking-tight hover:text-blue-400 transition-colors">
            <span className="text-blue-400">S</span>hubham<span className="text-blue-400">.</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm transition-colors duration-200 rounded-lg ${
                  active === link.href
                    ? "text-white"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {active === link.href && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-lg bg-white/5"
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              href="/resume"
            >
              Resume
            </Button>
            <Button
              variant="primary"
              size="sm"
              href={`mailto:${PROFILE.email}`}
            >
              Hire Me
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 inset-x-0 z-40 bg-[#030712]/95 backdrop-blur-xl border-b border-white/10 md:hidden"
          >
            <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 mt-2 border-t border-white/10 flex gap-3">
                <Button variant="ghost" size="sm" href="/resume" className="flex-1 justify-center">
                  Resume
                </Button>
                <Button variant="primary" size="sm" href={`mailto:${PROFILE.email}`} className="flex-1 justify-center">
                  Hire Me
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
