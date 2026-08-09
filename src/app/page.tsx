import { SiteHeader } from "@/components/SiteHeader";
import { About } from "@/components/portfolio/About";
import { Contact } from "@/components/portfolio/Contact";
import { Experience } from "@/components/portfolio/Experience";
import { Hero } from "@/components/portfolio/Hero";
import { Skills } from "@/components/portfolio/Skills";

export default function Home() {
  return (
    <div className="min-h-screen bg-background pb-16 md:pb-24">
      <SiteHeader />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Contact />
    </div>
  );
}
