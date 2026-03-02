import { motion } from "framer-motion";
import "./contact.css";

export function Contact() {
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
        <span className="contact-subtitle">Vamos conversar?</span>
        <h2>Entrar em <span>contato</span></h2>
        <p>
          Estou disponível para novos projetos e oportunidades interessantes. 
          Se você tem uma ideia ou apenas quer dar um oi, mande uma mensagem!
        </p>

        <div className="contact-methods">
          <a href="mailto:seuemail@exemplo.com" className="contact-card-link">
            <div className="contact-icon">✉️</div>
            <div>
              <span className="method-label">Email</span>
              <span className="method-value">bella.s.alves2005@gmail.com</span>
            </div>
          </a>

          <a href="https://wa.me/5584991736618" target="_blank" className="contact-card-link">
            <div className="contact-icon">📱</div>
            <div>
              <span className="method-label">WhatsApp</span>
              <span className="method-value">(84) 99173-6618</span>
            </div>
          </a>

          <a href="https://www.instagram.com/itzisahalves/" target="_blank" className="contact-card-link">
            <div className="contact-icon">🔗</div>
            <div>
              <span className="method-label">Instagram</span>
              <span className="method-value">@itzisahalves</span>
            </div>
          </a>
        </div>
      </motion.div>
    </section>
  );
}