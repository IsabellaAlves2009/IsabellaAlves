import { motion } from "motion/react";
import Tilt from "react-parallax-tilt";
import { useLang } from "../../lib/i18n";
import { SectionHeader } from "../AboutMe/AboutMe";
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiFramer,
  SiTailwindcss,
  SiNodedotjs,
  SiCss3,
  SiHtml5,
  SiGit,
} from "react-icons/si";

type Tech = {
  name: string;
  Icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
};

const stack: Tech[] = [
  { name: "React", Icon: SiReact },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "Framer Motion", Icon: SiFramer },
  { name: "Tailwind", Icon: SiTailwindcss },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "CSS3", Icon: SiCss3 },
  { name: "HTML5", Icon: SiHtml5 },
  { name: "Git", Icon: SiGit },
];

export function Stack() {
  const { t } = useLang();

  return (
    <section id="stack" className="relative scroll-mt-24 py-20 sm:py-28 lg:py-32">
      <div className="container-fluid">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionHeader eyebrow={t("stackEyebrow")} title={t("stackTitle")} index="02" />
        </motion.div>

        <div className="mt-12 grid grid-cols-2 gap-y-12 gap-x-6 sm:mt-16 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {stack.map((tech, i) => (
            <TechItem key={tech.name} tech={tech} index={i} />
          ))}
        </div>

        {/* Marquee belt */}
        <div className="relative mt-16 overflow-hidden border-y border-white/5 py-5 sm:mt-20 sm:py-6 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <div className="flex animate-marquee gap-8 whitespace-nowrap font-display font-semibold text-[clamp(1.5rem,3vw,2.5rem)] sm:gap-12">
            {[...stack, ...stack, ...stack].map((s, i) => (
              <span key={i} className={i % 2 ? "text-foreground/30" : "text-primary/60"}>
                {s.name} <span className="text-primary mx-3">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TechItem({ tech, index }: { tech: Tech; index: number }) {
  const { Icon, name } = tech;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center justify-start gap-3"
    >
      <Tilt
        perspective={600}
        scale={1.2}
        tiltMaxAngleX={25}
        tiltMaxAngleY={25}
        glareEnable={false}
        transitionSpeed={1200}
        className="flex items-center justify-center"
      >
        <Icon
          className="h-[60px] w-[60px] lg:h-[68px] lg:w-[68px] text-primary drop-shadow-[0_8px_24px_color-mix(in_oklab,var(--primary)_35%,transparent)]"
        />
      </Tilt>

      <span className="text-sm text-center font-medium tracking-wide text-foreground/70">
        {name}
      </span>
    </motion.div>
  );
}
