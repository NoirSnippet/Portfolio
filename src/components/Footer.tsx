import { config } from '../data/config';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 relative overflow-hidden bg-base">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-neonBlue animate-pulse"></div>
          <span className="text-xl font-bold tracking-tighter text-white">
            NOIR<span className="text-neonPurple">.</span>SNIPPET
          </span>
        </div>
        
        <p className="text-text/60 text-sm font-mono uppercase tracking-wider">
          © {new Date().getFullYear()} All systems operational.
        </p>

        <div className="flex gap-4">
          {config.socials.map((social) => (
            <a 
              key={social.name} 
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className="text-text/60 hover:text-neonPurple transition-colors"
            >
              <social.icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
