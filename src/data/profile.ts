export const PROFILE = {
  name: "Abhishek Chatterjee",
  handle: "abhichat85",
  title: "Founder & CTO @ Einstein Labs",
  tagline: "Building AI-native infra, agent frameworks, and production LLM systems.",
  location: "India",
  email: "chatterjee.85@gmail.com",
  website: "www.praxiomai.xyz",
  twitter: "abhichat85",
  github: "abhichat85",
  linkedin: "abhishekchatterjee85",
  bio: [
    "4x entrepreneur. 17+ years shipping software across 3 continents.",
    "From enterprise engineering at IBM to founding AI-native startups.",
    "I build the tools that builders need.",
    "",
    "Currently: Praxiom AI — Cursor for Product Managers.",
    "Shipped 36 agent tools. Open-sourced the streaming protocol.",
    "Created PMEval — the benchmark for AI PM agents.",
  ],
};

export const STATS = [
  { value: 36, label: "Agent tools shipped", suffix: "" },
  { value: 4, label: "Ventures founded", suffix: "x" },
  { value: 17, label: "Years of experience", suffix: "+" },
  { value: 12, label: "LinkedIn followers", suffix: "K+" },
  { value: 336, label: "PM benchmark tasks", suffix: "" },
];

export interface Project {
  name: string;
  slug: string;
  description: string;
  longDescription: string;
  stack: string[];
  url?: string;
  github?: string;
  highlight?: boolean;
}

export const PROJECTS: Project[] = [
  {
    name: "Praxiom AI",
    slug: "praxiom-ai",
    description: "Cursor for Product Managers",
    longDescription:
      "AI co-pilot that automates the end-to-end PM workflow: research synthesis, insight extraction, feature recommendations, and document generation. Multi-agent harness with quality scoring, overnight research cycles, and agentic orchestration.",
    stack: ["FastAPI", "React", "Claude", "Pinecone", "PostgreSQL", "Clerk", "Stripe"],
    url: "https://www.praxiomai.xyz",
    highlight: true,
  },
  {
    name: "agent-stream",
    slug: "agent-stream",
    description: "SSE event protocol for AI agents",
    longDescription:
      "The typed Server-Sent Events protocol for AI agent UIs. Nine standardized event types (token, thinking, tool_use, tool_result, turn, progress, creation, done, error). Python emitter + React hook. Zero external dependencies.",
    stack: ["Python", "TypeScript", "React", "SSE"],
    github: "https://github.com/abhichat85/agent-stream",
    highlight: true,
  },
  {
    name: "PMEval",
    slug: "pmeval",
    description: "Benchmark for AI PM agents",
    longDescription:
      "Standardized benchmark for evaluating AI product manager agents. 336 tasks across 14 PM categories. Scored across 5 dimensions (0-100) with LLM judge and hallucination detection.",
    stack: ["Python", "LLM Judge", "Evaluation Framework"],
    highlight: true,
  },
  {
    name: "Axiom Copilot",
    slug: "axiom-copilot",
    description: "PM intelligence platform",
    longDescription:
      "Advanced product management intelligence with AI synthesis engine, recommendation board, PM IDE with block-based editing, overnight research cycles, and multi-agent orchestration. Knowledge graphs and comprehensive quality metrics.",
    stack: ["FastAPI", "React", "Claude", "Tavily", "Pinecone", "Stripe"],
  },
  {
    name: "Einstein Board",
    slug: "einstein-board",
    description: "Collaborative project management",
    longDescription:
      "Real-time collaborative board with drag-and-drop, workspace management, and AI-assisted task organization. Built with optimistic updates and deduplication patterns for smooth UX.",
    stack: ["Next.js", "TypeScript", "Supabase", "Zustand", "dnd-kit", "Clerk"],
  },
  {
    name: "Accord AI",
    slug: "accord-ai",
    description: "Contract intelligence SaaS",
    longDescription:
      "Multi-agent contract analysis platform with rich text editing, PDF processing, WebSocket real-time sync, and Claude-powered document understanding.",
    stack: ["React", "TipTap", "Claude SDK", "Supabase", "WebSocket"],
  },
  {
    name: "Astra Sales AI",
    slug: "astra-sales-ai",
    description: "Sales automation AI agent",
    longDescription:
      "Intelligent sales automation with AI-driven prospecting, personalized outreach, and pipeline management. Embedded AI agent with scheduling and embedding-powered search.",
    stack: ["React", "Claude", "Prisma", "Inngest", "OpenAI Embeddings"],
  },
  {
    name: "Knights AI",
    slug: "knights-ai",
    description: "Monorepo template with shared UI",
    longDescription:
      "Production-grade monorepo template with Turbo for managing shared UI components across multiple applications. Convex backend infrastructure with consistent design system.",
    stack: ["Turbo", "Convex", "shadcn/ui", "TypeScript"],
  },
];

