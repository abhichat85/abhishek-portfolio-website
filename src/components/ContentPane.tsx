"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { Section } from "./Sidebar";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import OpenSource from "./sections/OpenSource";
import Writing from "./sections/Writing";
import Contact from "./sections/Contact";

const SECTION_PATHS: Record<Section, string> = {
  about: "~/about.md",
  projects: "~/projects/index.md",
  experience: "~/career/experience.md",
  "open-source": "~/open-source.md",
  writing: "~/writing.md",
  contact: "~/contact.sh",
};

const COMPONENTS: Record<Section, React.ComponentType> = {
  about: About,
  projects: Projects,
  experience: Experience,
  "open-source": OpenSource,
  writing: Writing,
  contact: Contact,
};

interface ContentPaneProps {
  active: Section;
}

export default function ContentPane({ active }: ContentPaneProps) {
  const Component = COMPONENTS[active];
  const path = SECTION_PATHS[active];

  return (
    <div className="flex-1 flex flex-col min-w-0 h-full">
      {/* Tab Bar */}
      <div className="flex items-center border-b border-[var(--border)] bg-[var(--bg-sidebar)] shrink-0">
        <div className="flex items-center gap-2 px-4 py-2 bg-[var(--bg-terminal)] border-b-2 border-[var(--accent-green)] text-xs text-[var(--text-primary)]">
          <span className="text-[var(--accent-green)]">{"\u25CF"}</span>
          <span>{path}</span>
        </div>
        <div className="flex-1" />
        <div className="px-3 text-[10px] text-[var(--text-dim)]">
          UTF-8 &middot; LF &middot; TypeScript React
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="p-6 md:p-8 max-w-4xl"
          >
            <Component />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Status Bar */}
      <div className="flex items-center justify-between px-4 py-1 border-t border-[var(--border)] bg-[var(--bg-sidebar)] text-[10px] text-[var(--text-dim)] shrink-0">
        <div className="flex items-center gap-3">
          <span>
            <span className="text-[var(--accent-green)]">{"\u25CF"}</span> abhishek@portfolio
          </span>
          <span>{path}</span>
        </div>
        <div className="flex items-center gap-3">
          <span>Ln 1, Col 1</span>
          <span>Spaces: 2</span>
        </div>
      </div>
    </div>
  );
}
