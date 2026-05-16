import { motion } from 'framer-motion';
import { config } from '../data/config';
import { ExternalLink, Code } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col items-end"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 uppercase tracking-tighter text-right">
            Active.<span className="text-neonBlue">Modules</span>
          </h2>
          <div className="w-24 h-1 bg-neonBlue box-glow-blue"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {config.projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card overflow-hidden group flex flex-col h-full"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-neonPurple/20 group-hover:bg-transparent transition-colors z-10 mix-blend-overlay"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 filter grayscale group-hover:grayscale-0"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wider">{project.title}</h3>
                <p className="text-text/80 text-sm mb-6 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map(t => (
                    <span key={t} className="px-2 py-1 bg-base border border-white/10 text-xs font-mono text-neonBlue rounded-sm">
                      {t}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                  <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider hover:text-neonPurple transition-colors">
                    <Code size={18} /> Code
                  </a>
                  <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider hover:text-neonBlue transition-colors">
                    <ExternalLink size={18} /> Live View
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
