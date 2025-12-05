import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { HomeSection } from './components/HomeSection';
import { ProjectsSection } from './components/ProjectsSection';
import { VisionSection } from './components/VisionSection';
import { ChatSection } from './components/ChatSection';
import { Section } from './types';

function App() {
  const [currentSection, setCurrentSection] = useState<Section>(Section.HOME);

  const renderSection = () => {
    switch (currentSection) {
      case Section.HOME:
        return <HomeSection />;
      case Section.PROJECTS:
        return <ProjectsSection />;
      case Section.VISION:
        return <VisionSection />;
      case Section.CHAT:
        return <ChatSection />;
      default:
        return <HomeSection />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-200 selection:text-blue-900">
      <div className="max-w-2xl mx-auto min-h-screen relative flex flex-col">
        {/* Top Bar */}
        <header className="px-6 py-6 flex justify-between items-center bg-white/80 backdrop-blur-md sticky top-0 z-40 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-700 to-blue-900 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-900/20">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div className="font-bold text-xl tracking-tight text-slate-900 leading-tight">
              Mein digitaler <br /> <span className="text-blue-600">Lebenslauf</span>
            </div>
          </div>
          <div className="flex flex-col items-end gap-1">
            <div className="text-[10px] font-bold bg-blue-50 text-blue-900 px-2 py-0.5 rounded border border-blue-100 tracking-wide uppercase">
                DE
            </div>
            <div className="text-[10px] font-medium text-slate-400">
                März 2026
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 p-6 pb-24">
          {renderSection()}
        </main>

        {/* Navigation */}
        <Navigation 
            currentSection={currentSection} 
            setSection={setCurrentSection} 
        />
      </div>
    </div>
  );
}

export default App;