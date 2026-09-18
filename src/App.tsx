import { SiteHeader } from "./layout/SiteHeader";
import { SiteFooter } from "./layout/SiteFooter";
import { Hero } from "./sections/hero/Hero";
import { Work } from "./sections/work/Work";
import { Contact } from "./sections/contact/Contact";
import { StructuredData } from "./seo/structuredData";

export function App() {
  return (
    <>
      <StructuredData />
      <SiteHeader />
      <main id="top">
        <Hero />
        <Work />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}