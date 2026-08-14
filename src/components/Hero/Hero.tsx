import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { useLang } from "../../lib/i18n";
import { PlexusBackground } from "../PlexusBackground/PlexusBackground";

export function Hero() {
  const { t } = useLang();

  const goto = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-20 sm:pt-32"
    >
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <PlexusBackground />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          {t("heroEyebrow")}
        </motion.div>

        <h1 className="mt-7 max-w-5xl font-display text-[14vw] leading-[0.92] font-bold tracking-[-0.04em] sm:text-7xl md:text-8xl lg:text-[9rem]">
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="block text-gradient"
          >
            Isabella
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="block text-gradient-primary"
          >
            Alves
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          {t("heroTagline")}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <button
            onClick={() => goto("projects")}
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-br from-primary to-primary-glow px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-button transition-all duration-500 hover:shadow-button-hover hover:scale-[1.02]"
          >
            <span className="relative z-10">{t("heroCtaProjects")}</span>
            <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </button>

          <button
            onClick={() => goto("contact")}
            className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur-sm transition-all duration-500 hover:border-primary/40 hover:bg-primary/10 hover:scale-[1.02]"
          >
            <Sparkles className="h-4 w-4 text-primary transition-transform duration-500 group-hover:rotate-12" />
            {t("heroCtaContact")}
          </button>
        </motion.div>

      </div>
    </section>
  );
}