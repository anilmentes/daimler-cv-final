import React from 'react';
import { PROJECTS, LABELS } from '../constants';

export const ProjectsSection: React.FC = () => {
  return (
    <div className="space-y-6 animate-fadeIn pb-20">
      <div className="flex items-center justify-between px-2">
        <h2 className="text-2xl font-bold text-slate-900">{LABELS.projects}</h2>
        <span className="text-sm text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
          {PROJECTS.length} Projekte
        </span>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {PROJECTS.map((project) => (
          <a 
            key={project.id} 
            href={project.projectUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200 flex flex-col hover:shadow-md transition-shadow duration-300"
          >
            <div className="h-48 overflow-hidden relative">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <p className="text-slate-600 text-sm mb-4 leading-relaxed flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.technologies.map((tech) => (
                  <span key={tech} className="text-xs font-semibold px-2 py-1 bg-blue-50 text-blue-800 rounded-md border border-blue-100">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
