"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export type Section =
  | "about"
  | "projects"
  | "experience"
  | "open-source"
  | "writing"
  | "contact";

interface SidebarProps {
  active: Section;
  onNavigate: (section: Section) => void;
}

interface FileItem {
  id: Section;
  name: string;
  icon: string;
}

interface FolderItem {
  name: string;
  children: FileItem[];
}

type TreeItem = FileItem | FolderItem;

function isFolder(item: TreeItem): item is FolderItem {
  return "children" in item;
}

const TREE: TreeItem[] = [
  { id: "about", name: "about.md", icon: "\u{1F4C4}" },
  {
    name: "projects",
    children: [
      { id: "projects", name: "index.md", icon: "\u{1F4C2}" },
    ],
  },
  {
    name: "career",
    children: [
      { id: "experience", name: "experience.md", icon: "\u{1F4CB}" },
    ],
  },
  { id: "open-source", name: "open-source.md", icon: "\u{1F310}" },
  { id: "writing", name: "writing.md", icon: "\u270F\uFE0F" },
  { id: "contact", name: "contact.sh", icon: "\u{1F4E7}" },
];

export default function Sidebar({ active, onNavigate }: SidebarProps) {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    projects: true,
    career: true,
  });

  const toggleFolder = (name: string) => {
    setExpanded((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <div className="h-full flex flex-col bg-[var(--bg-sidebar)] border-r border-[var(--border)]">
      {/* Explorer Header */}
      <div className="px-3 py-2 text-[10px] font-bold text-[var(--text-dim)] uppercase tracking-widest border-b border-[var(--border)]">
        Explorer
      </div>

      {/* File Tree */}
      <nav className="flex-1 overflow-y-auto py-2 px-1">
        {TREE.map((item) => {
          if (isFolder(item)) {
            const isExpanded = expanded[item.name] ?? false;
            return (
              <div key={item.name}>
                <button
                  onClick={() => toggleFolder(item.name)}
                  className="w-full flex items-center gap-1.5 px-2 py-1 text-xs text-[var(--text-secondary)] hover:bg-[var(--bg-terminal)] rounded transition-colors"
                >
                  <span
                    className="text-[10px] w-3 text-center transition-transform"
                    style={{
                      transform: isExpanded ? "rotate(90deg)" : "rotate(0deg)",
                    }}
                  >
                    {"\u25B6"}
                  </span>
                  <span className="text-[var(--accent-yellow)]">{item.name}/</span>
                </button>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="ml-3"
                  >
                    {item.children.map((child) => (
                      <FileButton
                        key={child.id}
                        item={child}
                        active={active === child.id}
                        onClick={() => onNavigate(child.id)}
                      />
                    ))}
                  </motion.div>
                )}
              </div>
            );
          }
          return (
            <FileButton
              key={item.id}
              item={item}
              active={active === item.id}
              onClick={() => onNavigate(item.id)}
            />
          );
        })}
      </nav>

      {/* Git Status Footer */}
      <div className="border-t border-[var(--border)] px-3 py-2 text-[10px] text-[var(--text-dim)] space-y-1">
        <div>
          <span className="text-[var(--accent-green)]">{"\u25CF"}</span> main{" "}
          <span className="text-[var(--text-dim)]">&middot; clean</span>
        </div>
        <div className="text-[var(--accent-cyan)]">
          mode: founder
        </div>
      </div>
    </div>
  );
}

function FileButton({
  item,
  active,
  onClick,
}: {
  item: FileItem;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-2 px-2 py-1 text-xs rounded transition-colors ${
        active
          ? "bg-[var(--accent-green)]/10 text-[var(--accent-green)]"
          : "text-[var(--text-secondary)] hover:bg-[var(--bg-terminal)]"
      }`}
    >
      <span className="text-[10px]">{item.icon}</span>
      <span>{item.name}</span>
    </button>
  );
}
