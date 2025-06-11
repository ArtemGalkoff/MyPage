import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative bg-zinc-900 text-white py-4">
      <div
        className="absolute top-0 left-0 w-full h-[2px] pointer-events-none"
        style={{
          background:
            'linear-gradient(to right, transparent, rgba(255,255,255,0.2) 30%, rgba(255,255,255,0.4), rgba(255,255,255,0.2) 70%, transparent)',
        }}
      />

      <div className="container mx-auto flex flex-col items-center">
        <nav className="flex items-center space-x-3 text-sm">
          <a
            href="https://www.linkedin.com/in/artemgalkov/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-cyan-400 transition-colors"
          >
            <FaLinkedin className="w-5 h-5 mr-1" />
            LinkedIn
          </a>
          <span className="text-gray-500">|</span>
          <a
            href="https://github.com/ArtemGalkoff"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-cyan-400 transition-colors"
          >
            <FaGithub className="w-5 h-5 mr-1" />
            GitHub
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;