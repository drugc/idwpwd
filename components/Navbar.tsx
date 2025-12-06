import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-dark/80 border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="font-bold text-xl tracking-tight">
          Aiden<span className="text-primary">.</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#stack" className="hover:text-white transition-colors">Stack</a>
          <a href="#live" className="hover:text-white transition-colors flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Status
          </a>
        </div>
        <a 
          href="#contact" 
          className="bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full text-sm font-medium transition-all"
        >
          Contact Me
        </a>
      </div>
    </nav>
  );
};

export default Navbar;