"use client";

import { motion } from "framer-motion";
import { OPEN_SOURCE } from "@/data/profile";

const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function OpenSource() {
  return (
    <div className="space-y-8">
      {/* Command */}
      <div className="text-[var(--text-secondary)] text-sm">
        <span className="text-[var(--accent-green)]">$</span> tree open-source/
      </div>

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="space-y-6"
      >
        {OPEN_SOURCE.map((project) => (
          <motion.div
            key={project.name}
            variants={fadeUp}
            className="bg-[var(--bg-sidebar)] border border-[var(--border)] rounded-lg p-5"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <span className="text-[var(--accent-green)] text-lg">
                  {"\u276F"}
                </span>
                <div>
                  <h3 className="font-bold text-[var(--text-primary)]">
                    {project.name}/
                  </h3>
                  <span className="text-xs text-[var(--accent-cyan)]">
                    {project.description}
                  </span>
                </div>
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[var(--text-dim)] hover:text-[var(--accent-cyan)] transition-colors border border-[var(--border)] px-2 py-1 rounded hover:border-[var(--accent-cyan)]"
              >
                {"\u2197"} GitHub
              </a>
            </div>

            {/* Language Badge */}
            <div className="mb-4">
              <span className="text-[10px] px-2 py-0.5 rounded bg-[var(--bg-terminal)] border border-[var(--border)] text-[var(--accent-yellow)]">
                {project.language}
              </span>
            </div>

            {/* Features as tree */}
            <div className="font-mono text-xs space-y-1">
              {project.features.map((feature, i) => (
                <div key={i} className="flex">
                  <span className="text-[var(--text-dim)] mr-2 shrink-0">
                    {i === project.features.length - 1
                      ? "\u2514\u2500\u2500"
                      : "\u251C\u2500\u2500"}
                  </span>
                  <span className="text-[var(--text-secondary)]">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Philosophy */}
      <div className="border-t border-[var(--border)] pt-6">
        <div className="text-[var(--text-secondary)] text-sm mb-4">
          <span className="text-[var(--accent-green)]">$</span> cat
          philosophy.md
        </div>
        <div className="text-xs text-[var(--text-secondary)] leading-relaxed space-y-2 max-w-xl">
          <p>
            <span className="text-[var(--accent-green)]">{"\u276F"}</span>{" "}
            Every team building AI agent UIs writes their own SSE client and hits
            the same four bugs. I wrote the protocol so they don&apos;t have to.
          </p>
          <p>
            <span className="text-[var(--accent-green)]">{"\u276F"}</span>{" "}
            If you can&apos;t benchmark it, you can&apos;t improve it. PMEval exists because
            nobody was measuring whether AI PMs actually work.
          </p>
          <p>
            <span className="text-[var(--accent-green)]">{"\u276F"}</span>{" "}
            Open source isn&apos;t charity. It&apos;s infrastructure. The best tools come
            from teams who needed them first.
          </p>
        </div>
      </div>
    </div>
  );
}
