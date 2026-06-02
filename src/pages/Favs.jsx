import React from "react";
import { Link } from "react-router-dom";

const Favs = () => {
  const favoriteSurahs = [
    { id: 1, name: "Surah Al-Fatihah", reciter: "Mishary Alafasy" },
    { id: 2, name: "Surah Al-Baqarah", reciter: "Abdul Basit Abdul Samad" },
  ];

  const favoriteHadiths = [
    {
      id: 1,
      text: "Actions are judged by intentions, and every person will get what they intended...",
      source: "Sahih Al-Bukhari",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 via-emerald-50/30 to-slate-100 min-h-screen text-slate-800 p-6 flex flex-col items-center gap-12 pt-24 pb-16">
      <div className="text-center max-w-2xl px-4">
        <span className="inline-block px-4 py-1.5 mb-5 bg-emerald-100/80 text-emerald-800 text-xs font-semibold rounded-full tracking-wide uppercase border border-emerald-200">
          My List
        </span>
        <h1 className="font-cairo text-4xl md:text-5xl font-bold text-emerald-900 mb-4 tracking-tight">
          Favorites
        </h1>
        <div className="w-20 h-1 bg-gradient-to-r from-transparent via-emerald-600 to-transparent mx-auto mb-6 rounded-full"></div>
        <p className="font-cairo text-base text-slate-600 leading-relaxed">
          Your personal collection of cherished Surahs and noble Hadiths you
          have saved.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full px-4">
        <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-slate-200/60 flex flex-col gap-4">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
            <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-700 text-xl">
              <i className="fa-solid fa-book"></i>
            </div>
            <h2 className="text-xl font-bold text-emerald-900 font-cairo">
              Favorite Surahs & Clips
            </h2>
          </div>

          {favoriteSurahs.length === 0 ? (
            <p className="text-slate-400 text-sm text-center py-8">
              No Surahs in favorites yet.
            </p>
          ) : (
            <div className="flex flex-col gap-3">
              {favoriteSurahs.map((surah) => (
                <div
                  key={surah.id}
                  className="flex items-center justify-between p-4 bg-slate-50/50 rounded-xl border border-slate-100 hover:border-emerald-200 transition-colors group"
                >
                  <div className="text-left">
                    <h3 className="font-cairo font-bold text-emerald-900 text-base">
                      {surah.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {surah.reciter}
                    </p>
                  </div>
                  <button
                    className="text-slate-400 hover:text-red-500 p-2 rounded-lg hover:bg-red-50 transition-colors duration-200"
                    title="Remove"
                  >
                    <i className="fa-solid fa-xmark text-base"></i>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-slate-200/60 flex flex-col gap-4">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
            <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center text-amber-700 text-xl">
              <i className="fa-brands fa-ussunnah"></i>
            </div>
            <h2 className="text-xl font-bold text-emerald-900 font-cairo">
              Saved Hadiths
            </h2>
          </div>

          {favoriteHadiths.length === 0 ? (
            <p className="text-slate-400 text-sm text-center py-8">
              No Hadiths in favorites yet.
            </p>
          ) : (
            <div className="flex flex-col gap-3">
              {favoriteHadiths.map((hadith) => (
                <div
                  key={hadith.id}
                  className="flex flex-col gap-3 p-4 bg-slate-50/50 rounded-xl border border-slate-100 hover:border-emerald-200 transition-colors"
                >
                  <p className="font-cairo text-sm text-slate-700 leading-relaxed text-left italic">
                    "{hadith.text}"
                  </p>
                  <div className="flex items-center justify-between border-t border-slate-100/70 pt-2 mt-1">
                    <span className="text-xs text-emerald-700 font-medium bg-emerald-50 px-2.5 py-1 rounded-md">
                      {hadith.source}
                    </span>
                    <button
                      className="text-slate-400 hover:text-red-500 p-1.5 rounded-lg hover:bg-red-50 transition-colors duration-200"
                      title="Remove"
                    >
                      <i className="fa-solid fa-xmark text-base"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <Link
        to="/"
        className="group/btn border border-emerald-700/30 hover:border-emerald-700/60 text-emerald-800 bg-white hover:bg-emerald-50 font-medium px-6 py-2.5 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-sm text-sm"
      >
        <i className="fa-solid fa-arrow-left text-xs transition-transform group-hover/btn:-translate-x-1"></i>
        Back to Home
      </Link>
    </div>
  );
};

export default Favs;
