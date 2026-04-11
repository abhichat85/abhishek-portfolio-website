"use client";

import { motion } from "framer-motion";
import { PROJECTS, type Project } from "@/data/profile";

const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      variants={fadeUp}
      className={`bg-[var(--bg-sidebar)] border rounded-lg p-5 hover:border-[var(--accent-green)] transition-colors duration-200 group ${
        project.highlight
          ? "border-[var(--accent-green)]/40"
          : "border-[var(--border)]"
      }`}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-[var(--accent-yellow)] text-sm">
            {project.highlight ? "\u2605" : "\u25CB"}
          </span>
          <h3 className="font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-green)] transition-colors">
            {project.name}
          </h3>
        </div>
        <div className="flex gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[var(--text-dim)] hover:text-[var(--accent-cyan)] transition-colors"
            >
              [code]
            </a>
          )}
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[var(--text-dim)] hover:text-[var(--accent-cyan)] transition-colors"
            >
              [live]
            </a>
          )}
        </div>
      </div>

      {/* Description */}
      <div className="text-sm text-[var(--accent-cyan)] mb-2">
        {project.description}
      </div>
      <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-4">
        {project.longDescription}
      </p>

      {/* Stack */}
      <div className="flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="text-[10px] px-2 py-0.5 rounded bg-[var(--bg-terminal)] border border-[var(--border)] text-[var(--text-dim)]"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <div className="space-y-6">
      {/* Command */}
      <div className="text-[var(--text-secondary)] text-sm">
        <span className="text-[var(--accent-green)]">$</span> ls -la projects/
      </div>

      <div className="text-xs text-[var(--text-dim)]">
        total {PROJECTS.length} &middot;{" "}
        <span className="text-[var(--accent-yellow)]">
          {PROJECTS.filter((p) => p.highlight).length} highlighted
        </span>
      </div>

      {/* Project Grid */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 lg:grid-cols-2 gap-4"
      >
        {PROJECTS.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </motion.div>
    </div>
  );
}
