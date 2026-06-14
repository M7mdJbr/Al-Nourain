import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [audioError, setAudioError] = useState(false);
  return (
    <div
      dir="rtl"
      className="bg-gradient-to-br from-slate-50 via-emerald-50/30 to-slate-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen text-slate-800 dark:text-gray-100 p-6 flex flex-col items-center justify-center gap-12 py-16 transition-colors duration-300"
    >
      {/* Hero Section */}
      <div className="text-center max-w-2xl px-4 mt-10">
        <span className="inline-block px-4 mt-[25px] py-1.5 mb-5 bg-emerald-100/80 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 text-xs font-semibold rounded-full tracking-wide uppercase border border-emerald-200 dark:border-emerald-700/50">
          مرحبا
        </span>

        <h1 className="font-cairo text-5xl md:text-6xl font-bold text-emerald-900 dark:text-emerald-400 mb-4 tracking-tight">
          مكتبة النورين
        </h1>

        <div className="w-20 h-1 bg-gradient-to-r from-transparent via-emerald-600 to-transparent mx-auto mb-6 rounded-full"></div>

        <p className="font-cairo text-lg text-slate-600 dark:text-gray-300 leading-relaxed">
          مكتبة توفر المواد المسموعة والمقروءة لعلوم الوحيين
        </p>
      </div>

      {/* Quick Access Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full px-4">
        {/* Holy Qur'an Card */}
        <div className="group bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-slate-200/60 dark:border-gray-700 flex flex-col justify-between items-center text-center hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300">
          <div>
            <div className="w-16 h-16 mx-auto mb-5 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl flex items-center justify-center text-emerald-700 dark:text-emerald-400 text-3xl group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900/40 transition-colors">
              <i className="fa-solid fa-book"></i>
            </div>
            <h2 className="text-2xl font-bold text-emerald-900 dark:text-emerald-400 mb-2 font-cairo">
              القرآن الكريم
            </h2>
            <p className="text-slate-500 dark:text-gray-400 text-sm leading-relaxed mb-6">
              اقرأ واستمع للعديد من التلاوات بأصوات مختلف القراء.
            </p>
          </div>
          <div className="flex justify-center gap-5">
            <Link
              to="/quran"
              className="group/btn bg-emerald-800 hover:bg-emerald-700 dark:bg-emerald-700 dark:hover:bg-emerald-600 text-white font-medium px-6 py-1 rounded-xl transition-all duration-300 w-full flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
            >
              استمع
              <i className="fa-solid fa-arrow-right text-sm transition-transform group-hover/btn:translate-x-1"></i>
            </Link>

            <Link
              to="/qurantext"
              className="group/btn bg-emerald-800 hover:bg-emerald-700 dark:bg-emerald-700 dark:hover:bg-emerald-600 text-white font-medium px-6 py-3 rounded-xl transition-all duration-300 w-full flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
            >
              اقرأ
              <i className="fa-solid fa-arrow-right text-sm transition-transform group-hover/btn:translate-x-1"></i>
            </Link>
          </div>
        </div>

        {/* Prophetic Sunnah Card */}
        <div className="group bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-slate-200/60 dark:border-gray-700 flex flex-col justify-between items-center text-center hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300">
          <div>
            <div className="w-16 h-16 mx-auto mb-5 bg-amber-50 dark:bg-amber-900/20 rounded-2xl flex items-center justify-center text-amber-700 dark:text-amber-400 text-3xl group-hover:bg-amber-100 dark:group-hover:bg-amber-900/40 transition-colors">
              <i className="fa-brands fa-ussunnah"></i>
            </div>
            <h2 className="text-2xl font-bold text-emerald-900 dark:text-emerald-400 mb-2 font-cairo">
              السنة النبوية
            </h2>
            <p className="text-slate-500 dark:text-gray-400 text-sm leading-relaxed mb-6">
              تصفح سنة النبي صلى الله عليه وسلم.
            </p>
          </div>
          <Link
            to="/sunnah"
            className="group/btn bg-emerald-800 hover:bg-emerald-700 dark:bg-emerald-700 dark:hover:bg-emerald-600 text-white font-medium px-6 py-3 rounded-xl transition-all duration-300 w-full flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
          >
            تصفح
            <i className="fa-solid fa-arrow-right text-sm transition-transform group-hover/btn:translate-x-1"></i>
          </Link>
        </div>
      </div>

      {/* Radio Section */}
      <div className="group bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-slate-200/60 dark:border-gray-700 flex flex-col justify-between items-center text-center hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 max-w-4xl w-full px-4">
        <div className="w-full">
          <div className="w-16 h-16 mx-auto mb-5 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center text-blue-700 dark:text-blue-400 text-3xl group-hover:bg-blue-100 dark:group-hover:bg-blue-900/40 transition-colors">
            <i className="fa-solid fa-radio"></i>
          </div>
          <h2 className="text-2xl font-bold text-emerald-900 dark:text-emerald-400 mb-2 font-cairo">
            إذاعة التفسير المختصر للقرآن الكريم
          </h2>
          <p className="text-slate-500 dark:text-gray-400 text-sm leading-relaxed mb-6">
            استمع لإذاعة التفسير المختصر للقرآن الكريم بصوت عالي الجودة.
          </p>
          <div className="w-full">
            {audioError && (
              <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-lg text-red-700 dark:text-red-400 text-sm">
                <p>
                  قد تكون هناك مشكلة في تحميل الإذاعة. يرجى التحقق من اتصالك
                  بالإنترنت.
                </p>
              </div>
            )}
            <audio
              autoPlay
              controls
              controlsList="nodownload"
              crossOrigin="anonymous"
              onError={() => setAudioError(true)}
              onPlay={() => setAudioError(false)}
              style={{
                width: "100%",
                outline: "none",
              }}
            >
              <source
                src="https://backup.qurango.net/radio/mukhtasartafsir"
                type="audio/mpeg"
              />
              متصفحك لا يدعم تشغيل الصوت
            </audio>
          </div>
        </div>
        <Link
          to="/radio"
          className="group/btn bg-emerald-800 hover:bg-emerald-700 dark:bg-emerald-700 dark:hover:bg-emerald-600 text-white font-medium px-6 py-3 rounded-xl transition-all duration-300 shadow-md mt-2 hover:shadow-lg"
        >
          استمع للإذاعة
          <i className="fa-solid mr-2 fa-arrow-right text-sm transition-transform group-hover/btn:translate-x-1"></i>
        </Link>
      </div>
    </div>
  );
};

export default Home;
