"use client";

import { motion } from "framer-motion";
import { PROFILE } from "@/data/profile";

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export default function Contact() {
  return (
    <div className="space-y-8">
      {/* Command */}
      <div className="text-[var(--text-secondary)] text-sm">
        <span className="text-[var(--accent-green)]">$</span> ./contact.sh
      </div>

      {/* Output */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-xs text-[var(--accent-green)]"
      >
        Running contact protocol...
      </motion.div>

      {/* Dual CTA */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {/* Hire */}
        <motion.div
          variants={fadeUp}
          className="bg-[var(--bg-sidebar)] border border-[var(--accent-green)]/40 rounded-lg p-6"
        >
          <div className="text-[var(--accent-green)] text-sm font-bold mb-3">
            {">"} Looking to hire?
          </div>
          <div className="space-y-2 text-xs text-[var(--text-secondary)]">
            <div className="flex items-center gap-2">
              <span className="text-[var(--accent-green)]">{"\u2713"}</span>
              CTO / VP Engineering
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[var(--accent-green)]">{"\u2713"}</span>
              AI/ML Engineering Lead
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[var(--accent-green)]">{"\u2713"}</span>
              Engineering Director
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[var(--accent-green)]">{"\u2713"}</span>
              Head of Product + Engineering
            </div>
          </div>
          <a
            href={`mailto:${PROFILE.email}?subject=Opportunity%20-%20Let's%20Talk`}
            className="mt-4 block text-center text-xs px-4 py-2 rounded border border-[var(--accent-green)] text-[var(--accent-green)] hover:bg-[var(--accent-green)]/10 transition-colors"
          >
            $ send-email --type=opportunity
          </a>
        </motion.div>

        {/* Build */}
        <motion.div
          variants={fadeUp}
          className="bg-[var(--bg-sidebar)] border border-[var(--accent-cyan)]/40 rounded-lg p-6"
        >
          <div className="text-[var(--accent-cyan)] text-sm font-bold mb-3">
            {">"} Looking to build together?
          </div>
          <div className="space-y-2 text-xs text-[var(--text-secondary)]">
            <div className="flex items-center gap-2">
              <span className="text-[var(--accent-cyan)]">{"\u2713"}</span>
              Co-founder / Technical Advisor
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[var(--accent-cyan)]">{"\u2713"}</span>
              AI Infrastructure Consulting
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[var(--accent-cyan)]">{"\u2713"}</span>
              Strategic Partnership
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[var(--accent-cyan)]">{"\u2713"}</span>
              Angel Investment / Advising
            </div>
          </div>
          <a
            href={`mailto:${PROFILE.email}?subject=Let's%20Build%20Together`}
            className="mt-4 block text-center text-xs px-4 py-2 rounded border border-[var(--accent-cyan)] text-[var(--accent-cyan)] hover:bg-[var(--accent-cyan)]/10 transition-colors"
          >
            $ send-email --type=partnership
          </a>
        </motion.div>
      </motion.div>

      {/* Social Links */}
      <div className="border-t border-[var(--border)] pt-6">
        <div className="text-[var(--text-secondary)] text-sm mb-4">
          <span className="text-[var(--accent-green)]">$</span> cat links.txt
        </div>
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 gap-3"
        >
          {[
            {
              label: "Email",
              value: PROFILE.email,
              href: `mailto:${PROFILE.email}`,
              color: "var(--accent-green)",
            },
            {
              label: "GitHub",
              value: `github.com/${PROFILE.github}`,
              href: `https://github.com/${PROFILE.github}`,
              color: "var(--text-primary)",
            },
            {
              label: "LinkedIn",
              value: `linkedin.com/in/${PROFILE.linkedin}`,
              href: `https://www.linkedin.com/in/${PROFILE.linkedin}`,
              color: "var(--accent-cyan)",
            },
            {
              label: "Twitter",
              value: `@${PROFILE.twitter}`,
              href: `https://twitter.com/${PROFILE.twitter}`,
              color: "var(--accent-cyan)",
            },
            {
              label: "Website",
              value: PROFILE.website,
              href: `https://${PROFILE.website}`,
              color: "var(--accent-purple)",
            },
          ].map((link) => (
            <motion.a
              key={link.label}
              variants={fadeUp}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-xs p-3 rounded border border-[var(--border)] hover:border-[var(--accent-green)] transition-colors group"
            >
              <span
                className="font-bold w-16 shrink-0"
                style={{ color: link.color }}
              >
                {link.label}
              </span>
              <span className="text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors truncate">
                {link.value}
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Footer */}
      <div className="text-[10px] text-[var(--text-dim)] text-center pt-4">
        <span className="text-[var(--accent-green)]">$</span> echo
        &quot;Built with Next.js + Tailwind + Framer Motion. The portfolio is the proof.&quot;
      </div>
    </div>
  );
}
