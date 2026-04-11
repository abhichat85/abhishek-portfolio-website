"use client";

import { motion } from "framer-motion";
import { ARTICLES } from "@/data/profile";

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

export default function Writing() {
  return (
    <div className="space-y-6">
      {/* Command */}
      <div className="text-[var(--text-secondary)] text-sm">
        <span className="text-[var(--accent-green)]">$</span> ls -lt articles/
      </div>

      <div className="text-xs text-[var(--text-dim)]">
        total {ARTICLES.length} articles
      </div>

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="space-y-4"
      >
        {ARTICLES.map((article) => (
          <motion.div
            key={article.title}
            variants={fadeUp}
            className="group"
          >
            {article.url ? (
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[var(--bg-sidebar)] border border-[var(--border)] rounded-lg p-5 hover:border-[var(--accent-green)] transition-colors"
              >
                <ArticleContent article={article} />
              </a>
            ) : (
              <div className="bg-[var(--bg-sidebar)] border border-[var(--border)] rounded-lg p-5">
                <ArticleContent article={article} />
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* CTA */}
      <div className="border-t border-[var(--border)] pt-6">
        <div className="text-xs text-[var(--text-dim)]">
          <span className="text-[var(--accent-green)]">$</span> echo
          &quot;Follow for more&quot;
        </div>
        <div className="mt-3 flex gap-3">
          <a
            href="https://www.linkedin.com/in/abhishekchatterjee85"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs px-3 py-1.5 rounded border border-[var(--border)] text-[var(--accent-cyan)] hover:border-[var(--accent-cyan)] transition-colors"
          >
            LinkedIn &middot; 12K+ followers
          </a>
          <a
            href="https://dev.to/abhishek_chatterjee_33b9d"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs px-3 py-1.5 rounded border border-[var(--border)] text-[var(--accent-cyan)] hover:border-[var(--accent-cyan)] transition-colors"
          >
            DEV.to
          </a>
        </div>
      </div>
    </div>
  );
}

function ArticleContent({
  article,
}: {
  article: (typeof ARTICLES)[number];
}) {
  return (
    <>
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-[var(--text-dim)] font-mono">
          {article.date}
        </span>
        {article.likes && (
          <span className="text-[10px] text-[var(--accent-yellow)]">
            {"\u2665"} {article.likes}
          </span>
        )}
      </div>
      <h3 className="font-bold text-sm text-[var(--text-primary)] group-hover:text-[var(--accent-green)] transition-colors mb-2">
        {article.title}
      </h3>
      <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
        {article.description}
      </p>
      {article.url && (
        <div className="mt-3 text-[10px] text-[var(--text-dim)]">
          {"\u2197"} Read article
        </div>
      )}
    </>
  );
}
