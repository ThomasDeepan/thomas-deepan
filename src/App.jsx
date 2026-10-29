import React from "react";
import {
  personalInfo,
  skills,
  experience,
  projects,
  education,
  achievements,
} from "./data/portfolioData";
import {
  Code2,
  Mail,
  Phone,
  MapPin,
  Award,
  ExternalLink,
  GraduationCap,
  Briefcase,
} from "lucide-react";

const Github = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const Linkedin = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-500 selection:text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-lg tracking-wider text-blue-400">
            THOMAS DEEPAN
          </span>
          <div className="flex gap-6 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-white transition">
              About
            </a>
            <a href="#skills" className="hover:text-white transition">
              Skills
            </a>
            <a href="#experience" className="hover:text-white transition">
              Experience
            </a>
            <a href="#projects" className="hover:text-white transition">
              Projects
            </a>
            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="about" className="max-w-6xl mx-auto px-6 pt-24 pb-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            {personalInfo.name}
          </h1>
          <p className="text-xl text-blue-400 font-medium mb-4">
            {personalInfo.title}
          </p>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-6">
            {personalInfo.summary}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 mb-8">
            <span className="flex items-center gap-1.5">
              <MapPin size={16} className="text-blue-400" />{" "}
              {personalInfo.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Mail size={16} className="text-blue-400" /> {personalInfo.email}
            </span>
            <span className="flex items-center gap-1.5">
              <Phone size={16} className="text-blue-400" /> {personalInfo.phone}
            </span>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href={personalInfo.links.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-100 rounded-lg border border-slate-700 transition text-sm font-medium"
            >
              <Github size={18} /> GitHub
            </a>
            <a
              href={personalInfo.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-100 rounded-lg border border-slate-700 transition text-sm font-medium"
            >
              <Linkedin size={18} /> LinkedIn
            </a>
            <a
              href={personalInfo.links.leetcode}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-100 rounded-lg border border-slate-700 transition text-sm font-medium"
            >
              <Code2 size={18} /> LeetCode
            </a>
          </div>
        </div>
      </header>

      {/* Education & Technical Skills */}
      <section
        id="skills"
        className="max-w-6xl mx-auto px-6 py-16 border-t border-slate-800"
      >
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <GraduationCap className="text-blue-400" /> Education
            </h2>
            <div className="bg-slate-900/60 p-5 rounded-xl border border-slate-800">
              <h3 className="font-semibold text-white">
                {education.institution}
              </h3>
              <p className="text-sm text-slate-400 mt-1">{education.degree}</p>
              <div className="mt-3 flex items-center justify-between text-xs text-slate-500 font-mono">
                <span>CGPA: {education.cgpa}</span>
                <span>{education.period}</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <h2 className="text-xl font-bold text-white mb-6">
              Technical Skills
            </h2>
            <div className="space-y-4">
              {skills.map((grp, idx) => (
                <div
                  key={idx}
                  className="bg-slate-900/60 p-4 rounded-xl border border-slate-800"
                >
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                    {grp.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {grp.items.map((skill, i) => (
                      <span
                        key={i}
                        className="text-xs bg-slate-800 text-blue-300 px-3 py-1.5 rounded-md border border-slate-700 font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section
        id="experience"
        className="max-w-6xl mx-auto px-6 py-16 border-t border-slate-800"
      >
        <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
          <Briefcase className="text-blue-400" /> Experience
        </h2>
        <div className="space-y-8">
          {experience.map((exp, idx) => (
            <div
              key={idx}
              className="bg-slate-900/40 p-6 rounded-2xl border border-slate-800"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                <span className="text-xs font-mono text-blue-400 bg-blue-950/60 px-2.5 py-1 rounded border border-blue-900/60">
                  {exp.period}
                </span>
              </div>
              <p className="text-sm text-slate-400 mb-6">
                {exp.company} • {exp.type}
              </p>

              <div className="space-y-6">
                {exp.projects.map((proj, pIdx) => (
                  <div
                    key={pIdx}
                    className="border-l-2 border-slate-700 pl-4 space-y-2"
                  >
                    <h4 className="font-semibold text-sm text-slate-200">
                      {proj.name}
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-slate-400">
                      {proj.points.map((pt, ptIdx) => (
                        <li key={ptIdx} className="leading-relaxed">
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Academic & Personal Projects */}
      <section
        id="projects"
        className="max-w-6xl mx-auto px-6 py-16 border-t border-slate-800"
      >
        <h2 className="text-2xl font-bold text-white mb-8">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {proj.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">
                  {proj.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {proj.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded border border-slate-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Honors, Awards & Certifications */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-slate-800">
        <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
          <Award className="text-blue-400" /> Honors & Certifications
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {achievements.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 flex items-start gap-3"
            >
              <span className="w-2 h-2 rounded-full bg-blue-400 mt-2 shrink-0"></span>
              <p className="text-sm text-slate-300 leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Footer */}
      <footer
        id="contact"
        className="border-t border-slate-800 bg-slate-950 py-12"
      >
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-slate-500">
          <p>
            © {new Date().getFullYear()} {personalInfo.name}
          </p>
          <div className="flex gap-6">
            <a
              href={`mailto:${personalInfo.email}`}
              className="hover:text-white transition"
            >
              Email
            </a>
            <a
              href={personalInfo.links.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
            >
              GitHub
            </a>
            <a
              href={personalInfo.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
