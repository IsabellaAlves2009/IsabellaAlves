
import Tilt from 'react-parallax-tilt';
import { SiReact, SiTypescript, SiCss3, SiGit, SiHtml5, SiJavascript, SiFramer, SiTailwindcss, SiNodedotjs } from 'react-icons/si';
import './skills3D.css';

const skills = [
  { name: "React", icon: <SiReact /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "Framer Motion", icon: <SiFramer /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "CSS3", icon: <SiCss3 /> },
  { name: "HTML5", icon: <SiHtml5 /> },
  { name: "Git", icon: <SiGit /> }
];

export function Skills3D() {
  return (
    <section className="skills-section">
      <div className="skills-header">
        <span className="about-eyebrow">Expertise</span>
        <h2>Minha <span>Stack</span></h2>
      </div>
      <div className="skills-grid-clean">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item-container">
            <Tilt
              perspective={500}
              scale={1.2}
              glareEnable={false}
              className="icon-tilt"
            >
              <div className="icon-3d-only">
                {skill.icon}
              </div>
            </Tilt>
            <span className="skill-name-fixed">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}