import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useLang } from "../../lib/i18n";
import { SectionHeader } from "../AboutMe/AboutMe";

const projects = [
  {
    n: "01",
    name: "Movie Explorer",
    desc: {
      pt: "Plataforma dinâmica para explorar o universo do cinema, com filtros inteligentes e interface centrada no usuário.",
      en: "A dynamic platform to explore the world of cinema, featuring smart filters and a user-centric interface.",
    },
    tags: ["React", "TypeScript", "Framer Motion"],
    url: "https://movie-explorer-nu-sand.vercel.app/",
  },
  {
    n: "02",
    name: "Weather Dashboard",
    desc: {
      pt: "Dashboard de clima moderno em React com dados em tempo real e design totalmente responsivo.",
      en: "Modern React weather dashboard with real-time data and responsive design.",
    },
    tags: ["React", "JavaScript", "Tailwind", "CSS"],
    url: "https://weatherappdashboard.vercel.app/",
  },
  {
    n: "03",
    name: "Smash Burguer",
    desc: {
      pt: "Site de restaurante moderno e responsivo com foco em experiência visual fluida.",
      en: "A modern and responsive restaurant website, focusing on a fluid and visually appealing user experience.",
    },
    tags: ["HTML", "JavaScript", "Tailwind", "CSS", "Node.js"],
    url: "https://smashburguer.vercel.app/",
  },
  {
    n: "04",
    name: "Health Prime",
    desc: {
      pt: "Landing page para um app de saúde, projetada para ser visualmente atraente e otimizada para conversão.",
      en: "A landing page for a health app, designed to be visually appealing and optimized for user conversion.",
    },
    tags: ["HTML", "Tailwind", "CSS"],
    url: "https://healthprimeweb.vercel.app/",
  },
  {
    n: "05",
    name: "L'Art Sucré Cake",
    desc: {
      pt: "Site elegante para uma confeitaria artesanal, com identidade visual delicada e refinada.",
      en: "An elegant website for an artisanal patisserie, with a delicate and refined visual identity.",
    },
    tags: ["HTML", "Tailwind", "CSS"],
    url: "https://artsucrecake.vercel.app/",
  },
];

export function ProjectSection() {
  const { t, lang } = useLang();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const currentProject = projects[currentIndex];

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: "0%",
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? "100%" : "-100%",
      opacity: 0,
  }),
  };

  return (
    <section id="projects" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionHeader
            eyebrow={t("projectsEyebrow")}
            title={t("projectsTitle")}
            index="03"
          />
        </motion.div>
        <div className="relative mt-14 max-w-3xl mx-auto">
          <div className="relative overflow-hidden w-full">
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.a
                key={currentProject.n}
                href={currentProject.url}
                target="_blank"
                rel="noopener noreferrer"
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/5 bg-surface/40 p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:bg-surface sm:p-9 w-full"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/15 blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/0 to-transparent transition-all duration-700 group-hover:via-primary/60" />
                <div className="relative flex items-center justify-between">
                  <span className="font-mono text-xs tracking-widest text-muted-foreground">
                    / {currentProject.n}
                  </span>
                  <span className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.02] transition-all duration-500 group-hover:border-primary/40 group-hover:bg-primary group-hover:rotate-45">
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:text-primary-foreground" />
                  </span>
                </div>
                <h3 className="relative mt-8 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                  {currentProject.name}
                </h3>
                <p className="relative mt-4 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {currentProject.desc[lang]}
                </p>
                <div className="relative mt-7 flex flex-wrap gap-2">
                  {currentProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground transition-colors group-hover:border-primary/30 group-hover:text-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="relative mt-7 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-primary">
                  <span>{t("viewProject")}</span>
                  <span className="h-px w-8 bg-primary transition-all duration-500 group-hover:w-16" />
                </div>
              </motion.a>
            </AnimatePresence>
          </div>
          <button
            onClick={prevSlide}
            aria-label="Projeto anterior"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-surface/80 backdrop-blur-md text-foreground transition-all duration-300 hover:border-primary/40 hover:bg-primary hover:text-primary-foreground sm:-left-5 sm:h-12 sm:w-12"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            onClick={nextSlide}
            aria-label="Próximo projeto"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-surface/80 backdrop-blur-md text-foreground transition-all duration-300 hover:border-primary/40 hover:bg-primary hover:text-primary-foreground sm:-right-5 sm:h-12 sm:w-12"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          <div className="mt-8 flex items-center justify-center gap-2">
            {projects.map((p, idx) => (
              <button
                key={p.n}
                onClick={() => goToSlide(idx)}
                aria-label={`Ir para o projeto ${p.name}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? "w-8 bg-primary"
                    : "w-2.5 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}