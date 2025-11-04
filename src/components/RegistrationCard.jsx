import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { QrCode, User, Mail, Phone, GraduationCap, Calendar } from 'lucide-react';

const events = [
  'TechX 2025',
  'Prompt Techies Summit',
  'AI & Web3 Expo',
  'Hacknite 4.0',
];

const RegistrationCard = ({ onTicketReady }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    dept: '',
    event: events[0],
    phone: '',
  });

  const ticketId = useMemo(() => {
    const num = Math.floor(1000 + Math.random() * 9000);
    return `FB2025-${num}`;
  }, [form.email]);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { ...form, ticketID: ticketId, verified: false, timestamp: new Date().toISOString() };
    onTicketReady?.(payload);
  };

  return (
    <section className="relative z-10 -mt-24 flex w-full justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full max-w-4xl rounded-2xl bg-white/5 p-6 backdrop-blur-xl ring-1 ring-white/10 sm:p-8"
      >
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-white sm:text-2xl">Instant Registration</h2>
            <p className="text-sm text-cyan-100/80">Secure your spot and get a futuristic QR pass.</p>
          </div>
          <div className="hidden items-center gap-2 rounded-xl bg-cyan-500/10 px-3 py-2 text-cyan-200 ring-1 ring-cyan-400/20 sm:flex">
            <QrCode size={16} /> Real-time Ticket ID: <span className="font-mono font-semibold">{ticketId}</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
          <div className="col-span-2 grid gap-4 sm:col-span-1">
            <label className="text-sm text-cyan-100/80">Name</label>
            <div className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3 ring-1 ring-white/10 focus-within:ring-cyan-400/40">
              <User size={16} className="text-cyan-300" />
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Saahil Zameer"
                className="w-full bg-transparent text-white placeholder:text-cyan-200/50 focus:outline-none"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:col-span-1">
            <label className="text-sm text-cyan-100/80">Email</label>
            <div className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3 ring-1 ring-white/10 focus-within:ring-cyan-400/40">
              <Mail size={16} className="text-cyan-300" />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="you@college.edu"
                className="w-full bg-transparent text-white placeholder:text-cyan-200/50 focus:outline-none"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:col-span-1">
            <label className="text-sm text-cyan-100/80">Department / Year</label>
            <div className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3 ring-1 ring-white/10 focus-within:ring-cyan-400/40">
              <GraduationCap size={16} className="text-cyan-300" />
              <input
                name="dept"
                value={form.dept}
                onChange={handleChange}
                required
                placeholder="ECE • 3rd Year"
                className="w-full bg-transparent text-white placeholder:text-cyan-200/50 focus:outline-none"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:col-span-1">
            <label className="text-sm text-cyan-100/80">Event</label>
            <div className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3 ring-1 ring-white/10 focus-within:ring-cyan-400/40">
              <Calendar size={16} className="text-cyan-300" />
              <select
                name="event"
                value={form.event}
                onChange={handleChange}
                className="w-full bg-transparent text-white focus:outline-none"
              >
                {events.map((ev) => (
                  <option key={ev} value={ev} className="bg-[#0b1020] text-cyan-100">
                    {ev}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid gap-4 sm:col-span-1">
            <label className="text-sm text-cyan-100/80">Contact Number</label>
            <div className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3 ring-1 ring-white/10 focus-within:ring-cyan-400/40">
              <Phone size={16} className="text-cyan-300" />
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                placeholder="8008087702"
                className="w-full bg-transparent text-white placeholder:text-cyan-200/50 focus:outline-none"
              />
            </div>
          </div>

          <div className="sm:col-span-2 mt-2">
            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 px-6 py-3 font-semibold text-white shadow-[0_10px_30px_-10px_rgba(34,211,238,0.6)] transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              Generate Ticket
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
};

export default RegistrationCard;
