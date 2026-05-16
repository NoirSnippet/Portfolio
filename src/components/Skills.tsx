import { motion } from 'framer-motion';
import { config } from '../data/config';
import { Cpu } from 'lucide-react';

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#1e293b]/30 border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
          <Cpu className="text-neonPurple" size={32} />
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter">
            Core.<span className="text-neonPurple">Capabilities</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {config.skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="glass p-4 rounded-sm border-l-2 border-l-neonBlue hover:border-l-neonPurple transition-colors group cursor-default"
            >
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-neonBlue group-hover:bg-neonPurple group-hover:box-glow-purple transition-colors"></div>
                <span className="font-mono text-sm tracking-wider text-text/90 group-hover:text-white transition-colors">
                  {skill}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
