import { motion } from "motion/react";
import { AnimatedCard } from "./AnimatedCard";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  company?: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      {/* Timeline line */}
      <motion.div
        className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary to-primary/20"
        initial={{ height: 0 }}
        animate={{ height: "100%" }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
      
      <div className="space-y-8">
        {items.map((item, index) => (
          <div key={index} className="relative flex items-start">
            {/* Timeline dot */}
            <motion.div
              className="relative z-10 w-4 h-4 bg-primary rounded-full mt-2 mr-6"
              initial={{ scale: 0, rotate: 180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ 
                delay: index * 0.2, 
                duration: 0.5,
                type: "spring",
                stiffness: 200
              }}
              whileHover={{ 
                scale: 1.5,
                boxShadow: "0 0 20px var(--primary)"
              }}
            >
              <motion.div
                className="absolute inset-0 bg-primary rounded-full"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [1, 0.5, 1]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  delay: index * 0.3
                }}
              />
            </motion.div>
            
            {/* Content */}
            <AnimatedCard delay={index * 0.15} direction="left" className="flex-1">
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:bg-card/80 transition-all duration-300">
                <motion.div
                  className="text-primary mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 + 0.3 }}
                >
                  {item.year}
                </motion.div>
                
                <motion.h3
                  className="mb-2"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.2 + 0.4 }}
                >
                  {item.title}
                </motion.h3>
                
                {item.company && (
                  <motion.p
                    className="text-muted-foreground mb-3"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.2 + 0.5 }}
                  >
                    {item.company}
                  </motion.p>
                )}
                
                <motion.p
                  className="text-muted-foreground"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.2 + 0.6 }}
                >
                  {item.description}
                </motion.p>
              </div>
            </AnimatedCard>
          </div>
        ))}
      </div>
    </div>
  );
}