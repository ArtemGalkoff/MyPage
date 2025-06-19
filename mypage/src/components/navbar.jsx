import React, { useState } from "react";
import Button from "./Button";
import FloatingContactForm from "../sections/FloatingContactForm";

const Navbar = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <nav className="w-full border-b border-white/10 text-white">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6 py-4">
        <span className="text-3xl font-semibold Libre Caslon Display tracking-wide text-[#c0c0c0] drop-shadow-[0_0_4px_#c0c0c0] hover:drop-shadow-[0_0_10px_#2978b5] transition">
          <span className="text-blue-600">A</span>rtem <span className="text-blue-600">G</span>alkov
        </span>

        <div className="flex gap-6 items-center">
          <Button
            onClick={() => setShowForm(true)}
            className="bg-transparent border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
          >
            Mail to
          </Button>

          <Button
            href="/Galkov_A_CV.pdf" target="_blank" rel="noopener noreferrer"
            download
            className="bg-transparent border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
          >
            Download CV
          </Button>
        </div>
      </div>

      {showForm && <FloatingContactForm onClose={() => setShowForm(false)} />}
    </nav>
  );
};

export default Navbar;