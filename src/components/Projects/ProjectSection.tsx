import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "./ProjectSection.css";
import imgMovie from "../../assets/movie-explorer.png";
import imgTodo from "../../assets/todolist.png";
import imgHealth from "../../assets/healthprime.png";
import imgSmash from "../../assets/smashburguer.png";

export function ProjectSection() {
  const { t } = useTranslation();

  // Definimos o array dentro do componente para que ele reaja à mudança de idioma
  const projects = [
    {
      title: "Movie Explorer",
      tags: ["React", "Typescript", "Framer Motion"],
      descriptionKey: "projects.movieExplorer", // Usamos a chave do JSON
      color: "#0a0a0a", 
      image: imgMovie, 
      projectLink: "https://movie-explorer-nu-sand.vercel.app/",
      repository: "https://github.com/IsabellaAlves2009/movie-explorer.git"
    },
    {
      title: "To do list",
      tags: ["React", "TypeScript", "CSS"],
      descriptionKey: "projects.todoList",
      color: "#470606", 
      image: imgTodo,
      projectLink: "https://to-do-list-hazel-omega-31.vercel.app/",
      repository: "https://github.com/IsabellaAlves2009/to-do-list-TS.git"
    },
    {
      title: "Smash Burguer",
      tags: ["Html", "Javascript","Tailwind", "Node.js"],
      descriptionKey: "projects.smashBurguer",
      color: "#470606", 
      image: imgSmash,
      projectLink: "https://smashburguer.vercel.app/",
      repository: "https://github.com/IsabellaAlves2009/smashBurguer.git"
    },
    {
      title: "Health Prime landing page",
      tags: ["HTML", "Tailwind"],
      descriptionKey: "projects.healthPrime", 
      color: "#0a0a0a",
      image: imgHealth,
      projectLink: "https://healthprimeweb.vercel.app/",
      repository: "https://github.com/IsabellaAlves2009/healthprime.git"
    }
  ];

  return (
    <section id="projects" className="projects-container">
      <div className="projects-header">
        <h2>{t('projects.titlePart1')} <span>{t('projects.titlePart2')}</span></h2>
      </div>

      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="card-wrapper">
            <motion.div 
              className="project-card"
              style={{ backgroundColor: project.color }}
              initial={{ opacity: 0, y: 100 }} 
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }} 
              transition={{ 
                duration: 0.8, 
                ease: [0.22, 1, 0.36, 1], 
              }}
            >
              <div className="project-content">
                <span className="project-index">0{index + 1}</span>
                <h3>{project.title}</h3>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <p>{t(project.descriptionKey)}</p>
                
                <div className="project-actions">
                  <motion.a 
                    href={project.projectLink} 
                    target="_blank"
                    rel="noreferrer"
                    className="btn-project-red"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {t('projects.viewProject')}
                  </motion.a>
                  
                  <motion.a 
                    href={project.repository} 
                    target="_blank"
                    rel="noreferrer"
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