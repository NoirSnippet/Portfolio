import { motion } from 'framer-motion';
import { config } from '../data/config';
import { Camera } from 'lucide-react';

export default function Photography() {
  return (
    <section id="photography" className="py-24 bg-[#1e293b]/30 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
          <Camera className="text-neonPurple" size={32} />
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter">
            Visual.<span className="text-neonPurple">Capture</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {config.photography.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group overflow-hidden rounded-sm border border-white/5 h-72 md:h-80"
            >
              <div className="absolute inset-0 bg-base/40 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
              <img 
                src={img} 
                alt={`Photography ${index + 1}`} 
                className={`w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ${
                  index === 3 ? 'object-bottom' : 'object-center'
                }`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
