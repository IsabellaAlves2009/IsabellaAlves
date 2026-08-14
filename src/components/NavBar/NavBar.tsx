import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { useLang, type Lang } from "../../lib/i18n";

const sections = [
  { id: "home",     key: "navHome" as const },
  { id: "about",    key: "navAbout" as const },
  { id: "stack",    key: "navStack" as const },
  { id: "projects", key: "navProjects" as const },
  { id: "contact",  key: "navContact" as const },
];

export function Navbar() {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      let current = "home";
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top <= 120) current = s.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const goTo = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); goTo("home"); }}
            className="group flex items-center gap-2"
          >
            <span className="font-display text-lg font-semibold tracking-tight">
              Isabella<span className="text-primary"> Alves</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className={`hidden md:flex items-center gap-1 rounded-full glass px-2 py-1.5 transition-shadow duration-500 ${scrolled ? "shadow-glow-soft" : ""}`}>
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => goTo(s.id)}
                className="relative px-4 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {active === s.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-primary/15 ring-1 ring-primary/30"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span className={`relative ${active === s.id ? "text-foreground" : ""}`}>
                  {t(s.key)}
                </span>
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <LangToggle lang={lang} onChange={setLang} />
            <button
              aria-label="Menu"
              onClick={() => setOpen(true)}
              className="grid h-10 w-10 place-items-center rounded-xl glass transition-colors hover:bg-primary/15 md:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] md:hidden"
          >
            <div
              className="absolute inset-0 bg-background/85 backdrop-blur-2xl"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-0 top-0 flex h-full w-[88%] max-w-sm flex-col bg-surface/90 px-7 pb-10 pt-7 shadow-2xl ring-1 ring-white/5 backdrop-blur-xl"
            >
              <div className="mb-12 flex items-center justify-between">
                <span className="font-display text-lg font-semibold">
                  Isabella<span className="text-primary">.</span>
                </span>
                <button
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="grid h-10 w-10 place-items-center rounded-xl glass transition-colors hover:bg-primary/15"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav className="flex flex-col gap-1">
                {sections.map((s, i) => (
                  <motion.button
                    key={s.id}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    onClick={() => goTo(s.id)}
                    className="group flex items-baseline justify-between border-b border-white/5 py-5 text-left"
                  >
                    <span className="font-display text-3xl font-semibold tracking-tight transition-colors group-hover:text-primary">
                      {t(s.key)}
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">
                      0{i + 1}
                    </span>
                  </motion.button>
                ))}
              </nav>
              <div className="mt-auto pt-10">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  bella.s.alves2005@gmail.com
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function LangToggle({ lang, onChange }: { lang: Lang; onChange: (l: Lang) => void }) {
  return (
    <div className="relative flex items-center rounded-full glass p-1 font-mono text-[11px] font-semibold uppercase tracking-widest">
      <motion.span
        layout
        transition={{ type: "spring", stiffness: 500, damping: 35 }}
        className="absolute inset-y-1 w-[42%] rounded-full bg-gradient-to-br from-primary to-primary-glow shadow-button"
        style={{ left: lang === "pt" ? "4px" : "calc(58% - 4px)" }}
      />
      <button
        onClick={() => onChange("pt")}
        className={`relative z-10 px-3 py-1 transition-colors ${lang === "pt" ? "text-primary-foreground" : "text-muted-foreground"}`}
      >
        PT
      </button>
      <button
        onClick={() => onChange("en")}
        className={`relative z-10 px-3 py-1 transition-colors ${lang === "en" ? "text-primary-foreground" : "text-muted-foreground"}`}
      >
        EN
      </button>
    </div>
  );
}
