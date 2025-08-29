import { motion, useScroll, useTransform } from "motion/react";
import { FloatingParticles } from "./components/FloatingParticles";
import { FloatingOrbs } from "./components/FloatingOrbs";
import { GridPattern } from "./components/GridPattern";
import { MouseTrail } from "./components/MouseTrail";
import { AnimatedText } from "./components/AnimatedText";
import { AnimatedCard } from "./components/AnimatedCard";
import { SkillCard } from "./components/SkillCard";
import { ProjectCard } from "./components/ProjectCard";
import { Timeline } from "./components/Timeline";

export default function App() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  const skills = [
    { title: "React & Next.js", level: 95, icon: "⚛️" },
    { title: "TypeScript", level: 92, icon: "🔷" },
    { title: "UI/UX Design", level: 88, icon: "🎨" },
    { title: "Node.js", level: 85, icon: "🟢" },
    { title: "Motion Design", level: 90, icon: "✨" },
    { title: "Cloud Architecture", level: 82, icon: "☁️" },
  ];

  const projects = [
    {
      title: "Enterprise Dashboard",
      description: "A comprehensive analytics dashboard with real-time data visualization and advanced filtering capabilities",
      image: "https://images.unsplash.com/photo-1649451844931-57e22fc82de3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXZlbG9wbWVudCUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NTY0NjU2MDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["React", "TypeScript", "D3.js", "Node.js", "PostgreSQL"]
    },
    {
      title: "Mobile Banking App",
      description: "Secure and intuitive mobile banking application with biometric authentication and seamless transactions",
      image: "https://images.unsplash.com/photo-1570894808314-677b57f25e45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbGVlayUyMG1vYmlsZSUyMGFwcCUyMGludGVyZmFjZXxlbnwxfHx8fDE3NTY0NjU2MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["React Native", "Firebase", "Stripe", "Biometrics API"]
    },
    {
      title: "Design System Platform",
      description: "Comprehensive design system with automated documentation and component library management",
      image: "https://images.unsplash.com/photo-1737918543118-9c9e074c60b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwZGVzaWduJTIwc3lzdGVtJTIwY29tcG9uZW50c3xlbnwxfHx8fDE3NTY0NjU2MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["Storybook", "Figma API", "GitHub Actions", "AWS S3"]
    }
  ];

  const timelineItems = [
    {
      year: "2024",
      title: "Senior Frontend Architect",
      company: "TechCorp Solutions",
      description: "Leading frontend architecture decisions and mentoring development teams across multiple product lines"
    },
    {
      year: "2023",
      title: "Lead React Developer",
      company: "InnovateLab",
      description: "Built scalable web applications serving 100k+ users with focus on performance and accessibility"
    },
    {
      year: "2022",
      title: "Full Stack Developer",
      company: "StartupXYZ",
      description: "Developed end-to-end solutions using modern web technologies and cloud infrastructure"
    },
    {
      year: "2021",
      title: "Frontend Developer",
      company: "Digital Agency",
      description: "Created responsive websites and interactive web experiences for various clients"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <FloatingParticles />
      <FloatingOrbs />
      <GridPattern />
      <MouseTrail />
      
      {/* Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              className="text-2xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent"
              whileHover={{ 
                scale: 1.05,
                filter: "brightness(1.2)"
              }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Alex Thompson
            </motion.div>
            
            <div className="flex space-x-8">
              {["Home", "Skills", "Projects", "About", "Contact"].map((item, index) => (
                <motion.button
                  key={item}
                  className="text-muted-foreground hover:text-primary transition-colors relative"
                  onClick={() => scrollToSection(["home", "skills", "projects", "about", "contact"][index])}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.5, duration: 0.6 }}
                  whileHover={{ 
                    scale: 1.1,
                    color: "var(--primary)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative">
        <motion.div 
          className="container mx-auto px-6 text-center"
          style={{ y: y1, opacity }}
        >
          <motion.div
            className="mb-12"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              duration: 1.2, 
              ease: "easeOut",
              type: "spring",
              stiffness: 100 
            }}
          >
            <motion.div
              className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-primary via-primary/80 to-primary/60 mb-8 flex items-center justify-center text-5xl shadow-2xl shadow-primary/20"
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.05, 1],
                boxShadow: [
                  "0 0 0 0 rgba(59, 130, 246, 0.2)",
                  "0 0 0 20px rgba(59, 130, 246, 0)",
                  "0 0 0 0 rgba(59, 130, 246, 0.2)"
                ]
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
              whileHover={{
                scale: 1.1,
                rotate: 180,
                transition: { duration: 0.5 }
              }}
            >
              👨‍💻
            </motion.div>
          </motion.div>

          <AnimatedText
            text="Creative Frontend Developer"
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent"
            delay={0.5}
          />

          <AnimatedText
            text="Crafting exceptional digital experiences with cutting-edge technology and innovative design"
            className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
            delay={1}
          />

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
          >
            <motion.button
              className="px-10 py-5 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-2xl font-medium shadow-xl shadow-primary/25 relative overflow-hidden"
              onClick={() => scrollToSection("projects")}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 15px 40px rgba(59, 130, 246, 0.3)",
                y: -2
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
              <span className="relative z-10">View My Work</span>
            </motion.button>
            
            <motion.button
              className="px-10 py-5 border-2 border-border rounded-2xl font-medium hover:bg-accent transition-all duration-300 relative overflow-hidden group"
              onClick={() => scrollToSection("contact")}
              whileHover={{ 
                scale: 1.05,
                borderColor: "var(--primary)",
                y: -2
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-primary/10"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">Get In Touch</span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Enhanced scroll indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={() => scrollToSection("skills")}
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.2 }}
          style={{ y: y2 }}
        >
          <div className="w-8 h-12 border-2 border-primary rounded-full flex justify-center relative">
            <motion.div
              className="w-1.5 h-4 bg-primary rounded-full mt-2"
              animate={{ 
                y: [0, 16, 0],
                opacity: [1, 0.3, 1]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
              className="absolute inset-0 border-2 border-primary/30 rounded-full"
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.5, 0, 0.5]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 relative">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent"
              whileInView={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Technical Expertise
            </motion.h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Technologies and frameworks I use to create exceptional digital experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => {
              const animationTypes = ['bounce', 'spring', 'elastic', 'pulse', 'rotate'];
              const animationType = animationTypes[index % animationTypes.length];
              
              return (
                <SkillCard
                  key={skill.title}
                  title={skill.title}
                  level={skill.level}
                  icon={skill.icon}
                  delay={index * 0.15}
                  animationType={animationType as 'bounce' | 'spring' | 'elastic' | 'pulse' | 'rotate'}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 relative">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/30 to-transparent"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold mb-6">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A showcase of recent work and innovative solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 80, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.2, 
                  duration: 0.8,
                  type: "spring",
                  stiffness: 80
                }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  technologies={project.technologies}
                  delay={index * 0.2}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold mb-6">Professional Journey</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              My career progression and key milestones in technology
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <Timeline items={timelineItems} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold mb-6">Let's Work Together</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to bring your next project to life with cutting-edge technology
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedCard delay={0.2} direction="left">
              <motion.div 
                className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-10 h-full"
                whileHover={{ 
                  backgroundColor: "rgba(21, 27, 61, 0.8)",
                  borderColor: "var(--primary)"
                }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-3xl font-bold mb-8 text-primary">Get In Touch</h3>
                <div className="space-y-6">
                  {[
                    { icon: "📧", text: "alex.thompson@example.com", label: "Email" },
                    { icon: "📱", text: "+1 (555) 123-4567", label: "Phone" },
                    { icon: "📍", text: "San Francisco, CA", label: "Location" },
                    { icon: "💼", text: "Available for new projects", label: "Status" }
                  ].map((item, index) => (
                    <motion.div
                      key={item.label}
                      className="flex items-center space-x-4 group cursor-pointer"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                      whileHover={{ 
                        x: 15,
                        color: "var(--primary)"
                      }}
                    >
                      <span className="text-3xl group-hover:scale-110 transition-transform">
                        {item.icon}
                      </span>
                      <div>
                        <div className="text-sm text-muted-foreground">{item.label}</div>
                        <div className="font-medium">{item.text}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatedCard>

            <AnimatedCard delay={0.4} direction="right">
              <motion.div
                className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-10 h-full"
                whileHover={{ 
                  backgroundColor: "rgba(21, 27, 61, 0.8)",
                  borderColor: "var(--primary)"
                }}
              >
                <h3 className="text-3xl font-bold mb-8 text-primary">Send a Message</h3>
                <form className="space-y-6">
                  {[
                    { type: "text", placeholder: "Your Name", label: "Name" },
                    { type: "email", placeholder: "your.email@example.com", label: "Email" },
                    { type: "text", placeholder: "Project Subject", label: "Subject" }
                  ].map((field, index) => (
                    <motion.div
                      key={field.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.5 }}
                    >
                      <label className="block text-sm font-medium mb-2 text-muted-foreground">
                        {field.label}
                      </label>
                      <motion.input
                        type={field.type}
                        placeholder={field.placeholder}
                        className="w-full p-4 bg-input-background border border-border rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300"
                        whileFocus={{ 
                          scale: 1.02,
                          borderColor: "var(--primary)",
                          boxShadow: "0 0 20px rgba(59, 130, 246, 0.2)"
                        }}
                      />
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                  >
                    <label className="block text-sm font-medium mb-2 text-muted-foreground">
                      Message
                    </label>
                    <motion.textarea
                      placeholder="Tell me about your project..."
                      rows={6}
                      className="w-full p-4 bg-input-background border border-border rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 resize-none"
                      whileFocus={{ 
                        scale: 1.02,
                        borderColor: "var(--primary)",
                        boxShadow: "0 0 20px rgba(59, 130, 246, 0.2)"
                      }}
                    />
                  </motion.div>
                  <motion.button
                    type="submit"
                    className="w-full py-5 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-xl font-medium relative overflow-hidden shadow-xl shadow-primary/25"
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 15px 40px rgba(59, 130, 246, 0.3)"
                    }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.9 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                    <span className="relative z-10">Send Message</span>
                  </motion.button>
                </form>
              </motion.div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/50 relative">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        />
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            className="flex flex-col items-center space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              Alex Thompson
            </motion.div>
            
            <div className="flex space-x-6">
              {["GitHub", "LinkedIn", "Twitter", "Dribbble"].map((social, index) => (
                <motion.a
                  key={social}
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  whileHover={{ 
                    scale: 1.2,
                    color: "var(--primary)",
                    y: -5
                  }}
                >
                  {social}
                </motion.a>
              ))}
            </div>
            
            <motion.p
              className="text-muted-foreground"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              © 2024 Alex Thompson. Crafted with passion and precision.
            </motion.p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}