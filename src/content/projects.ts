/**
 * A discriminated union: every variant carries a `kind` literal, and checking
 * that field narrows the shape. `private` has no href at all, so TypeScript
 * refuses to let you read one without checking `kind` first.
 */
export type ProjectLink =
  | { kind: "live"; href: string }
  | { kind: "repo"; href: string }
  | { kind: "private"; note: string };

interface BaseCard {
  title: string;
  summary: string;
}

export interface ProjectCardContent extends BaseCard {
  id: string;
  context: string;
  stack: string[];
  link: ProjectLink;
  /** Marks the single project that gets the accent treatment. */
  featured?: boolean;
}

export const workHeading = "Selected work";

export const workIntro =
  "Production systems for government and commerce, plus the retrieval and agent pipelines running on top of them.";

export const projects: ProjectCardContent[] = [
  {
    id: "aidea-earas",
    title: "AIDEA-EARAS",
    context: "Government of Kerala · CDTI",
    summary:
      "Statewide agricultural statistics and reporting platform. Multi-level drill-down reporting across districts, taluks and zones, with role-based routing for 1,500+ field officers.",
    stack: ["Django", "FastAPI", "Spring Boot", "React", "PostgreSQL", "AWS"],
    link: {
    kind: "live",
    href: "https://www.aidea.kerala.gov.in/login",
  },
    featured: true,
  },
  {
    id: "agentic-ops",
    title: "Agentic Customer Operations Assistant",
    context: "Personal project",
    summary:
      "E-commerce platform built around a tool-using agent that handles order lookup, returns and refunds. Stock locking on order creation, and agent-initiated refunds tracked separately from human ones.",
    stack: ["Django", "DRF", "ChromaDB", "Groq", "React", "TypeScript"],
    link: {
      kind: "repo",
      href: "https://github.com/robinsamuelroy/agentic-customer-operations-assistant",
    },
  },
  {
    id: "mirai",
    title: "Mirai",
    context: "Personal project",
    summary:
      "Retrieval-augmented document Q&A pipeline. Chunking, embedding and vector search over uploaded documents, deployed behind a FastAPI service on EC2.",
    stack: ["FastAPI", "ChromaDB", "Sentence Transformers", "Gemini", "AWS"],
    link: {
      kind: "repo",
      href: "https://github.com/robinsamuelroy/mirai-ai-backend",
    },
  },
];