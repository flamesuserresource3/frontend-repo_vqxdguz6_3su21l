import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Rocket, Shield, QrCode } from 'lucide-react';

const Hero = ({ onGenerateClick, onAdminClick }) => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-black via-[#020617] to-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/zks9uYILDPSX-UX6/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Glow overlays (non-interactive) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 text-center sm:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 backdrop-blur-md ring-1 ring-white/10"
        >
          <Shield size={16} className="text-cyan-400" />
          <span className="text-xs uppercase tracking-widest text-cyan-200/80">
            Flames.blue • Secure Digital Access
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="bg-gradient-to-b from-white via-cyan-100 to-cyan-400/80 bg-clip-text text-4xl font-extrabold text-transparent sm:text-6xl lg:text-7xl"
        >
          🎟️ Your Digital Pass to the Future.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mx-auto mt-4 max-w-2xl text-cyan-100/80"
        >
          Generate event tickets instantly — powered by Flames.blue. Neon aesthetics, glassmorphism, and buttery-smooth motion.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={onGenerateClick}
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgba(34,211,238,0.6)] transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            <QrCode className="transition group-hover:rotate-6" size={18} />
            Generate Ticket
          </button>
          <button
            onClick={onAdminClick}
            className="inline-flex items-center gap-2 rounded-xl bg-white/5 px-6 py-3 text-sm font-semibold text-cyan-100 backdrop-blur-md ring-1 ring-white/10 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            <Rocket size={18} /> Admin Login
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
