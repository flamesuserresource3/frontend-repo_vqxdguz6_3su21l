import React, { useRef, useState } from 'react';
import Hero from './components/Hero';
import RegistrationCard from './components/RegistrationCard';
import TicketPreview from './components/TicketPreview';
import Footer from './components/Footer';

function App() {
  const regRef = useRef(null);
  const [ticketData, setTicketData] = useState(null);

  const scrollToRegistration = () => {
    regRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const showAdminInfo = () => {
    alert('Admin dashboard, QR live verification, and Excel export will appear here once Firebase Auth & Firestore are connected.');
  };

  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Hero onGenerateClick={scrollToRegistration} onAdminClick={showAdminInfo} />

      <div ref={regRef}>
        <RegistrationCard onTicketReady={setTicketData} />
      </div>

      <TicketPreview data={ticketData} />

      <Footer />
    </div>
  );
}

export default App;
