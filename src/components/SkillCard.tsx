import { motion } from "motion/react";

interface SkillCardProps {
  title: string;
  level: number;
  icon: string;
  delay?: number;
  animationType?: 'bounce' | 'spring' | 'elastic' | 'pulse' | 'rotate';
}

export function SkillCard({ title, level, icon, delay = 0, animationType = 'bounce' }: SkillCardProps) {
  
  const getAnimationVariants = () => {
    const baseVariants = {
      hidden: { 
        scale: 0,
        opacity: 0,
      },
      visible: { 
        scale: 1,
        opacity: 1,
      }
    };

    const transitions = {
      bounce: {
        type: "spring",
        stiffness: 400,
        damping: 10,
        delay,
        duration: 0.8,
      },
      spring: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        delay,
        duration: 1,
      },
      elastic: {
        type: "spring",
        stiffness: 300,
        damping: 8,
        delay,
        duration: 1.2,
      },
      pulse: {
        delay,
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
      rotate: {
        delay,
        duration: 0.8,
        ease: "backOut",
      }
    };

    if (animationType === 'rotate') {
      return {
        hidden: { 
          scale: 0,
          opacity: 0,
          rotate: -180,
        },
        visible: { 
          scale: 1,
          opacity: 1,
          rotate: 0,
        }
      };
    }

    if (animationType === 'pulse') {
      return {
        hidden: { 
          scale: 0,
          opacity: 0,
        },
        visible: { 
          scale: [0, 1.1, 1],
          opacity: 1,
        }
      };
    }

    return baseVariants;
  };

  const getTransition = () => {
    const transitions = {
      bounce: {
        type: "spring",
        stiffness: 400,
        damping: 10,
        delay,
        duration: 0.8,
      },
      spring: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        delay,
        duration: 1,
      },
      elastic: {
        type: "spring",
        stiffness: 300,
        damping: 8,
        delay,
        duration: 1.2,
      },
      pulse: {
        delay,
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
      rotate: {
        delay,
        duration: 0.8,
        ease: "backOut",
      }
    };

    return transitions[animationType];
  };

  return (
    <motion.div
      className="group"
      variants={getAnimationVariants()}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={getTransition()}
    >
      <motion.div
        className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:bg-card/80 transition-all duration-300 h-full"
        whileHover={{ 
          scale: 1.05,
          borderColor: "var(--primary)",
          boxShadow: "0 10px 30px rgba(59, 130, 246, 0.2)",
        }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          className="text-4xl mb-4 flex justify-center"
          animate={{ 
            rotate: [0, 5, -5, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: delay + 1,
          }}
        >
          {icon}
        </motion.div>
        
        <motion.h3 
          className="mb-3 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.3 }}
        >
          {title}
        </motion.h3>
        
        <div className="w-full bg-muted rounded-full h-3 overflow-hidden mb-3">
          <motion.div
            className="h-full bg-gradient-to-r from-primary/60 to-primary rounded-full relative"
            initial={{ width: 0 }}
            whileInView={{ width: `${level}%` }}
            viewport={{ once: true }}
            transition={{ 
              duration: 1.5, 
              delay: delay + 0.6, 
              ease: "easeOut" 
            }}
          >
            <motion.div
              className="absolute right-0 top-0 w-2 h-full bg-primary rounded-full"
              animate={{ 
                opacity: [0.5, 1, 0.5],
                scale: [1, 1.2, 1],
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                delay: delay + 2 
              }}
            />
          </motion.div>
        </div>
        
        <motion.div
          className="flex justify-between items-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.8 }}
        >
          <motion.span
            className="text-muted-foreground"
            whileHover={{ color: "var(--primary)" }}
          >
            Proficiency
          </motion.span>
          <motion.span
            className="font-medium text-primary"
            animate={{ 
              scale: [1, 1.05, 1],
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              delay: delay + 2.5 
            }}
          >
            {level}%
          </motion.span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}