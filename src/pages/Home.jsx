import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  // حالات التحكم في الصوت والبث
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // مرجع لعنصر الصوت الـ Native
  const audioRef = useRef(null);
  const streamUrl = "https://backup.qurango.net/radio/mukhtasartafsir";

  // دالة التحكم في التشغيل والإيقاف
  const togglePlay = () => {
    if (!audioRef.current) {
      // أول مرة يضغط، بننشئ عنصر الصوت وبنشغله
      setIsLoading(true);
      const audio = new Audio(streamUrl);
      audio.preload = "none";

      audio.oncanplay = () => {
        setIsLoading(false);
      };

      audioRef.current = audio;
    }

    if (isPlaying) {
      // في البث المباشر الأفضل نعمل pause ونصفر السورس عشان ميفضلش يسحب بيانات في الخلفية
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      setIsLoading(true);
      // بنعيد لقط الإشارة الحية من جديد
      audioRef.current.src = streamUrl;
      audioRef.current.load();
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          setIsLoading(false);
        })
        .catch(() => {
          setIsLoading(false);
        });
    }
  };

  // دالة التحكم في كتم الصوت
  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

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
      <div className="grid grid-cols-1 gap-6 max-w-4xl w-full px-4">
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
      <div className="group bg-emerald-100/35 dark:bg-gray-800/90 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-slate-200/60 dark:border-gray-700 flex flex-col justify-between items-center text-center hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 max-w-4xl w-full px-4">
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

          {/* الـ Player المودرن الجديد */}
          <div className="w-full max-w-md mx-auto bg-white/80 dark:bg-gray-700/60 backdrop-blur-md p-4 rounded-xl border border-slate-200/50 dark:border-gray-600 flex items-center justify-between shadow-sm mt-4">
            {/* الجزء الأيمن: الاسم والحالة */}
            <div className="flex items-center gap-3 text-right">
              <div
                className={`w-3 h-3 rounded-full ${isPlaying ? "bg-red-500 animate-pulse" : "bg-slate-400"} `}
              ></div>
              <div>
                <p className="font-cairo text-sm font-semibold text-emerald-950 dark:text-emerald-300">
                  بث مباشر حي
                </p>
                <p className="font-cairo text-xs text-slate-400 dark:text-gray-400">
                  {isLoading
                    ? "جاري الاتصال..."
                    : isPlaying
                      ? "يتم التشغيل الآن"
                      : "متوقف"}
                </p>
              </div>
            </div>

            {/* الأزرار في المنتصف/اليسار */}
            <div className="flex items-center gap-4">
              {/* زر كتم الصوت */}
              <button
                onClick={toggleMute}
                disabled={!isPlaying}
                className="text-slate-500 dark:text-gray-300 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors disabled:opacity-40"
              >
                <i
                  className={`fa-solid ${isMuted ? "fa-volume-xmark" : "fa-volume-high"} text-lg`}
                ></i>
              </button>

              {/* زر التشغيل الأساسي */}
              <button
                onClick={togglePlay}
                disabled={isLoading}
                className="w-12 h-12 rounded-full bg-emerald-800 hover:bg-emerald-700 dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white flex items-center justify-center shadow-md hover:scale-105 transition-all duration-200 disabled:opacity-50"
              >
                {isLoading ? (
                  <i className="fa-solid fa-spinner animate-spin text-lg"></i>
                ) : isPlaying ? (
                  <i className="fa-solid fa-pause text-lg"></i>
                ) : (
                  <i className="fa-solid fa-play text-lg translate-x-[-1px]"></i> /* ترحيل بسيط عشان السنتر */
                )}
              </button>
            </div>
          </div>
        </div>

        <Link
          to="/radio"
          className="group/btn bg-emerald-800 hover:bg-emerald-700 dark:bg-emerald-700 dark:hover:bg-emerald-600 text-white font-medium px-6 py-3 rounded-xl transition-all duration-300 shadow-md mt-6 hover:shadow-lg"
        >
          استمع للإذاعة
          <i className="fa-solid mr-2 fa-arrow-right text-sm transition-transform group-hover/btn:translate-x-1"></i>
        </Link>
      </div>
    </div>
  );
};

export default Home;
