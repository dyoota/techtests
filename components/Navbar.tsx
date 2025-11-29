import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS, COMPANY_NAME } from '../constants';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className={`font-bold text-xl md:text-2xl flex items-center gap-2 ${scrolled ? 'text-blue-900' : 'text-white'}`}>
            <span className="tracking-wider">{COMPANY_NAME}</span>
            <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded ml-2">RECRUIT</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className={`text-sm font-medium hover:text-blue-500 transition-colors ${
                scrolled ? 'text-slate-700' : 'text-white/90 hover:text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#entry" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-bold transition-transform hover:scale-105 shadow-lg"
          >
            ENTRY
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className={scrolled ? 'text-slate-800' : 'text-white'} />
          ) : (
            <Menu className={scrolled ? 'text-slate-800' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-xl border-t md:hidden flex flex-col p-4 animate-fade-in">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="py-3 text-slate-700 border-b border-gray-100 font-medium"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#entry" 
            className="mt-4 bg-blue-600 text-center text-white py-3 rounded-md font-bold"
            onClick={() => setIsOpen(false)}
          >
            ENTRY
          </a>
        </div>
      )}
    </header>
  );
};