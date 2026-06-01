import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-slate-50 via-emerald-50/30 to-slate-100 min-h-screen text-slate-800 p-6 flex flex-col items-center justify-center gap-12 py-16">
      {/* Hero Section */}
      <div className="text-center max-w-2xl px-4">
        <span className="inline-block px-4 mt-[25px] py-1.5 mb-5 bg-emerald-100/80 text-emerald-800 text-xs font-semibold rounded-full tracking-wide uppercase border border-emerald-200">
          Welcome
        </span>
        <h1 className="font-cairo text-5xl md:text-6xl font-bold text-emerald-900 mb-4 tracking-tight">
          Al-Nourain
        </h1>
        <div className="w-20 h-1 bg-gradient-to-r from-transparent via-emerald-600 to-transparent mx-auto mb-6 rounded-full"></div>
        <p className="font-cairo text-lg text-slate-600 italic leading-relaxed">
          "So adhere to that which is revealed to you. Indeed, you are on a
          straight path."
        </p>
      </div>

      {/* Quick Access Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full px-4">
        {/* Holy Qur'an Card */}
        <div className="group bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-slate-200/60 flex flex-col justify-between items-center text-center hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300">
          <div>
            <div className="w-16 h-16 mx-auto mb-5 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-700 text-3xl group-hover:bg-emerald-100 transition-colors">
              <i className="fa-solid fa-book"></i>
            </div>
            <h2 className="text-2xl font-bold text-emerald-900 mb-2 font-cairo">
              The Holy Qur'an
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Listen and download the Holy Quran in the voices of many reciters.
            </p>
          </div>
          <Link
            to="/quran"
            className="group/btn bg-emerald-800 hover:bg-emerald-700 text-white font-medium px-6 py-3 rounded-xl transition-all duration-300 w-full flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
          >
            Explore Qur'an
            <i className="fa-solid fa-arrow-right text-sm transition-transform group-hover/btn:translate-x-1"></i>
          </Link>
        </div>

        {/* Prophetic Sunnah Card */}
        <div className="group bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-slate-200/60 flex flex-col justify-between items-center text-center hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300">
          <div>
            <div className="w-16 h-16 mx-auto mb-5 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-700 text-3xl group-hover:bg-amber-100 transition-colors">
              <i className="fa-brands fa-ussunnah"></i>
            </div>
            <h2 className="text-2xl font-bold text-emerald-900 mb-2 font-cairo">
              Prophetic Sunnah
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Access the authentic Hadiths and sayings of Prophet Muhammad
              (PBUH).
            </p>
          </div>
          <Link
            to="/sunnah"
            className="group/btn bg-emerald-800 hover:bg-emerald-700 text-white font-medium px-6 py-3 rounded-xl transition-all duration-300 w-full flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
          >
            Explore Sunnah
            <i className="fa-solid fa-arrow-right text-sm transition-transform group-hover/btn:translate-x-1"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
