import { motion } from "motion/react";
import { AnimatedCard } from "./AnimatedCard";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  delay?: number;
}

export function ProjectCard({ 
  title, 
  description, 
  image, 
  technologies, 
  delay = 0 
}: ProjectCardProps) {
  return (
    <AnimatedCard delay={delay} className="group">
      <motion.div
        className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300"
        whileHover={{ 
          y: -10,
          boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
        }}
        layout
      >
        <div className="relative overflow-hidden">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <ImageWithFallback
              src={image}
              alt={title}
              className="w-full h-48 object-cover"
            />
          </motion.div>
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={false}
          />
        </div>
        
        <div className="p-6">
          <motion.h3
            className="mb-3"
            whileHover={{ color: "var(--primary)" }}
            transition={{ duration: 0.2 }}
          >
            {title}
          </motion.h3>
          
          <motion.p
            className="text-muted-foreground mb-4"
            initial={{ opacity: 0.8 }}
            whileHover={{ opacity: 1 }}
          >
            {description}
          </motion.p>
          
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <motion.span
                key={tech}
                className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: delay + 0.1 * index }}
                whileHover={{ 
                  scale: 1.1,
                  backgroundColor: "var(--primary)",
                  color: "var(--primary-foreground)"
                }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatedCard>
  );
}