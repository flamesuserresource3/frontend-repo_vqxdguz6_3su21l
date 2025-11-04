import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail } from 'lucide-react';

const TicketPreview = ({ data }) => {
  const sample = {
    name: 'Saahil Zameer',
    event: 'TechX 2025',
    ticketID: 'FB2025-0456',
    date: '15th Feb 2025',
    venue: 'CMRIT Hyderabad',
  };

  const d = data || sample;

  return (
    <section className="relative z-10 mx-auto mt-10 w-full max-w-5xl px-6">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="rounded-2xl bg-white/5 p-6 backdrop-blur-xl ring-1 ring-white/10 sm:p-10"
      >
        <div className="grid items-center gap-8 md:grid-cols-[1.5fr_1fr]">
          {/* Ticket left */}
          <div className="relative rounded-2xl bg-gradient-to-br from-[#0b1224] to-[#0a0f1f] p-6 ring-1 ring-cyan-400/20">
            <div className="absolute right-32 top-0 h-full w-px bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent" />
            <div className="absolute inset-0 rounded-2xl pointer-events-none">
              <div className="absolute -top-10 -left-10 h-32 w-32 rounded-full bg-cyan-500/10 blur-2xl" />
              <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-indigo-500/10 blur-2xl" />
            </div>

            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white sm:text-xl">🔥 Flames.blue Digital Event Pass</h3>
              <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-200 ring-1 ring-cyan-400/20">
                Verified-ready
              </span>
            </div>

            <div className="grid gap-2 text-sm text-cyan-100/90">
              <div className="flex justify-between"><span>Name:</span><span className="font-medium">{d.name}</span></div>
              <div className="flex justify-between"><span>Event:</span><span className="font-medium">{d.event}</span></div>
              <div className="flex justify-between"><span>Ticket ID:</span><span className="font-mono font-semibold">{d.ticketID}</span></div>
              <div className="flex justify-between"><span>Date:</span><span className="font-medium">{d.date || '—'}</span></div>
              <div className="flex justify-between"><span>Venue:</span><span className="font-medium">{d.venue || '—'}</span></div>
            </div>

            {/* QR placeholder (styled) */}
            <div className="mt-6 flex items-center justify-center">
              <div className="relative grid h-40 w-40 place-items-center rounded-xl bg-white p-3 shadow-inner">
                <div className="h-full w-full rounded-lg bg-[radial-gradient(circle,rgba(6,182,212,0.15)_0%,rgba(2,6,23,0.6)_100%)] ring-1 ring-cyan-500/30" />
                <div className="absolute inset-2 grid grid-cols-5 gap-1 opacity-70">
                  {Array.from({ length: 25 }).map((_, i) => (
                    <div key={i} className={`${(i * 7) % 3 === 0 ? 'bg-black' : 'bg-gray-300'} h-full w-full`} />
                  ))}
                </div>
              </div>
            </div>

            <p className="mt-4 text-center text-xs text-cyan-200/80">
              Scan. Verify. Celebrate Innovation.
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-4">
            <button className="w-full rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 px-6 py-3 font-semibold text-white shadow-[0_10px_30px_-10px_rgba(34,211,238,0.6)] transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-cyan-400 inline-flex items-center justify-center gap-2">
              <Download size={18} /> Download Ticket (PDF)
            </button>
            <button className="w-full rounded-xl bg-white/5 px-6 py-3 font-semibold text-cyan-100 backdrop-blur-md ring-1 ring-white/10 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400 inline-flex items-center justify-center gap-2">
              <Mail size={18} /> Email My Ticket
            </button>

            <div className="mt-2 rounded-xl bg-white/5 p-4 text-sm text-cyan-100/80 backdrop-blur-md ring-1 ring-white/10">
              For full functionality (Firestore save, QR, PDF, Email, Excel export, live verification), connect Firebase and enable the admin dashboard.
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default TicketPreview;
