"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Sidebar, { type Section } from "./Sidebar";
import ContentPane from "./ContentPane";

export default function Terminal() {
  const [active, setActive] = useState<Section>("about");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-[var(--bg-desktop)] p-2 md:p-4 lg:p-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full h-full max-w-7xl max-h-[900px] flex flex-col rounded-xl overflow-hidden border border-[var(--border)] shadow-2xl shadow-black/50"
      >
        {/* Title Bar */}
        <div className="flex items-center px-4 py-2.5 bg-[var(--bg-titlebar)] border-b border-[var(--border)] shrink-0">
          {/* Traffic Lights */}
          <div className="flex items-center gap-2 mr-4">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57] hover:brightness-110 transition-all" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e] hover:brightness-110 transition-all" />
            <div className="w-3 h-3 rounded-full bg-[#28ca41] hover:brightness-110 transition-all" />
          </div>

          {/* Mobile sidebar toggle */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="md:hidden mr-3 text-[var(--text-dim)] hover:text-[var(--text-secondary)] transition-colors text-sm"
          >
            {sidebarOpen ? "\u2630" : "\u2630"}
          </button>

          {/* Title */}
          <div className="flex-1 text-center text-xs text-[var(--text-dim)]">
            <span className="text-[var(--text-secondary)]">abhishek</span>
            <span className="text-[var(--text-dim)]">@</span>
            <span className="text-[var(--text-secondary)]">portfolio</span>
            <span className="text-[var(--text-dim)]"> : ~/</span>
            <span className="text-[var(--accent-green)]">{active}</span>
          </div>

          {/* Right side */}
          <div className="text-[10px] text-[var(--text-dim)] hidden sm:block">
            zsh
          </div>
        </div>

        {/* Body */}
        <div className="flex flex-1 min-h-0 bg-[var(--bg-terminal)]">
          {/* Sidebar - hidden on mobile unless toggled */}
          <div
            className={`${
              sidebarOpen ? "block" : "hidden"
            } md:block w-56 lg:w-64 shrink-0 overflow-hidden`}
          >
            <Sidebar active={active} onNavigate={(s) => {
              setActive(s);
              // Close sidebar on mobile after navigation
              if (window.innerWidth < 768) {
                setSidebarOpen(false);
              }
            }} />
          </div>

          {/* Content */}
          <ContentPane active={active} />
        </div>
      </motion.div>
    </div>
  );
}
