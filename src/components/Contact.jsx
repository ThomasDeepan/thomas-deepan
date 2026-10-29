import React from "react";
import { projects } from "../data/portfolioData";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-800 rounded-xl p-6 border border-slate-700 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold text-blue-400 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs bg-slate-700 text-slate-200 px-2.5 py-1 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-4 pt-4 border-t border-slate-700">
                {item.github && (
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-sm text-slate-300 hover:text-white"
                  >
                    <Github size={16} /> Code
                  </a>
                )}
                {item.live && (
                  <a
                    href={item.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-sm text-blue-400 hover:text-blue-300"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
