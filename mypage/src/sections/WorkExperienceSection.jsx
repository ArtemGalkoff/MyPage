import React from 'react';
import { workExperienceData } from '../data/Experience';

const WorkExperienceSection = ({ trigger }) => {
  return (
    <div
      className={`transition-all duration-1000 ease-in-out delay-500 transform bg-gradient-to-br from-zinc-900 to-zinc-800 text-white p-6 rounded-xl shadow-xl w-[400px] ${
        trigger ? 'translate-x-0 opacity-100' : 'translate-x-96 opacity-0'
      }`}
    >
      <h2 className="text-2xl font-bold mb-4 anton-regular text-silver">Work Experience</h2>
      {workExperienceData.map((work, idx) => (
        <div key={idx} className="mb-4 border-b border-gray-700 pb-2">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">{work.company}</h3>
            <span className="text-sm text-gray-400">{work.years}</span>
          </div>
          <p className="text-sm text-gray-300">{work.position}</p>
          <p className="text-xs text-gray-500 mt-1">{work.location}</p>
          <p className="text-xs text-gray-400 mt-1">{work.description}</p>
        </div>
      ))}
    </div>
  );
};

export default WorkExperienceSection;