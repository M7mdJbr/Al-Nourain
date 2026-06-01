import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { setIsMobileMenuOpen(false) }, [location.pathname])
  
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/quran", label: "Qur'an" },
    { to: "/sunnah", label: "Sunnah" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-md border-b border-slate-200/60 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:shadow-emerald-500/30 transition-shadow">
            <i className="fa-solid fa-mosque text-lg"></i>
          </div>
          <span className="font-cairo font-bold text-xl text-emerald-900 group-hover:text-emerald-700 transition-colors">
            Al-Nourain
          </span>
        </Link>

        {/* Navigation Links - Desktop */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-100/50 p-1.5 rounded-2xl border border-slate-200/60">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`relative px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "text-white shadow-sm"
                    : "text-slate-600 hover:text-emerald-700 hover:bg-white/80"
                }`}
              >
                {isActive && (
                  <span className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-xl -z-10"></span>
                )}
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Button (Visual Only - Placeholder) */}
        <button
          className="md:hidden p-2.5 cursor-pointer text-slate-600 hover:bg-slate-100 rounded-xl transition-colors border border-slate-200/60"
          onClick={() => {
            setIsMobileMenuOpen(!isMobileMenuOpen);
          }}
        >
          <i
            className={`fa-solid ${isMobileMenuOpen ? "fa-xmark" : "fa-bars"} text-lg`}
          ></i>
        </button>
      </div>
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}>
        <nav className="px-6 pb-6 pt-2 flex flex-col gap-2 bg-white/95 backdrop-blur-md border-slate-200/60">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key= {link.to}
                to= {link.to}
                className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200${isActive}?"bg-gradient-to-r from-emerald-600 to-emerald-700 text-shadow-emerald-950 shadow-sm ":"text-slate-600 hover:text-emerald-700 hover:bg-slate-50"}`}
              >
              {link.label}
              </Link>
            )
        })}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
