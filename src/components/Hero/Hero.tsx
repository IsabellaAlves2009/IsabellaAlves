import { motion, useMotionValue, animate } from "framer-motion";
import { useEffect } from "react";
import { ParticleCanvas } from "../ParticleCanvas/ParticleCanvas"; 
import "./hero.css";

export function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const controlsX = animate(mouseX, [0, 0.2, 0, -0.2, 0], { 
      duration: 20, 
      repeat: Infinity, 
      ease: "easeInOut" 
    });
    const controlsY = animate(mouseY, [0, -0.2, 0, 0.2, 0], { 
      duration: 26, 
      repeat: Infinity, 
      ease: "easeInOut" 
    });
    return () => { 
      controlsX.stop(); 
      controlsY.stop(); 
    };
  }, [mouseX, mouseY]);

  function handleMouseMove(e: React.MouseEvent) {
    const xPos = e.clientX / window.innerWidth - 0.5;
    const yPos = e.clientY / window.innerHeight - 0.5;
    mouseX.set(xPos);
    mouseY.set(yPos);
  }

  return (
    <section 
      className="hero" 
      onMouseMove={handleMouseMove} 
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      <div className="hero-wallpaper" />
      <ParticleCanvas />
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
      >
        <span className="hero-eyebrow">Front-end Developer</span>
        <h1> 
          Isabella <span>Alves</span> 
        </h1>
        <p>
          Desenvolvo interfaces modernas, performáticas e bem pensadas,
          com foco em experiência do usuário e estética profissional.
        </p>
        
        <div className="hero-actions">
          <motion.a 
            href="#projects" 
            className="btn primary" 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
          >
            Ver projetos
          </motion.a>
          <motion.a 
            href="#contact" 
            className="btn ghost" 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
          >
            Entrar em contato
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}