import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-white text-emerald-800 flex justify-between px-6 py-4 border-b border-slate-100 shadow-sm">
      <div>
        <Link to="/" className="hover:text-emerald-600 font-bold text-xl">
          Al-Nourain
        </Link>
      </div>
      <div className="flex justify-center gap-6 font-medium">
        <Link to="/" className="hover:text-emerald-600 transition-colors">
          Home
        </Link>
        <Link to="/quran" className="hover:text-emerald-600 transition-colors">
          Qur'an
        </Link>
        <Link to="/sunnah" className="hover:text-emerald-600 transition-colors">
          Sunnah
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
