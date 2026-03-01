import React, { useRef, useEffect } from 'react';

export const ParticleCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];
    const mouse = { x: -1000, y: -1000, radius: 170 };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);

    class Particle {
      x: number; y: number; baseX: number; baseY: number;
      size: number; density: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.baseX = x;
        this.baseY = y;
        this.size = Math.random() * 2 + 1;
        this.density = (Math.random() * 30) + 10;
      }

      draw() {
        if (!ctx) return;
        
        // Efeito de brilho (Glow)
        ctx.shadowBlur = 8;
        ctx.shadowColor = '#c1121f';
        ctx.fillStyle = '#c1121f';
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Reseta o blur para não pesar nas linhas
        ctx.shadowBlur = 0;
      }

      update() {
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < mouse.radius) {
          const force = (mouse.radius - distance) / mouse.radius;
          const directionX = (dx / distance) * force * this.density;
          const directionY = (dy / distance) * force * this.density;
          this.x -= directionX;
          this.y -= directionY;
        } else {
          if (this.x !== this.baseX) {
            this.x -= (this.x - this.baseX) * 0.05;
          }
          if (this.y !== this.baseY) {
            this.y -= (this.y - this.baseY) * 0.05;
          }
        }
      }
    }

    // Função que desenha as conexões (linhas)
    function connect() {
      if (!ctx) return;
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          let dx = particles[a].x - particles[b].x;
          let dy = particles[a].y - particles[b].y;
          let distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) { // Distância máxima para conectar
            let opacity = 1 - (distance / 100);
            ctx.strokeStyle = `rgba(193, 18, 31, ${opacity * 0.5})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    }

    function init() {
      particles = [];
      // Ajuste o número 15000 para mais ou menos partículas (quanto menor, mais denso)
      const quantity = (canvas!.width * canvas!.height) / 15000;
      for (let i = 0; i < quantity; i++) {
        particles.push(new Particle(Math.random() * canvas!.width, Math.random() * canvas!.height));
      }
    }

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].draw();
        particles[i].update();
      }
      connect();
      requestAnimationFrame(animate);
    }

    resize();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1
      }}
    />
  );
};