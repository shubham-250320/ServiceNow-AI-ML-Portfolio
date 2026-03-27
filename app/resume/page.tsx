import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  Download,
  MapPin,
  Mail,
  Linkedin,
  CheckCircle2,
  BadgeCheck,
  GraduationCap,
  Trophy,
} from "lucide-react";
import {
  PROFILE,
  EXPERIENCE,
  PROJECTS,
  SKILLS,
  CERTIFICATIONS,
  RECOGNITION,
  EDUCATION,
} from "@/lib/data";

export const metadata: Metadata = {
  title: "Resume — Shubham Soni | Senior ServiceNow Platform Engineer",
  description:
    "Full resume for Shubham Soni — Senior ServiceNow Platform Engineer, AI/ML & Automation specialist.",
};

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-[#030712] text-slate-100">
      {/* Nav bar */}
      <div className="sticky top-0 z-50 bg-[#030712]/80 backdrop-blur-xl border-b border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={15} />
            Back
          </Link>
          <a
            href="./resume.pdf"
            download="Shubham_Soni_ServiceNow_AI_Engineer.pdf"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-500 hover:bg-blue-400 text-white text-sm font-medium transition-colors shadow-lg shadow-blue-500/20"
          >
            <Download size={14} />
            Download PDF
          </a>
        </div>
      </div>

      {/* Resume body */}
      <div className="max-w-5xl mx-auto px-6 py-14">
        {/* Header */}
        <div className="mb-12 pb-10 border-b border-white/[0.08]">
          <h1 className="text-4xl font-bold text-white mb-2">{PROFILE.name}</h1>
          <p className="text-lg text-blue-400 font-medium mb-4">
            {PROFILE.title} — {PROFILE.subtitle}
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-slate-400">
            <span className="flex items-center gap-1.5">
              <MapPin size={13} className="text-blue-400" />
              {PROFILE.location}
            </span>
            <a
              href={`mailto:${PROFILE.email}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail size={13} className="text-blue-400" />
              {PROFILE.email}
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Linkedin size={13} className="text-blue-400" />
              linkedin.com/in/2shubhamsoni
            </a>
          </div>
          <p className="mt-5 text-slate-400 text-sm leading-relaxed max-w-3xl">
            {PROFILE.summary}
          </p>
        </div>

        {/* Experience */}
        <section className="mb-12">
          <h2 className="text-xs uppercase tracking-[0.2em] text-blue-400 font-semibold mb-6">
            Experience
          </h2>
          <div className="space-y-10">
            {EXPERIENCE.map((exp) => (
              <div key={exp.id}>
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-base font-semibold text-white">{exp.role}</h3>
                    <p className="text-sm text-slate-400 mt-0.5">{exp.company}</p>
                  </div>
                  <span className="text-xs text-slate-500 bg-white/[0.04] px-3 py-1 rounded-full border border-white/[0.06]">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-2.5">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-slate-400">
                      <CheckCircle2 size={13} className="text-blue-400/70 mt-0.5 flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="mb-12">
          <h2 className="text-xs uppercase tracking-[0.2em] text-blue-400 font-semibold mb-6">
            Key Projects
          </h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {PROJECTS.map((p) => (
              <div
                key={p.id}
                className="p-5 rounded-xl border border-white/[0.08] bg-white/[0.02]"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-sm font-semibold text-white">{p.title}</h3>
                  <span className="text-xs text-slate-600">{p.year}</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed mb-3">{p.description}</p>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-blue-400">{p.impact}</span>
                  <span className="text-xs text-slate-600">{p.impactLabel}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-12">
          <h2 className="text-xs uppercase tracking-[0.2em] text-blue-400 font-semibold mb-6">
            Technical Skills
          </h2>
          <div className="space-y-4">
            {SKILLS.map((group) => (
              <div key={group.category} className="flex gap-4">
                <span className="text-xs text-slate-500 w-40 flex-shrink-0 pt-0.5">{group.category}</span>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs text-slate-400 bg-white/[0.04] border border-white/[0.06] px-2.5 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-12">
          <h2 className="text-xs uppercase tracking-[0.2em] text-blue-400 font-semibold mb-6">
            Certifications
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.id}
                className="flex items-center gap-3 p-4 rounded-xl border border-white/[0.08] bg-white/[0.02]"
              >
                <BadgeCheck size={16} style={{ color: cert.color }} />
                <div>
                  <p className="text-sm text-white font-medium">{cert.short}</p>
                  <p className="text-xs text-slate-500">{cert.name}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recognition */}
        <section className="mb-12">
          <h2 className="text-xs uppercase tracking-[0.2em] text-blue-400 font-semibold mb-6">
            Recognition
          </h2>
          <div className="space-y-3">
            {RECOGNITION.map((r) => (
              <div key={r.id} className="flex items-start gap-3">
                <Trophy size={14} className="text-amber-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-white font-medium">{r.title} — {r.event}</p>
                  <p className="text-xs text-slate-500">{r.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-xs uppercase tracking-[0.2em] text-blue-400 font-semibold mb-6">
            Education
          </h2>
          <div className="flex items-start gap-3">
            <GraduationCap size={15} className="text-blue-400 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-white">{EDUCATION.degree}</p>
              <p className="text-xs text-slate-400">
                {EDUCATION.institution} · CGPA {EDUCATION.cgpa} · {EDUCATION.period}
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}










