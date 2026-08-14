import { motion } from "motion/react";
import { Mail, MessageCircle, ArrowUpRight } from "lucide-react";
import { useLang } from "../../lib/i18n";
import { SectionHeader } from "../AboutMe/AboutMe";

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "bella.s.alves2005@gmail.com",
    href: "mailto:bella.s.alves2005@gmail.com",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+55 (84) 99173-6618",
    href: "https://wa.me/5584991736618",
  },
  {
    icon: InstagramIcon,
    label: "Instagram",
    value: "@itzisahalves",
    href: "https://www.instagram.com/itzisahalves/",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "Isabella Alves",
    href: "https://www.linkedin.com/",
  },
];

export function Contact() {
  const { t } = useLang();

  return (
    <section id="contact" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionHeader
            eyebrow={t("contactEyebrow")}
            title={t("contactTitle")}
            index="04"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          {t("contactCopy")}
        </motion.p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {contacts.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex items-center gap-5 overflow-hidden rounded-2xl border border-white/5 bg-surface/40 p-5 backdrop-blur-sm transition-all duration-500 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-surface sm:p-6"
            >
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 ring-1 ring-primary/20 transition-all duration-500 group-hover:from-primary group-hover:to-primary-glow group-hover:ring-primary/0">
                <c.icon className="h-5 w-5 text-primary transition-colors group-hover:text-primary-foreground" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                  {c.label}
                </div>
                <div className="mt-1 truncate text-sm font-medium sm:text-base">
                  {c.value}
                </div>
              </div>
              <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-all duration-500 group-hover:text-primary group-hover:rotate-45" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="relative border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 sm:flex-row sm:px-8">
        <div className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} Isabella Alves. {t("footerRights")}
        </div>
        <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
          {t("footerBuilt")} <span className="text-primary">Isabella</span>
        </div>
      </div>
    </footer>
  );
}