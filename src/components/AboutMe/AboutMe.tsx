import { motion } from "framer-motion";
import { useTranslation } from "react-i18next"; // Importando o hook
import "./aboutMe.css";
import profileImg from "../../assets/profileImg.png"; 

export default function About() {
  const { t } = useTranslation(); // Inicializando a tradução

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
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ 
            duration: 1, 
            ease: [0.22, 1, 0.36, 1],
            delay: 0.1 
          }}
        >
          <span className="about-eyebrow">{t('about.eyebrow')}</span>
          <h2>{t('about.titlePart1')} <span>{t('about.titlePart2')}</span></h2>
          <p>
            {t('about.text')}
          </p>
          <p>
            {t('about.techText')} <strong>React, TypeScript & Motion Ecosystem</strong>, 
            {t('about.challengeText')}
          </p>

          <div className="about-stats">
            <div className="stat-item">
              <span>4+</span>
              <p>{t('about.experience')}</p>
            </div>
            <div className="stat-item">
              <span>40+</span>
              <p>{t('about.projectsCount')}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}