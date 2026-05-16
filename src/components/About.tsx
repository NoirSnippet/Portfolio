import { motion } from 'framer-motion';
import { config } from '../data/config';
import { Terminal, MapPin } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 uppercase tracking-tighter">
            System.<span className="text-neonBlue">Identity</span>
          </h2>
          <div className="w-24 h-1 bg-neonPurple box-glow-purple"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-sm relative group"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neonBlue to-neonPurple opacity-50 group-hover:opacity-100 transition-opacity" />
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-base border border-white/10 rounded-sm">
                <Terminal className="text-neonBlue" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white uppercase tracking-wider">Initialize User</h3>
                <p className="text-sm text-neonPurple font-mono">Status: Online</p>
              </div>
            </div>
            <p className="text-text leading-relaxed text-lg font-light">
              {config.personal.bio}
            </p>
            <div className="mt-8 flex items-center gap-2 text-text/80 font-mono text-sm border-t border-white/5 pt-6">
              <MapPin size={16} className="text-neonBlue" />
              <span>Location: {config.personal.location}</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[400px] border border-white/10 p-2 rounded-sm"
          >
            {/* Abstract visual representation of user */}
            <div className="w-full h-full bg-[#1e293b]/50 overflow-hidden relative">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-base via-transparent to-transparent"></div>
              
              {/* Cyber elements */}
              <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-neonBlue opacity-50"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-neonPurple opacity-50"></div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 border border-neonBlue rounded-full flex items-center justify-center relative animate-[spin_10s_linear_infinite]">
                  <div className="w-24 h-24 border border-neonPurple rounded-full border-dashed"></div>
                </div>
                <div className="absolute font-bold text-2xl tracking-widest text-white z-10 text-glow-blue">
                  {config.personal.name.split(' ')[0].toUpperCase()}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
