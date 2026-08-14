import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "pt" | "en";

type Dict = Record<string, { pt: string; en: string }>;

export const T: Dict = {
  navHome:     { pt: "Início",     en: "Home" },
  navAbout:    { pt: "Sobre",      en: "About" },
  navStack:    { pt: "Stack",      en: "Stack" },
  navProjects: { pt: "Projetos",   en: "Projects" },
  navContact:  { pt: "Contato",    en: "Contact" },

  heroEyebrow: { pt: "Desenvolvedora Front-end", en: "Front-end Developer" },
  heroTagline: {
    pt: "Desenvolvo interfaces modernas, performáticas e bem pensadas, com foco em experiência do usuário e estética profissional.",
    en: "I develop modern, high-performance, and well-thought-out interfaces, focusing on user experience and professional aesthetics.",
  },
  heroCtaProjects: { pt: "Ver projetos",     en: "View projects" },
  heroCtaContact:  { pt: "Entrar em contato", en: "Get in touch" },
  heroScroll:      { pt: "Role para descobrir", en: "Scroll to explore" },

  aboutEyebrow: { pt: "A história", en: "The story" },
  aboutTitle:   { pt: "Sobre mim",   en: "About me" },
  aboutP1: {
    pt: "Olá! Sou Isabella, desenvolvedora Front-end apaixonada por transformar ideias complexas em interfaces digitais elegantes e intuitivas. Meu foco é criar experiências que não só funcionam bem, mas também contam uma história através do design.",
    en: "Hi! I'm Isabella, a Front-end developer passionate about transforming complex ideas into elegant and intuitive digital interfaces. My focus is on creating experiences that not only work well but also tell a story through design.",
  },
  aboutP2Pre: { pt: "Especialista em ", en: "Expertise in " },
  aboutP2Bold: { pt: "React, TypeScript e o ecossistema Motion", en: "React, TypeScript & the Motion Ecosystem" },
  aboutP2Post: {
    pt: ", estou sempre em busca de novos desafios que me permitam elevar o nível da web moderna.",
    en: ", I am always looking for new challenges that allow me to elevate the level of the modern web.",
  },
  statYears:    { pt: "Anos de exp.", en: "Years exp." },
  statProjects: { pt: "Projetos",     en: "Projects" },

  stackEyebrow: { pt: "Expertise",  en: "Expertise" },
  stackTitle:   { pt: "Minha Stack", en: "My Stack" },

  projectsEyebrow: { pt: "Trabalhos selecionados", en: "Selected work" },
  projectsTitle:   { pt: "Projetos",                en: "Projects" },
  viewProject:     { pt: "Ver projeto",             en: "View project" },

  contactEyebrow: { pt: "Vamos conversar?", en: "Let's talk?" },
  contactTitle:   { pt: "Entre em contato",  en: "Get in touch" },
  contactCopy: {
    pt: "Estou disponível para novos projetos e oportunidades interessantes. Se você tem uma ideia ou só quer dar oi, mande uma mensagem!",
    en: "I'm available for new projects and interesting opportunities. If you have an idea or just want to say hi, send me a message!",
  },

  footerRights: { pt: "Todos os direitos reservados.", en: "All rights reserved." },
  footerBuilt:  { pt: "Desenvolvido com cuidado por", en: "Crafted with care by" },
};

interface LangCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: keyof typeof T) => string;
}

const Ctx = createContext<LangCtx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("pt");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = window.localStorage.getItem("ia_lang");
    if (saved === "pt" || saved === "en") setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") window.localStorage.setItem("ia_lang", l);
  };

  const t = (key: keyof typeof T) => T[key]?.[lang] ?? "";

  return <Ctx.Provider value={{ lang, setLang, t }}>{children}</Ctx.Provider>;
}

export function useLang() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useLang must be used inside LanguageProvider");
  return c;
}
