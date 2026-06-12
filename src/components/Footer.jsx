import React from "react";

const Footer = () => {
  return (
    <footer
      dir="rtl"
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
          أسألكم الدعاء للمطور
        </p>
      </div>
    </footer>
  );
};

export default Footer;
