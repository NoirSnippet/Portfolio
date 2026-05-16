import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xkoydayo', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
        setTimeout(() => setStatus('idle'), 5000); // Reset to idle after 5 seconds
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-neonBlue/5 to-transparent z-0"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Mail className="mx-auto text-neonBlue mb-4" size={32} />
          <h2 className="text-3xl md:text-5xl font-bold mb-4 uppercase tracking-tighter">
            Establish.<span className="text-neonBlue">Connection</span>
          </h2>
          <p className="text-text/80 max-w-lg mx-auto">
            Ready to initiate a new sequence? Send a transmission and I'll respond as soon as the signal is received.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-8 md:p-12 rounded-sm border-t-2 border-t-neonBlue"
          onSubmit={handleSubmit}
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-xs font-mono uppercase tracking-widest text-text/80 mb-2">Identifier (Name)</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full bg-base/50 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-neonBlue transition-colors"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs font-mono uppercase tracking-widest text-text/80 mb-2">Comms Link (Email)</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full bg-base/50 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-neonPurple transition-colors"
                placeholder="abc@example.com"
              />
            </div>
          </div>
          <div className="mb-8">
            <label htmlFor="message" className="block text-xs font-mono uppercase tracking-widest text-text/80 mb-2">Payload (Message)</label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full bg-base/50 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-neonBlue transition-colors resize-none"
              placeholder="Your transmission here..."
            ></textarea>
          </div>

          <button 
            type="submit" 
            disabled={status === 'loading' || status === 'success'}
            className="w-full py-4 bg-transparent border border-neonBlue text-neonBlue font-bold uppercase tracking-widest hover:bg-neonBlue hover:text-base hover:box-glow-blue transition-all flex items-center justify-center gap-3 group rounded-sm disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'idle' && (
              <>
                Transmit Data
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </>
            )}
            {status === 'loading' && 'Transmitting...'}
            {status === 'success' && (
              <>
                Data Received <CheckCircle size={18} />
              </>
            )}
            {status === 'error' && (
              <>
                Transmission Failed <AlertCircle size={18} />
              </>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
