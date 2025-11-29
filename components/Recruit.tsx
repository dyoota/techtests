import React, { useState } from 'react';
import { ChevronRight, Briefcase, GraduationCap, MapPin, ExternalLink } from 'lucide-react';
import { JOB_POSTS } from '../constants';

export const Recruit: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'new_grad' | 'mid_career'>('all');

  const filteredJobs = JOB_POSTS.filter(job => filter === 'all' || job.category === filter);

  return (
    <section id="recruit" className="py-24 bg-slate-50 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold tracking-widest text-sm uppercase">Join Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
            採用情報
          </h2>
          <p className="mt-4 text-slate-600">
            あなたの「挑戦」をお待ちしています。
          </p>
        </div>

        {/* Filter */}
        <div className="flex justify-center gap-2 mb-12">
          {[
            { id: 'all', label: 'すべて' },
            { id: 'new_grad', label: '新卒採用' },
            { id: 'mid_career', label: 'キャリア採用' },
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => setFilter(btn.id as any)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all border ${
                filter === btn.id 
                ? 'bg-slate-900 text-white border-slate-900 shadow-lg' 
                : 'bg-white text-slate-500 border-slate-200 hover:border-slate-400 hover:text-slate-800'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Job Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-24 max-w-5xl mx-auto">
          {filteredJobs.map((job) => (
            <div key={job.id} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-bold tracking-wider ${
                  job.category === 'new_grad' 
                  ? 'bg-blue-50 text-blue-700' 
                  : 'bg-emerald-50 text-emerald-700'
                }`}>
                  {job.category === 'new_grad' ? 'NEW GRAD' : 'CAREER'}
                </span>
                <span className="text-slate-400 group-hover:text-blue-600 transition-colors">
                  <ExternalLink className="w-5 h-5" />
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                {job.title}
              </h3>
              
              <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
                <MapPin className="w-4 h-4" />
                {job.location}
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {job.tags?.map((tag, i) => (
                  <span key={i} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">#{tag}</span>
                ))}
              </div>
              
              <p className="text-slate-600 mb-8 flex-grow leading-relaxed">
                {job.description}
              </p>
              
              <button className="w-full py-4 bg-slate-50 group-hover:bg-blue-600 text-slate-900 group-hover:text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2">
                募集要項を見る <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Entry CTA Blocks */}
        <div id="entry" className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* New Grad CTA */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-10 text-white text-center relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300 shadow-xl">
             <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl transition-transform group-hover:scale-150 duration-700" />
             <div className="relative z-10">
               <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white backdrop-blur-sm">
                 <GraduationCap className="w-8 h-8" />
               </div>
               <h3 className="text-2xl font-bold mb-2">新卒採用エントリー</h3>
               <p className="text-blue-100 mb-8 text-sm">
                 マイナビ・リクナビよりエントリーを受け付けています。<br/>
                 まずはインターンシップ・会社説明会へ。
               </p>
               <a href="#new-grad" className="inline-block w-full bg-white text-blue-900 py-4 rounded-xl font-bold hover:bg-blue-50 transition shadow-lg">
                 エントリーする
               </a>
             </div>
          </div>

          {/* Mid Career CTA */}
          <div className="bg-white border border-slate-200 rounded-3xl p-10 text-slate-900 text-center relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300 shadow-xl">
             <div className="absolute top-0 right-0 w-32 h-32 bg-slate-100 rounded-full -mr-16 -mt-16 blur-2xl transition-transform group-hover:scale-150 duration-700" />
             <div className="relative z-10">
               <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-slate-700">
                 <Briefcase className="w-8 h-8" />
               </div>
               <h3 className="text-2xl font-bold mb-2">キャリア採用エントリー</h3>
               <p className="text-slate-500 mb-8 text-sm">
                 あなたの経験・スキルを活かせるフィールドがあります。<br/>
                 カジュアル面談も実施中です。
               </p>
               <a href="#mid-career" className="inline-block w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-slate-800 transition shadow-lg">
                 募集一覧を見る
               </a>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};