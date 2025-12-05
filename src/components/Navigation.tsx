import React from 'react';
import { Section } from '../types';
import { LABELS } from '../constants';

interface NavigationProps {
  currentSection: Section;
  setSection: (section: Section) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentSection, setSection }) => {
  const t = LABELS.nav;
  
  const navItems = [
    { id: Section.HOME, label: t.home, icon: '👤' },
    { id: Section.PROJECTS, label: t.projects, icon: '🚀' },
    { id: Section.VISION, label: t.vision, icon: '🚌' },
    { id: Section.CHAT, label: t.chat, icon: '🤖' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] pb-safe z-50">
      <div className="flex justify-around items-center h-16 max-w-2xl mx-auto">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setSection(item.id)}
            className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition-all duration-200 ${
              currentSection === item.id
                ? 'text-blue-900'
                : 'text-slate-400 hover:text-slate-600'
            }`}
          >
            <span className={`text-xl transition-transform duration-200 ${currentSection === item.id ? 'scale-110' : ''}`}>
                {item.icon}
            </span>
            <span className={`text-[10px] font-medium ${currentSection === item.id ? 'font-bold' : ''}`}>
                {item.label}
            </span>
            {currentSection === item.id && (
                <div className="w-1 h-1 bg-blue-900 rounded-full absolute bottom-2"></div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};
