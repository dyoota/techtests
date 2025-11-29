import React from 'react';
import { BUSINESS_DOMAINS } from '../constants';

export const Mission: React.FC = () => {
  return (
    <section id="business" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <span className="text-blue-600 font-bold tracking-widest text-sm uppercase">Our Business</span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-3 leading-tight">
              社会を支える、<br />
              4つのコア・フィールド。
            </h2>
          </div>
          <p className="md:w-1/3 text-slate-600 mt-6 md:mt-0 leading-relaxed">
            エクシオテックは、通信・土木・ICT・環境の4つの領域で、
            強固なインフラを構築するエンジニアリング企業です。
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-auto md:h-[600px]">
          {BUSINESS_DOMAINS.map((domain, index) => (
            <div 
              key={index} 
              className={`group relative overflow-hidden rounded-3xl ${index === 0 || index === 3 ? 'md:col-span-2' : 'md:col-span-1'} h-80 md:h-full`}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src={domain.image} 
                  alt={domain.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 ${domain.color} opacity-80 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-70`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-end p-8 text-white">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-xs font-bold tracking-wider uppercase opacity-80 mb-2 block">{domain.title}</span>
                  <h3 className="text-2xl font-bold mb-3">{domain.subtitle}</h3>
                  <p className="text-sm md:text-base text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 max-w-sm">
                    {domain.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};