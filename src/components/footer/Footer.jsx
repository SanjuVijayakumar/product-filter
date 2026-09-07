import React from "react";

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

          <div>
            <h2 className="text-xl font-bold text-white">
              Shop<span className="text-cyan-500">Sort</span>
            </h2>

            <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
              Discover, filter, and sort products with ease.
            </p>
          </div>

          <div className="flex gap-6 text-sm">
            <a
              href="#products"
              className="text-slate-500 transition hover:text-cyan-500"
            >
              Products
            </a>

            <a
              href="#categories"
              className="text-slate-500 transition hover:text-cyan-500"
            >
              Categories
            </a>

            <a
              href="#about"
              className="text-slate-500 transition hover:text-cyan-500"
            >
              About
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-200 pt-6 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} ShopSort. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;