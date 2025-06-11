import React from 'react';
import MetallicECG from '../components/Light';

const StaggeredPhotoText = () => {
  return (
    <section className="py-16 bg-zinc-900 text-white">
      <div className="max-w-7xl mx-auto flex justify-center gap-12 items-center px-4">
        <div className="w-1/3 animate-pulse">
          <MetallicECG />
        </div>
        <div className="w-2/3 flex flex-col md:flex-row items-center gap-1">
          <div className="w-[55%] text-left animate-slideInLeft">
            <h2 className="text-3xl font-semibold text-roboto  text-gray-300 mb-4">Hello,</h2>
            <p className="text-lg text-gray-300 leading-relaxed text-roboto">
              I am Full-stack developer, create modern and functional web applications.  
              Passionate about code architecture, user interfaces, and continuous growth.
            </p>
          </div>

          <div className="w-[45%] flex justify-center animate-slideInRight">
            <img
              src="/images/One.jpeg"
              alt="My photo"
              className="w-56 h-56 rounded-full object-cover shadow-xl border-2 border-gray-50"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StaggeredPhotoText;