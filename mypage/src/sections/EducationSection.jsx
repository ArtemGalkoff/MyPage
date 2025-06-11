import React from 'react';
import { educationData } from '../data/Education';

const EducationSection = ({ trigger }) => {
  return (
    <div
      className={`transition-all duration-1000 ease-in-out transform bg-gradient-to-br from-zinc-900 to-zinc-800 text-white p-6 rounded-xl shadow-xl w-[400px] ${
        trigger ? 'translate-x-0 opacity-100' : 'translate-x-96 opacity-0'
      }`}
    >
      <h2 className="text-2xl font-bold mb-4 anton-regular text-silver">Education</h2>
      {educationData.map((edu, idx) => (
        <div key={idx} className="mb-4 border-b border-gray-700 pb-2">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">{edu.university}</h3>
            <span className="text-sm text-gray-400">{edu.years}</span>
          </div>
          <p className="text-sm text-gray-300">{edu.degree}</p>
          <p className="text-xs text-gray-500 mt-1">{edu.location}</p>
        </div>
      ))}
    </div>
  );
};

export default EducationSection;