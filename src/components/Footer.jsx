import React from 'react';
import { Github, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative z-10 mt-16 border-t border-white/10 bg-black/40 py-10 text-cyan-100">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="text-sm text-cyan-200/80">Flames.blue — Powering the Future of Event Access.</p>
          <p className="text-xs text-cyan-200/60">© {new Date().getFullYear()} Flames.blue. All rights reserved.</p>
        </div>
        <div className="flex items-center gap-3">
          <a href="#" className="rounded-lg bg-white/5 p-2 ring-1 ring-white/10 transition hover:bg-white/10" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a href="#" className="rounded-lg bg-white/5 p-2 ring-1 ring-white/10 transition hover:bg-white/10" aria-label="Twitter">
            <Twitter size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
