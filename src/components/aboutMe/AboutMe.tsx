import { motion } from "framer-motion";
import "./aboutMe.css";
import profileImg from "../../assets/profileImg.png"; 

export default function About() {
  return (
    <section className="about-section" id="sobre">
      <div className="about-container">
        <motion.div 
          className="about-image"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="image-wrapper">
            <img src={profileImg} alt="Isabella Alves" />
            <div className="image-border"></div>
          </div>
        </motion.div>
        <motion.div 
          className="about-text"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <span className="about-eyebrow">A História</span>
          <h2>Sobre <span>Mim</span></h2>
          <p>
            Olá! Sou a Isabella, uma desenvolvedora Front-end apaixonada por transformar 
            ideias complexas em interfaces digitais elegantes e intuitivas. 
            Meu foco é criar experiências que não apenas funcionem bem, mas que também 
            contem uma história através do design.
          </p>
          <p>
            Com domínio em <strong>React, TypeScript e Ecossistema Motion</strong>, 
            estou sempre em busca de novos desafios que me permitam elevar o nível 
            da web moderna.
          </p>

          <div className="about-stats">
            <div className="stat-item">
              <span>3+</span>
              <p>Anos de Exp.</p>
            </div>
            <div className="stat-item">
              <span>40+</span>
              <p>Projetos</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}