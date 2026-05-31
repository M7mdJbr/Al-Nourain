import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 p-6 flex flex-col items-center justify-center gap-12 py-16">
      {/* Hero Section */}
      <div className="text-center max-w-2xl">
        <h1 className="font-cairo text-5xl md:text-6xl font-bold text-emerald-800 mb-6">
          Al-Nourain
        </h1>
        <p className="font-cairo text-lg text-slate-600 italic leading-relaxed">
          "So adhere to that which is revealed to you. Indeed, you are on a
          straight path."
        </p>
      </div>

      {/* Quick Access Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full px-4">
        {/* Holy Qur'an Card */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between items-center text-center hover:shadow-md transition-all duration-300">
          <div>
            <div className="text-4xl mb-4">
              <i class="fa-solid fa-book"></i>
            </div>
            <h2 className="text-2xl font-bold text-emerald-800 mb-3 font-cairo">
              The Holy Qur'an
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Listen and download the Holy Quran in the voices of many reciters.
            </p>
          </div>
          <Link
            to="/quran"
            className="bg-emerald-800 hover:bg-emerald-700 text-white font-medium px-6 py-2.5 rounded-xl transition-colors w-full"
          >
            Explore Qur'an
          </Link>
        </div>

        {/* Prophetic Sunnah Card */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between items-center text-center hover:shadow-md transition-all duration-300">
          <div>
            <div className="text-4xl mb-4">
              <i class="fa-brands fa-ussunnah"></i>
            </div>
            <h2 className="text-2xl font-bold text-emerald-800 mb-3 font-cairo">
              Prophetic Sunnah
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Access the authentic Hadiths and sayings of Prophet Muhammad
              (PBUH).
            </p>
          </div>
          <Link
            to="/sunnah"
            className="bg-emerald-800 hover:bg-emerald-700 text-white font-medium px-6 py-2.5 rounded-xl transition-colors w-full"
          >
            Explore Sunnah
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
