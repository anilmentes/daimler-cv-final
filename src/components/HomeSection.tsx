
import React from 'react';
import { ABOUT_ME, CANDIDATE_NAME, CANDIDATE_TITLE, EXPERIENCES, EDUCATION, LABELS, PROFILE_IMAGE_URL } from '../constants';

export const HomeSection: React.FC = () => {
  return (
    <div className="space-y-8 animate-fadeIn pb-20">
      {/* Header Card */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8 rounded-3xl shadow-xl">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="relative">
            <img 
              src={PROFILE_IMAGE_URL} 
              alt={CANDIDATE_NAME} 
              className="w-32 h-32 rounded-full object-cover shadow-2xl border-4 border-white/20" 
            />
            <div className="absolute bottom-2 right-2 bg-blue-600 text-white p-1.5 rounded-full border-2 border-slate-800 shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">{CANDIDATE_NAME}</h1>
            <p className="text-blue-200 font-medium mt-1">{CANDIDATE_TITLE}</p>
          </div>
          <div className="bg-white/10 px-4 py-2 rounded-lg text-sm backdrop-blur-sm border border-white/10">
            Daimler Buses {LABELS.role}
          </div>
        </div>
      </div>

      {/* About */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <h2 className="text-lg font-bold text-slate-900 mb-3 border-b pb-2">{LABELS.about}</h2>
        <p className="text-slate-600 leading-relaxed text-sm">
          {ABOUT_ME}
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-slate-900 px-2">{LABELS.experiences}</h2>
        {EXPERIENCES.map((exp) => (
          <div key={exp.id} className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden group hover:border-blue-200 transition-colors">
            <div className="absolute top-0 left-0 w-1 h-full bg-blue-900 group-hover:bg-blue-600 transition-colors"></div>
            <div className="ml-2">
              <h3 className="font-bold text-slate-800">{exp.role}</h3>
              <p className="text-sm text-blue-900 font-medium">{exp.company}</p>
              <p className="text-xs text-slate-400 mt-1 mb-2">{exp.period}</p>
              <p className="text-sm text-slate-600">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Education Section */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-slate-900 px-2">{LABELS.education}</h2>
        {EDUCATION.map((edu) => (
          <div key={edu.id} className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden group hover:border-green-200 transition-colors">
            {/* Green accent for Education to differentiate slightly but keep style */}
            <div className="absolute top-0 left-0 w-1 h-full bg-slate-700 group-hover:bg-slate-500 transition-colors"></div>
            <div className="ml-2">
              <h3 className="font-bold text-slate-800">{edu.degree}</h3>
              <p className="text-sm text-slate-900 font-medium">{edu.institution}</p>
              <p className="text-xs text-slate-400 mt-1 mb-2">{edu.period}</p>
              <p className="text-sm text-slate-600">{edu.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};