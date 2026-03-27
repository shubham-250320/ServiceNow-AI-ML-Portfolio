"use client";
import { PROFILE } from "@/lib/data";
import { Linkedin, Mail, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#030712]">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-slate-500">
          © {new Date().getFullYear()} {PROFILE.name} — Built with Next.js & Deployed on Vercel
        </div>
        <div className="flex items-center gap-4">
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-slate-500 hover:text-blue-400 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
          <a
            href={`mailto:${PROFILE.email}`}
            className="text-slate-500 hover:text-blue-400 transition-colors"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer"
            className="text-slate-500 hover:text-blue-400 transition-colors"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
