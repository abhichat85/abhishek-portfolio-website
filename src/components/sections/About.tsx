"use client";

import { motion } from "framer-motion";
import { PROFILE, STATS } from "@/data/profile";
import TypingText from "@/components/TypingText";
import AnimatedCounter from "@/components/AnimatedCounter";

const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function About() {
  return (
    <div className="space-y-8">
      {/* Command */}
      <div className="text-[var(--text-secondary)] text-sm">
        <span className="text-[var(--accent-green)]">$</span> cat about.md
      </div>

      {/* Name */}
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] tracking-tight">
          <TypingText text={PROFILE.name} speed={60} cursor={false} />
        </h1>
        <div className="mt-2 text-[var(--accent-green)] text-lg">
          {PROFILE.title}
        </div>
        <div className="mt-1 text-[var(--accent-cyan)] text-sm">
          {PROFILE.tagline}
        </div>
      </div>

      {/* Bio */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="space-y-1 text-[var(--text-secondary)] text-sm leading-relaxed"
      >
        {PROFILE.bio.map((line, i) => (
          <motion.div key={i} variants={fadeUp}>
            {line === "" ? (
              <br />
            ) : (
              <div className="flex">
                <span className="text-[var(--text-dim)] mr-3 select-none w-4 text-right shrink-0">
                  {i + 1}
                </span>
                <span>{line}</span>
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* Separator */}
      <div className="border-t border-[var(--border)]" />

      {/* Stats */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4"
      >
        {STATS.map((stat) => (
          <motion.div
            key={stat.label}
            variants={fadeUp}
            className="bg-[var(--bg-sidebar)] border border-[var(--border)] rounded-lg p-4 text-center"
          >
            <div className="text-2xl font-bold text-[var(--accent-green)]">
              <AnimatedCounter
                target={stat.value}
                suffix={stat.suffix}
              />
            </div>
            <div className="text-xs text-[var(--text-secondary)] mt-1">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Location & Links */}
      <div className="flex flex-wrap gap-4 text-xs text-[var(--text-dim)]">
        <span>
          <span className="text-[var(--accent-green)]">location:</span>{" "}
          {PROFILE.location}
        </span>
        <span>
          <span className="text-[var(--accent-green)]">web:</span>{" "}
          <a
            href={`https://${PROFILE.website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--accent-cyan)] hover:underline"
          >
            {PROFILE.website}
          </a>
        </span>
        <span>
          <span className="text-[var(--accent-green)]">github:</span>{" "}
          <a
            href={`https://github.com/${PROFILE.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--accent-cyan)] hover:underline"
          >
            @{PROFILE.github}
          </a>
        </span>
      </div>
    </div>
  );
}
