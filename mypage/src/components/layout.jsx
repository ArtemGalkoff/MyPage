import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 px-4">
      <div
        className="bg-zinc-900 text-white p-4 rounded-xl shadow-xl mx-auto relative"
        style={{
          width: "85vw",
          maxWidth: "1200px",
          minHeight: "auto",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Layout;