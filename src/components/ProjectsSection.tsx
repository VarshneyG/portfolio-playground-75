import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack marketplace with Stripe payments, real-time inventory, and admin dashboard.',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
    color: 'neon-cyan',
    gradient: 'from-neon-cyan/20 to-neon-purple/10',
  },
  {
    title: 'AI Chat Application',
    description: 'Real-time messaging app with AI-powered responses, speech-to-text, and end-to-end encryption.',
    tags: ['React', 'OpenAI', 'WebSocket', 'Redis'],
    color: 'neon-purple',
    gradient: 'from-neon-purple/20 to-neon-pink/10',
  },
  {
    title: 'Project Management Tool',
    description: 'Kanban-style project tracker with team collaboration, file sharing, and analytics.',
    tags: ['React', 'Express', 'MongoDB', 'Docker'],
    color: 'neon-pink',
    gradient: 'from-neon-pink/20 to-neon-cyan/10',
  },
  {
    title: 'Real Estate Platform',
    description: 'Property listing platform with map integration, virtual tours, and mortgage calculator.',
    tags: ['Next.js', 'Prisma', 'AWS', 'Mapbox'],
    color: 'neon-cyan',
    gradient: 'from-neon-cyan/20 to-neon-purple/10',
  },
  {
    title: 'Healthcare Dashboard',
    description: 'Patient management system with appointment scheduling, records, and analytics.',
    tags: ['React', 'Python', 'PostgreSQL', 'Charts'],
    color: 'neon-purple',
    gradient: 'from-neon-purple/20 to-neon-cyan/10',
  },
  {
    title: 'Social Media Analytics',
    description: 'Cross-platform analytics dashboard tracking engagement, growth, and content performance.',
    tags: ['Vue.js', 'FastAPI', 'Redis', 'D3.js'],
    color: 'neon-pink',
    gradient: 'from-neon-pink/20 to-neon-purple/10',
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="section-padding relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-mono text-sm mb-2 tracking-widest uppercase">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-12">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className={`glass-card p-6 group hover:border-${project.color}/30 transition-all duration-300 cursor-pointer`}
            >
              {/* Gradient top bar */}
              <div className={`h-1 w-full rounded-full bg-gradient-to-r ${project.gradient} mb-5`} />

              <h3 className="text-lg font-bold font-display text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-2 py-1 rounded bg-secondary text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Github size={18} />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <ExternalLink size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
