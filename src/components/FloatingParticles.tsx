import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  type: 'dot' | 'line' | 'triangle';
}

export function FloatingParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const newParticles: Particle[] = [];
    const types: Particle['type'][] = ['dot', 'line', 'triangle'];
    
    for (let i = 0; i < 30; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 6 + 2,
        duration: Math.random() * 25 + 15,
        delay: Math.random() * 5,
        type: types[Math.floor(Math.random() * types.length)],
      });
    }
    setParticles(newParticles);
  }, []);

  const renderParticle = (particle: Particle) => {
    const baseClasses = "absolute bg-primary/20";
    const style = {
      left: `${particle.x}%`,
      top: `${particle.y}%`,
      width: particle.size,
      height: particle.size,
    };

    switch (particle.type) {
      case 'dot':
        return (
          <motion.div
            className={`${baseClasses} rounded-full`}
            style={style}
          />
        );
      case 'line':
        return (
          <motion.div
            className={`${baseClasses} rounded-sm`}
            style={{
              ...style,
              width: particle.size * 3,
              height: 1,
            }}
          />
        );
      case 'triangle':
        return (
          <motion.div
            className={`${baseClasses}`}
            style={{
              ...style,
              clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          animate={{
            x: [-30, 30, -30],
            y: [-20, 20, -20],
            rotate: [0, 360, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay,
          }}
        >
          {renderParticle(particle)}
        </motion.div>
      ))}
    </div>
  );
}