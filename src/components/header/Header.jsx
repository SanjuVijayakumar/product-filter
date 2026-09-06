import React from "react";

const Header = () => {
  return (
    <header className="bg-slate-950 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        
        {/* App Name */}
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            Shop<span className="text-cyan-400">Sort</span>
          </h1>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-8 text-sm font-medium">
          <a
            href="#products"
            className="text-slate-300 transition hover:text-cyan-400"
          >
            Products
          </a>

          <a
            href="#categories"
            className="text-slate-300 transition hover:text-cyan-400"
          >
            Categories
          </a>

          <a
            href="#about"
            className="text-slate-300 transition hover:text-cyan-400"
          >
            About
          </a>
        </nav>

        {/* Product Count / Badge */}
        <div className="hidden rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-300 sm:block">
          <span className="text-cyan-400">●</span> Browse Products
        </div>
      </div>
    </header>
  );
};

export default Header;