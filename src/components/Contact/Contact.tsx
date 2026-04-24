import { motion } from "framer-motion";
import { useTranslation } from "react-i18next"; // Importação necessária
import "./contact.css";

export function Contact() {
  const { t } = useTranslation(); // Inicialização do hook de tradução

  return (
    <section id="contact" className="contact-container">
      <motion.div 
        className="contact-content"
        initial={{ opacity: 0, y: 80 }} 
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }} 
        transition={{ 
          duration: 1, 
          ease: [0.22, 1, 0.36, 1] 
        }}
      >
        <span className="contact-subtitle">{t('contact.title')}</span>
        <h2>{t('contact.header1')} <span>{t('contact.header2')}</span></h2>
        <p>
          {t('contact.description')}
        </p>

        <div className="contact-methods">
          <a href="mailto:bella.s.alves2005@gmail.com" className="contact-card-link">
            <div className="contact-icon">✉️</div>
            <div>
              <span className="method-label">{t('contact.emailLabel')}</span>
              <span className="method-value">bella.s.alves2005@gmail.com</span>
            </div>
          </a>

          <a href="https://wa.me/5584991736618" target="_blank" rel="noreferrer" className="contact-card-link">
            <div className="contact-icon">📱</div>
            <div>
              <span className="method-label">{t('contact.whatsappLabel')}</span>
              <span className="method-value">+55 (84) 99173-6618</span>
            </div>
          </a>

          <a href="https://www.instagram.com/itzisahalves/" target="_blank" rel="noreferrer" className="contact-card-link">
            <div className="contact-icon">🔗</div>
            <div>
              <span className="method-label">{t('contact.instagramLabel')}</span>
              <span className="method-value">@itzisahalves</span>
            </div>
          </a>

          <a href="https://www.linkedin.com/in/itzisahalves/" target="_blank" rel="noreferrer" className="contact-card-link">
            <div className="contact-icon">💼</div>
            <div>
              <span className="method-label">{t('contact.linkedinLabel')}</span>
              <span className="method-value">Isabella Alves</span>
            </div>
          </a>
        </div>
      </motion.div>
    </section>
  );
}