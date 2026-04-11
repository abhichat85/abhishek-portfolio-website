"use client";

import { useState, useEffect } from "react";

interface TypingTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  onDone?: () => void;
  cursor?: boolean;
}

export default function TypingText({
  text,
  speed = 40,
  delay = 0,
  className = "",
  onDone,
  cursor = true,
}: TypingTextProps) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    if (displayed.length >= text.length) {
      setDone(true);
      onDone?.();
      return;
    }
    const timer = setTimeout(() => {
      setDisplayed(text.slice(0, displayed.length + 1));
    }, speed);
    return () => clearTimeout(timer);
  }, [started, displayed, text, speed, onDone]);

  if (!started) return null;

  return (
    <span className={className}>
      {displayed}
      {cursor && !done && (
        <span className="animate-blink text-[var(--accent-green)]">_</span>
      )}
    </span>
  );
}
