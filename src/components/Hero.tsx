import { motion } from 'framer-motion';
import { config } from '../data/config';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-base/80 mix-blend-multiply z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-base/20 via-base/60 to-base z-10" />
        <img
          src="/hero-bg.png"
          alt="Abstract Tech Background"
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-neonBlue tracking-widest uppercase text-sm mb-4 font-semibold">
            Welcome to the Grid
          </h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tighter">
            I'M <span className="text-glow-purple text-transparent bg-clip-text bg-gradient-to-r from-neonPurple to-neonBlue">{config.personal.name.toUpperCase()}</span>
          </h1>
          <p className="text-lg md:text-xl text-text max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            {config.personal.role}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="#projects"
              className="px-8 py-4 bg-neonPurple text-white font-bold tracking-widest uppercase rounded-sm hover:bg-white hover:text-neonPurple transition-all box-glow-purple"
            >
              View Projects
            </a>
            <div className="flex gap-6">
              {config.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full glass hover:border-neonBlue hover:text-neonBlue transition-all"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="hidden sm:block absolute bottom-4 sm:bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <a href="#about" className="text-text hover:text-neonBlue transition-colors">
          <ArrowDown size={32} />
        </a>
      </motion.div>
    </section>
  );
}
