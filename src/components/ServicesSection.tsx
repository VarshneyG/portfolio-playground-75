import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Layout, Server, Palette, Zap, Shield, Headphones } from 'lucide-react';

const services = [
  {
    icon: Layout,
    title: 'Frontend Development',
    description: 'Responsive, performant UIs with React, Next.js, and modern CSS frameworks.',
    price: 'From $50/hr',
  },
  {
    icon: Server,
    title: 'Backend Development',
    description: 'Scalable APIs, microservices, and database architecture with Node.js & Python.',
    price: 'From $60/hr',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'User-centered design with Figma — wireframes, prototypes, and design systems.',
    price: 'From $40/hr',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Speed audits, code splitting, caching strategies, and Core Web Vitals optimization.',
    price: 'From $45/hr',
  },
  {
    icon: Shield,
    title: 'DevOps & Deployment',
    description: 'CI/CD pipelines, Docker, AWS/GCP deployment, and monitoring setup.',
    price: 'From $55/hr',
  },
  {
    icon: Headphones,
    title: 'Consulting & Support',
    description: 'Technical consulting, code reviews, and ongoing maintenance for your projects.',
    price: 'From $70/hr',
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="section-padding relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-2 tracking-widest uppercase">Freelancing</p>
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            My <span className="text-gradient">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Available for freelance projects and long-term collaborations. Let's build something amazing together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, description, price }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="glass-card p-6 group hover:border-glow transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Icon className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-bold font-display text-foreground mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{description}</p>
              <p className="text-sm font-mono text-primary">{price}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
