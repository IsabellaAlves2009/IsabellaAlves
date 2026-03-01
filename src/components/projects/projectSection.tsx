import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import "./projectSection.css";
import imgMovie from "../../assets/movie-explorer.png";
import imgTodo from "../../assets/todolist.png";
import imgPaint from "../../assets/paintJS.png";

const projects = [
  {
    title: "Movie Explorer",
    tags: ["React", "Typescript", "Framer Motion"],
    description: "Uma plataforma dinâmica para explorar o mundo do cinema, com filtros inteligentes e uma interface focada na experiência do usuário.",
    color: "#0a0a0a", 
    image: imgMovie, 
    repository: "#"
  },
  {
    title: "To do list",
    tags: ["React", "TypeScript", "Tailwind"],
    description: "Aplicação de produtividade minimalista com foco em alta performance e organização de tarefas de forma intuitiva.",
    color: "#470606", 
    image: imgTodo,
    repository: "#"
  },
  {
    title: "Paint Color",
    tags: ["Javascript", "HTML", "CSS"],
    description: "Uma ferramenta interativa para designers testarem paletas de cores e composições visuais em tempo real no navegador.",
    color: "#0a0a0a", 
    image: imgPaint,
    repository: "#"
  },
];

const cardVariants: Variants = {
  offscreen: {
    y: 100,
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 0.8
    }
  }
};

export function ProjectSection() {
  return (
    <section className="projects-container">
      <div className="projects-header">
        <h2>Meus <span>projetos</span></h2>
      </div>

      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="card-wrapper">
            <motion.div 
              className="project-card"
              style={{ backgroundColor: project.color }}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.1 }}
              variants={cardVariants}
            >
              <div className="project-content">
                <span className="project-index">0{index + 1}</span>
                <h3>{project.title}</h3>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <p>{project.description}</p>
                
                <div className="project-actions">
                  <motion.a 
                    href="#" 
                    className="btn-project-red"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Ver Projeto
                  </motion.a>
                  
                  <motion.a 
                    href={project.repository} 
                    className="btn-repository" 
                    title="GitHub"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </motion.a>
                </div>
              </div>
              
              <div className="project-visual">
                <motion.img 
                  src={project.image} 
                  alt={project.title}
                />
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}