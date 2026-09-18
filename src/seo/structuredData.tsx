/**
 * JSON-LD lets search engines read your name, role and employer as data
 * rather than guessing from prose. `Record<string, unknown>` is the built-in
 * type for "an object with string keys and values I'm not describing further" —
 * appropriate here because the schema.org shape is defined externally.
 */
export const siteUrl = "https://robinroy.dev";

export const personSchema: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Robin Roy",
  url: siteUrl,
  jobTitle: "Full-stack Engineer",
  description:
    "Full-stack engineer building government-scale platforms and applied AI systems.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sharjah",
    addressCountry: "AE",
  },
  knowsAbout: [
    "React",
    "TypeScript",
    "Django",
    "Spring Boot",
    "PostgreSQL",
    "Retrieval-augmented generation",
  ],
  sameAs: [
    "https://github.com/robinroy",
    "https://linkedin.com/in/robinroy",
  ],
};

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
    />
  );
}