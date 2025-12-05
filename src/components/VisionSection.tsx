import React from 'react';
import { DAIMLER_VISION } from '../constants';

export const VisionSection: React.FC = () => {
  return (
    <div className="space-y-6 animate-fadeIn pb-20">
      <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-blue-500 rounded-full opacity-20 blur-3xl"></div>
        <h2 className="text-2xl font-bold mb-2 relative z-10">Meine Vision für Daimler Buses</h2>
        <p className="text-slate-400 text-sm relative z-10">Warum ich? Warum jetzt?</p>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <div className="prose prose-sm prose-slate max-w-none">
          <p className="leading-relaxed text-slate-700 whitespace-pre-line">
            {DAIMLER_VISION}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 text-center">
          <span className="text-2xl block mb-2">⚡</span>
          <h3 className="font-bold text-blue-900 text-sm">Innovation</h3>
          <p className="text-xs text-blue-700 mt-1">Dealer Management System</p>
        </div>
        <div className="bg-green-50 p-4 rounded-xl border border-green-100 text-center">
          <span className="text-2xl block mb-2">🎓</span>
          <h3 className="font-bold text-green-900 text-sm">Akademie</h3>
          <p className="text-xs text-green-700 mt-1">Masterarbeit 2026</p>
        </div>
      </div>
      
      <div className="bg-yellow-50 p-6 rounded-2xl border border-yellow-100">
        <h3 className="font-bold text-yellow-900 mb-2 flex items-center">
          <span className="mr-2">💡</span> Ein konkreter Gedanke
        </h3>
        <p className="text-sm text-yellow-800">
          Im Bereich After-Sales-Services sehe ich großes Potenzial für den Einsatz von GenAI im Dealer Management System.
        </p>
      </div>
    </div>
  );
};
