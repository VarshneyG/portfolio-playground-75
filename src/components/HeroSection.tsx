import { motion } from 'framer-motion';
import Scene3D from './Scene3D';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Scene3D />

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-primary font-mono text-sm mb-4 tracking-widest uppercase"
        >
          Full Stack Developer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold font-display leading-tight mb-6"
        >
          Building{' '}
          <span className="text-gradient neon-text">Digital</span>
          <br />
          Experiences
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10"
        >
          I craft performant, scalable web applications from concept to deployment.
          Turning complex problems into elegant solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-8 py-3 rounded-lg font-medium bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-lg font-medium border-glow bg-transparent text-primary hover:bg-primary/10 transition-colors"
          >
            Get In Touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex items-center justify-center gap-6 mt-12"
        >
          {[
            { icon: Github, href: '#' },
            { icon: Linkedin, href: '#' },
            { icon: Mail, href: '#contact' },
          ].map(({ icon: Icon, href }, i) => (
            <a
              key={i}
              href={href}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Icon size={20} />
            </a>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float"
      >
        <ArrowDown size={20} className="text-muted-foreground" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
