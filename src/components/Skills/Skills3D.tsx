import Tilt from 'react-parallax-tilt';
import { useTranslation } from "react-i18next";
import { 
  SiReact, 
  SiTypescript, 
  SiCss3, 
  SiGit, 
  SiHtml5, 
  SiJavascript, 
  SiFramer, 
  SiTailwindcss, 
  SiNodedotjs 
} from 'react-icons/si';

const skills = [
  { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
  { name: "Framer Motion", icon: <SiFramer className="text-foreground" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
  { name: "CSS3", icon: <SiCss3 className="text-[#1572B6]" /> },
  { name: "HTML5", icon: <SiHtml5 className="text-[#E34F26]" /> },
  { name: "Git", icon: <SiGit className="text-[#F05032]" /> }
];

export function Skills3D() {
  const { t } = useTranslation();

  return (
    <section id="stack" className="relative scroll-mt-24 py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        
        {/* Cabeçalho no padrão atual */}
        <div className="mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-primary font-semibold">
            {t('skills.eyebrow')}
          </span>
          <h2 className="mt-1 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t('skills.titlePart1')} <span className="text-primary">{t('skills.titlePart2')}</span>
          </h2>
        </div>
        <div className="flex flex-wrap gap-3 sm:gap-4">
          {skills.map((skill, index) => (
            <Tilt
              key={index}
              perspective={500}
              scale={1.08}
              tiltMaxAngleX={20}
              tiltMaxAngleY={20}
              glareEnable={false}
              className="rounded-full overflow-hidden"
            >
              <div className="group relative flex items-center gap-3 rounded-full bg-white/[0.04] px-5 py-3 backdrop-blur-md transition-all duration-300 hover:bg-white/[0.08] hover:shadow-lg hover:shadow-primary/10 border-0 cursor-pointer">
                
                {/* Ícone com o tilt/profundidade 3D da versão antiga */}
                <div className="text-xl drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)] transition-transform duration-300 group-hover:scale-115">
                  {skill.icon}
                </div>

                {/* Nome da tecnologia lado a lado */}
                <span className="font-sans text-sm font-medium tracking-wide text-foreground">
                  {skill.name}
                </span>

              </div>
            </Tilt>
          ))}
        </div>

      </div>
    </section>
  );
}