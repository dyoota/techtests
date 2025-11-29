import React from 'react';
import { Quote } from 'lucide-react';
import { BENEFITS, EMPLOYEE_VOICES } from '../constants';

export const About: React.FC = () => {
  return (
    <section id="culture" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-blue-600 font-bold tracking-widest text-sm uppercase">Our Culture</span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-3 mb-6">
            人は、環境で輝く。
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            エクシオテックには、未経験からプロフェッショナルへ成長できる土壌があります。
            互いに高め合い、誇りを持って働ける環境がここにあります。
          </p>
        </div>

        {/* Employee Voices */}
        <div className="grid md:grid-cols-2 gap-12 mb-32">
          {EMPLOYEE_VOICES.map((voice) => (
            <div key={voice.id} className="relative group">
              <div className="relative h-80 overflow-hidden rounded-2xl mb-6 shadow-xl">
                <img 
                  src={voice.image} 
                  alt={voice.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6">
                   <div className="text-white">
                     <p className="text-sm font-bold opacity-80">{voice.role}</p>
                     <p className="text-2xl font-bold">{voice.name}</p>
                   </div>
                </div>
              </div>
              <div className="relative bg-slate-50 p-8 rounded-2xl -mt-12 ml-6 mr-6 shadow-lg border border-slate-100">
                <Quote className="absolute -top-4 -left-4 w-10 h-10 text-blue-500 bg-white rounded-full p-2 shadow-sm" />
                <h3 className="text-lg font-bold text-slate-900 mb-3 leading-snug">
                  {voice.quote}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {voice.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits / Data */}
        <div className="bg-slate-900 rounded-3xl p-8 md:p-16 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 -skew-x-12 transform origin-bottom" />
            
            <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/3">
                 <h3 className="text-3xl font-bold mb-4">数字で見る<br/>働きやすさ</h3>
                 <p className="text-slate-300 mb-8">
                   社員が長く安心して働けるよう、<br/>
                   業界トップクラスの環境を整備しています。
                 </p>
                 <a href="#recruit" className="inline-block border border-white/30 hover:bg-white hover:text-slate-900 text-white px-6 py-3 rounded-full transition-colors font-bold text-sm">
                   福利厚生の詳細を見る
                 </a>
              </div>
              
              <div className="md:w-2/3 grid sm:grid-cols-2 gap-6 w-full">
                {BENEFITS.map((benefit, idx) => (
                  <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors">
                    <div className="text-blue-400 mb-3">
                      {benefit.icon}
                    </div>
                    <h4 className="text-xl font-bold mb-2">{benefit.title}</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
        </div>

      </div>
    </section>
  );
};