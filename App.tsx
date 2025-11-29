import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Mission } from './components/Mission';
import { About } from './components/About';
import { Recruit } from './components/Recruit';
import { Chatbot } from './components/Chatbot';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Navbar />
      <main>
        <Hero />
        <Mission />
        <About />
        <Recruit />
      </main>
      <Chatbot />
      <Footer />
    </div>
  );
}

export default App;