import { Hero } from './components/Hero/Hero';
import { About } from './components/AboutMe/AboutMe';
import { Stack } from './components/Stack/Stack';
import { ProjectSection } from './components/Projects/ProjectSection'; 
import { Contact } from './components/Contact/Contact';
import { LanguageProvider } from './lib/i18n';
import { Navbar } from './components/NavBar/NavBar';

export default function App() {
  return (
    <LanguageProvider>
      <div className="relative min-h-screen w-full bg-background text-foreground overflow-x-hidden">
        <Navbar />
        <main className="w-full">
          <Hero />
          <About />
          <Stack />
          <ProjectSection />
          <Contact />
        </main>
      </div>
    </LanguageProvider>
  );
}