import React from "react";

const Footer = () => {
  return (
    <footer
      className="
      bg-gradient-to-r from-slate-50 via-emerald-50/20 to-slate-50
      dark:bg-none dark:bg-gray-900
      text-slate-600 dark:text-gray-300
      text-center py-6
      border-t border-slate-200/60 dark:border-gray-800
      transition-colors duration-300
    "
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Decorative Divider */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-emerald-300/60 dark:to-emerald-700/40"></div>
          <i className="fa-solid fa-mosque text-emerald-600/80 dark:text-emerald-500 text-sm"></i>
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-emerald-300/60 dark:to-emerald-700/40"></div>
        </div>

        {/* Main Content */}
        <p className="font-cairo text-sm md:text-base leading-relaxed">
          Made with
          <i className="fa-solid fa-heart text-rose-500 mx-0.5 animate-pulse"></i>{" "}
          by{" "}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1
              text-emerald-700 dark:text-emerald-400
              font-semibold
              hover:text-emerald-900 dark:hover:text-emerald-300
              hover:underline decoration-emerald-300/60 dark:decoration-emerald-600/40
              underline-offset-4 transition-all duration-200"
          >
            Mu1426
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
