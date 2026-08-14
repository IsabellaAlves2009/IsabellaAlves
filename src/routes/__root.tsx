import { createFileRoute } from "@tanstack/react-router";
import { LanguageProvider } from "../lib/i18n";
import { Navbar } from "../components/NavBar/NavBar";
import { Hero } from "../components/Hero/Hero";
import { About }  from "../components/AboutMe/AboutMe";
import { Stack } from "../components/Stack/Stack";
import { ProjectSection } from "../components/Projects/ProjectSection";
import { Contact, Footer } from "../components/Contact/Contact";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <LanguageProvider>
      <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
        <Navbar />
        <Hero />
        <About />
        <Stack />
        <ProjectSection />
        <Contact />
        <Footer />
      </main>
    </LanguageProvider>
  );
}
