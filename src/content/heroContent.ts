export interface CtaContent {
  label: string;
  href: string;
}

export interface PortraitContent {
  alt: string;
  avif: string;
  webp: string;
  jpeg: string;
  width: number;
  height: number;
}

export interface MetricContent {
  label: string;
  value: string;
  body: string;
}

export interface AccentContent {
  label: string;
  heading: string;
  body: string;
}

export interface HeroContent {
  eyebrow: string;
  headline: string;
  subhead: string;
  primaryCta: CtaContent;
  secondaryCta: CtaContent;
  portrait: PortraitContent;
  metric: MetricContent;
  accent: AccentContent;
  stack: string[];
}

export const heroContent: HeroContent = {
  eyebrow: "Full-stack engineer · Sharjah, UAE",
  headline: "I build government-scale platforms, and the AI that runs on them.",
  subhead:
    "Mid-level full-stack engineer in Sharjah. Currently building statewide agricultural reporting systems for the Government of Kerala.",
  primaryCta: {
    label: "View selected work",
    href: "#work",
  },
  secondaryCta: {
    label: "Download resume",
    href: "/robin-roy-resume.pdf",
  },
  portrait: {
    alt: "Robin Roy, full-stack engineer",
    avif: "/images/portrait-880.avif",
    webp: "/images/portrait-880.webp",
    jpeg: "/images/portrait-880.jpg",
    width: 880,
    height: 1100,
  },
  metric: {
    label: "Production scale",
    value: "1,500+",
    body: "officers across 14 districts, live on AIDEA-EARAS",
  },
  accent: {
    label: "Applied AI",
    heading: "RAG and agentic systems",
    body: "Retrieval pipelines and tool-using agents, shipped to production",
  },
  stack: [
    "Python",
    "JavaScript",
    "TypeScript",
    "PostgreSQL",
    "Django",
    "FastAPI",
    "React.js",
    "Django REST Framework", 
    "REST APIs", 
    "SQLAlchemy", 
    "Pydantic", 
    "JWT Authentication", 
    "OAuth2",
    "Microservices", 
    "Spring Boot",
    "React.js",
    "React Hooks", 
    "Redux", 
    "Material UI (MUI)", 
    "Tailwind CSS",
    "Bootstrap",
    "HTML5",
    "CSS3"
  ],
};