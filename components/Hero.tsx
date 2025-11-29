import React from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { TAGLINE } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section id="top" className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop" 
          alt="Infrastructure and Technology" 
          className="w-full h-full object-cover opacity-60 scale-105 animate-[pulse_10s_ease-in-out_infinite]"
        />
        {/* Modern Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/40 to-slate-900/90" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
        <div className="max-w-4xl space-y-8 animate-fade-in-up">
          <div className="flex items-center gap-3">
            <span className="h-px w-12 bg-blue-400"></span>
            <span className="text-blue-400 font-bold tracking-[0.2em] text-sm uppercase">Exeo Tech Recruiting</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] tracking-tight">
            その技術は、<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-blue-200">
              日本の動脈になる。
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed">
            5G、都市インフラ、再生可能エネルギー。<br className="hidden md:block" />
            私たちが作っているのは、単なる設備ではありません。<br />
            この国の未来を動かす「あたりまえ」を、あなたの手で創りませんか。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <a href="#recruit" className="group bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-blue-500/30 flex items-center justify-center gap-2">
              募集要項を見る
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#culture" className="group backdrop-blur-sm bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2">
              働く人を知る
              <span className="w-5 h-5 flex items-center justify-center bg-white text-blue-900 rounded-full text-xs opacity-0 group-hover:opacity-100 transition-opacity">↓</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 animate-bounce">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  );
};