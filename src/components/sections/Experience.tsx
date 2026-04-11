"use client";

import { motion } from "framer-motion";
import { EXPERIENCE, CERTIFICATIONS, LANGUAGES } from "@/data/profile";

const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Experience() {
  return (
    <div className="space-y-8">
      {/* Command */}
      <div className="text-[var(--text-secondary)] text-sm">
        <span className="text-[var(--accent-green)]">$</span> git log --oneline
        --graph
      </div>

      {/* Git Log Timeline */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="space-y-0"
      >
        {EXPERIENCE.map((item, i) => (
          <motion.div key={item.hash} variants={fadeUp} className="flex group">
            {/* Git graph line */}
            <div className="flex flex-col items-center mr-4 shrink-0">
              <div
                className={`w-3 h-3 rounded-full border-2 mt-1 ${
                  i === 0
                    ? "bg-[var(--accent-green)] border-[var(--accent-green)]"
                    : "bg-transparent border-[var(--text-dim)]"
                }`}
              />
              {i < EXPERIENCE.length - 1 && (
                <div className="w-px flex-1 bg-[var(--border)] min-h-[60px]" />
              )}
            </div>

            {/* Content */}
            <div className="pb-8 flex-1">
              {/* Hash + Branch */}
              <div className="flex items-center gap-2 text-xs mb-1">
                <span className="text-[var(--accent-yellow)] font-mono">
                  {item.hash}
                </span>
                {item.branch && (
                  <span className="text-[var(--accent-green)] bg-[var(--accent-green)]/10 px-1.5 py-0.5 rounded text-[10px]">
                    {item.branch}
                  </span>
                )}
                <span className="text-[var(--text-dim)]">{item.period}</span>
              </div>

              {/* Title & Org */}
              <h3 className="font-bold text-[var(--text-primary)] text-sm">
                {item.title}{" "}
                <span className="text-[var(--accent-cyan)] font-normal">
                  @ {item.org}
                </span>
              </h3>

              {/* Description */}
              <p className="text-xs text-[var(--text-secondary)] mt-1 leading-relaxed max-w-xl">
                {item.description}
              </p>

              {/* Tags */}
              {item.tags && (
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] px-2 py-0.5 rounded bg-[var(--bg-terminal)] border border-[var(--border)] text-[var(--text-dim)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Separator */}
      <div className="border-t border-[var(--border)]" />

      {/* Certifications */}
      <div>
        <div className="text-[var(--text-secondary)] text-sm mb-4">
          <span className="text-[var(--accent-green)]">$</span> cat
          certifications.txt
        </div>
        <div className="space-y-2">
          {CERTIFICATIONS.map((cert) => (
            <div key={cert.name} className="flex items-center gap-2 text-xs">
              <span className="text-[var(--accent-green)]">\u2713</span>
              <span className="text-[var(--text-primary)]">{cert.name}</span>
              <span className="text-[var(--text-dim)]">
                &middot; {cert.org} &middot; {cert.year}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Languages */}
      <div>
        <div className="text-[var(--text-secondary)] text-sm mb-3">
          <span className="text-[var(--accent-green)]">$</span> echo $LANGUAGES
        </div>
        <div className="flex gap-3">
          {LANGUAGES.map((lang) => (
            <span
              key={lang}
              className="text-xs px-3 py-1 rounded bg-[var(--bg-sidebar)] border border-[var(--border)] text-[var(--text-secondary)]"
            >
              {lang}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
