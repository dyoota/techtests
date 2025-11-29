import React from 'react';
import { COMPANY_NAME, NAV_ITEMS } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-white mb-2">{COMPANY_NAME}</h2>
            <p className="text-sm">〒108-0075 東京都港区港南...</p>
          </div>
          <div className="flex gap-6">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                className="text-sm font-medium hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <div className="flex gap-4 mb-4 md:mb-0">
             <a href="#" className="hover:text-white">プライバシーポリシー</a>
             <a href="#" className="hover:text-white">サイトマップ</a>
          </div>
          <p>&copy; {new Date().getFullYear()} EXEO TECH Co., Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};