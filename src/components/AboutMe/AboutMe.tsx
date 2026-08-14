import { motion } from "motion/react";
import { useLang } from "../../lib/i18n";
import isabellaPhoto from "../../assets/isabella.png";

export function SectionHeader({
  eyebrow,
  title,
  index,
}: {
  eyebrow: string;
  title: string;
  index: string;
}) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
        <span>{index}</span>
        <span className="h-px w-10 bg-primary/50" />
        <span>{eyebrow}</span>
      </div>
      <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
        {title}
      </h2>
    </div>
  );
}

export function About() {
  const { t } = useLang();

  return (
    <section id="about" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionHeader eyebrow={t("aboutEyebrow")} title={t("aboutTitle")} index="01" />
        </motion.div>

        <div className="mt-14 grid gap-10 md:grid-cols-12 md:gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-5 lg:col-span-4"
          >
            <div className="group relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl border border-white/10 bg-surface">
              <div className="pointer-events-none absolute -inset-1 -z-10 rounded-3xl bg-gradient-to-br from-primary/40 via-primary/0 to-primary/20 blur-2xl opacity-60 transition-opacity duration-700 group-hover:opacity-100" />
              <img
                src={isabellaPhoto}
                alt="Isabella Alves"
                className="h-full w-full object-cover grayscale transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:grayscale-0 group-hover:scale-[1.04]"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                <span>Isabella Alves</span>
                <span className="text-primary">/ FE</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-7 lg:col-span-8 space-y-6 text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            <p>{t("aboutP1")}</p>
            <p>
              {t("aboutP2Pre")}
              <span className="font-semibold text-foreground">
                {t("aboutP2Bold")}
              </span>
              {t("aboutP2Post")}
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <Stat value="4+"  label={t("statYears")} />
              <Stat value="40+" label={t("statProjects")} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/5 bg-surface/50 p-6 backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:bg-surface">
      <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-primary/15 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative font-display text-5xl font-bold text-gradient-primary sm:text-6xl">
        {value}
      </div>
      <div className="relative mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </div>
    </div>
  );
}