export interface ExperienceItem {
  hash: string;
  branch?: string;
  title: string;
  org: string;
  period: string;
  description: string;
  tags?: string[];
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    hash: "a1b2c3d",
    branch: "HEAD -> main",
    title: "Founder & CEO",
    org: "Praxiom AI",
    period: "2024 - present",
    description:
      "Building Cursor for Product Managers. 36 agent tools shipped. Multi-agent orchestration, overnight research cycles, quality-scored outputs. Open-sourced agent-stream protocol.",
    tags: ["AI Agents", "Product Management", "FastAPI", "React"],
  },
  {
    hash: "e4f5g6h",
    title: "Founder & CTO",
    org: "Einstein Labs",
    period: "2023 - present",
    description:
      "AI-native agency and product studio. Building production LLM systems, agent frameworks, and AI infrastructure for startups and enterprises.",
    tags: ["AI Infrastructure", "LLM Systems", "Full-Stack"],
  },
  {
    hash: "b8c9d0e",
    title: "4x Entrepreneur",
    org: "Multiple Ventures",
    period: "2014 - 2023",
    description:
      "Founded and scaled multiple technology ventures across SaaS, AI, and developer tools. Operated across India, Singapore, and global markets.",
    tags: ["SaaS", "Startups", "Product Strategy"],
  },
  {
    hash: "i7j8k9l",
    title: "Software Engineer",
    org: "IBM India",
    period: "2008 - 2013",
    description:
      "Enterprise engineering across multiple product lines. Star of the Month award — multiple times. Built the engineering foundation that everything else stands on.",
    tags: ["Enterprise", "Java", "Systems Design"],
  },
  {
    hash: "m0n1o2p",
    title: "Graduate Studies",
    org: "IIIT Bangalore",
    period: "2020 - 2021",
    description:
      "International Institute of Information Technology, Bangalore. Advanced studies in technology and innovation.",
    tags: ["Education", "Research"],
  },
];

export interface OpenSourceProject {
  name: string;
  description: string;
  features: string[];
  github: string;
  language: string;
}

export const OPEN_SOURCE: OpenSourceProject[] = [
  {
    name: "agent-stream",
    description: "The SSE event protocol for AI agents",
    features: [
      "9 event types: token, thinking, tool_use, tool_result, turn, progress, creation, done, error",
      "Python emitter (FastAPI/Starlette) + React hook",
      "JSON Schema spec for cross-language compatibility",
      "Built-in reconnection, token batching, and error recovery",
      "AgentStreamRecorder for production replay and debugging",
      "Zero external dependencies",
    ],
    github: "https://github.com/abhichat85/agent-stream",
    language: "Python + TypeScript",
  },
  {
    name: "pmeval",
    description: "Standardized benchmark for AI PM agents",
    features: [
      "336 tasks across 14 PM categories",
      "Research synthesis, prioritization, PRD generation, competitive intel",
      "Metrics analysis, communication, growth, pricing, GTM, alignment",
      "5 scoring dimensions (0-100) with LLM judge",
      "Hallucination detection built-in",
    ],
    github: "https://github.com/abhichat85/pmeval",
    language: "Python",
  },
  {
    name: "knights-planning-core",
    description: "Manus-style persistent markdown planning for Claude Code",
    features: [
      "Persistent markdown planning workflow",
      "Claude Code skill for structured implementation",
      "Inspired by the pattern behind the $2B acquisition",
    ],
    github: "https://github.com/abhichat85/knights-planning-core",
    language: "Markdown + Claude Code",
  },
];

export interface Article {
  title: string;
  date: string;
  description: string;
  url?: string;
  likes?: number;
}

export const ARTICLES: Article[] = [
  {
    title: "Why SSE for AI agents keeps breaking at 2am",
    date: "2026-03",
    description:
      "Every team building AI agent UIs writes their own SSE client and hits the same four bugs. Here's the protocol we extracted after shipping 36 agent tools.",
    url: "https://dev.to/abhishek_chatterjee_33b9d/why-sse-for-ai-agents-keeps-breaking-at-2am-55ie",
  },
  {
    title: "The Last Human Advantage: Judgement, Taste...",
    date: "2026-03",
    description:
      "On what remains uniquely human in the age of AI agents. Frameworks for thinking about the convergence of PM and engineering roles.",
    likes: 6,
  },
  {
    title: "Embracing Remote Work: Unleashing Productivity",
    date: "2023-06",
    description:
      "Lessons from building distributed teams across continents. How async-first culture creates leverage.",
    likes: 4,
  },
  {
    title: "Timeless Principles — A Lesson in Moderation from Buddha",
    date: "2020-09",
    description:
      "Applying ancient wisdom to modern entrepreneurship. On balance, persistence, and knowing when to pivot.",
    likes: 10,
  },
];

export const CERTIFICATIONS = [
  { name: "Generative AI Studio", org: "Google Cloud", year: "2023" },
  { name: "AI for Project Managers", org: "LinkedIn", year: "2019" },
  { name: "ML & Neural Networks Fundamentals", org: "LinkedIn", year: "2019" },
  { name: "Inbound Marketing Certification", org: "HubSpot Academy", year: "2017" },
];

export const LANGUAGES = ["English", "Hindi", "Bengali"];
