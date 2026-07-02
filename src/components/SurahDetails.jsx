import { useParams, Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const arabicNum = (num) => {
  const d = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
  return String(num)
    .split("")
    .map((c) => d[parseInt(c)])
    .join("");
};

const SurahDetails = () => {
  const { surahNumber } = useParams();
  const [surahData, setSurahData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(null);
  const [availablePages, setAvailablePages] = useState([]);
  const contentRef = useRef(null);

  useEffect(() => {
    const fetchSurah = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(
          `https://api.alquran.cloud/v1/surah/${surahNumber}`,
        );
        const result = await response.json();
        if (result.code === 200) {
          const data = result.data;
          setSurahData(data);
          const pages = [...new Set(data.ayahs.map((a) => a.page))].sort(
            (a, b) => a - b,
          );
          setAvailablePages(pages);
          setCurrentPage(pages[0]);
        } else {
          setError("السورة غير موجودة");
        }
      } catch {
        setError("حدث خطأ أثناء تحميل البيانات");
      } finally {
        setLoading(false);
      }
    };
    fetchSurah();
  }, [surahNumber]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goToPage = (page) => {
    setCurrentPage(page);
    setTimeout(scrollToTop, 50);
  };

  if (loading) {
    return (
      <div
        className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50/30 to-slate-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
        dir="rtl"
      >
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-emerald-200 border-t-emerald-600 rounded-full animate-spin mx-auto mb-4" />
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              جاري تحميل السورة...
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div
        className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50/30 to-slate-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
        dir="rtl"
      >
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-xl shadow-sm max-w-md">
            <p className="text-red-600 dark:text-red-400 text-xl font-semibold mb-4">
              {error}
            </p>
            <Link
              to="/qurantext"
              className="px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors"
            >
              العودة للقائمة
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (!surahData || !currentPage) return null;

  const currentPageVerses = surahData.ayahs.filter(
    (a) => a.page === currentPage,
  );
  const mid = Math.ceil(currentPageVerses.length / 2);
  const rightCol = currentPageVerses.slice(0, mid);
  const leftCol = currentPageVerses.slice(mid);
  const pageIndex = availablePages.indexOf(currentPage);
  const hasPrev = pageIndex > 0;
  const hasNext = pageIndex < availablePages.length - 1;
  const isFirstPage = pageIndex === 0;
  const showBasmalah =
    isFirstPage && surahData.number !== 9 && surahData.number !== 1;

  const renderVerse = (ayah, i, arr) => {
    const isLast = i === arr.length - 1;
    return (
      <div
        key={ayah.numberInSurah}
        className={`flex items-baseline gap-1.5 ${
          isLast ? "" : "mb-1"
        } hover:bg-amber-700/5 dark:hover:bg-amber-300/5 rounded px-1 -mx-1 transition-colors`}
      >
        <span className="font-quran flex-1 text-right text-[1.1rem] md:text-[1.35rem] leading-[2.6] text-gray-900 dark:text-amber-50/90">
          {ayah.text}
        </span>
        <span className="inline-flex items-center justify-center w-[1.35rem] h-[1.35rem] md:w-[1.5rem] md:h-[1.5rem] rounded-full border border-amber-700/40 dark:border-amber-400/40 text-[0.6rem] md:text-[0.65rem] font-semibold text-amber-800 dark:text-amber-300 flex-shrink-0 font-cairo bg-amber-50 dark:bg-amber-950/30">
          {arabicNum(ayah.numberInSurah)}
        </span>
      </div>
    );
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50/30 to-slate-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-4 py-6 transition-colors duration-300"
      dir="rtl"
    >
      <div className="max-w-5xl mx-auto pt-25">
        <Link
          to="/qurantext"
          className="inline-flex items-center gap-2 text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 mb-6 transition-colors font-medium"
        >
          → العودة لقائمة السور
        </Link>

        <div
          key={currentPage}
          className="bg-[#f2e3c6] dark:bg-[#2a2418] rounded-2xl shadow-2xl border border-amber-800/15 dark:border-amber-600/15 overflow-hidden"
        >
          <div className="h-1.5 bg-gradient-to-l from-amber-900 via-amber-600 to-amber-900 opacity-60" />

          <div className="px-6 md:px-10 pt-6 md:pt-8 pb-4 flex items-center justify-between border-b border-amber-700/15 dark:border-amber-500/15">
            <div className="flex items-center gap-3">
              <div className="w-0.5 h-7 bg-amber-700/30 dark:bg-amber-500/30 rounded-full" />
              <div>
                <h1 className="font-quran text-xl md:text-2xl text-amber-900 dark:text-amber-300 leading-relaxed">
                  {surahData.name}
                </h1>
                <p className="font-cairo text-[0.65rem] md:text-xs text-amber-600/60 dark:text-amber-400/60 mt-0.5">
                  {surahData.revelationType === "Meccan" ? "مكية" : "مدنية"} •{" "}
                  {surahData.numberOfAyahs} آية
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 bg-amber-700/8 dark:bg-amber-500/8 px-3 py-1.5 rounded-lg border border-amber-700/10 dark:border-amber-500/10">
              <span className="font-cairo font-bold text-base md:text-lg text-amber-800 dark:text-amber-300">
                {arabicNum(currentPage)}
              </span>
              <span className="font-cairo text-[0.65rem] text-amber-600/60 dark:text-amber-400/60">
                صفحة
              </span>
            </div>
          </div>

          <div className="px-5 md:px-10 py-6 md:py-10">
            {showBasmalah && (
              <div className="text-center mb-8 pb-6 border-b border-amber-700/12 dark:border-amber-500/12">
                <p className="font-quran text-2xl md:text-3xl text-amber-900 dark:text-amber-300 leading-[2.6] tracking-wide">
                  ﷽
                </p>
              </div>
            )}

            <div
              ref={contentRef}
              className="flex flex-col md:flex-row md:gap-10 lg:gap-16 relative"
            >
              <div className="hidden md:block absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-amber-700/15 dark:via-amber-500/15 to-transparent left-1/2 -translate-x-1/2" />

              <div className="flex-1 min-w-0">
                {rightCol.map((ayah, i) =>
                  renderVerse(ayah, i, rightCol),
                )}
              </div>
              <div className="flex-1 min-w-0 mt-1 md:mt-0">
                {leftCol.map((ayah, i) =>
                  renderVerse(ayah, i, leftCol),
                )}
              </div>
            </div>
          </div>

          <div className="h-1.5 bg-gradient-to-l from-amber-900 via-amber-600 to-amber-900 opacity-60" />
        </div>

        <div className="flex items-center justify-center gap-2 md:gap-4 mt-6">
          <button
            onClick={() => goToPage(availablePages[pageIndex - 1])}
            disabled={!hasPrev}
            className="flex items-center gap-1.5 px-4 md:px-5 py-2 md:py-2.5 bg-amber-700 hover:bg-amber-800 disabled:bg-gray-300 dark:disabled:bg-gray-700 text-white rounded-xl transition-all font-cairo disabled:cursor-not-allowed shadow-md disabled:shadow-none text-sm md:text-base"
          >
            <svg
              className="w-3.5 h-3.5 md:w-4 md:h-4 rotate-180"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="hidden sm:inline">السابقة</span>
          </button>

          <div className="flex items-center gap-2 px-3 md:px-4 py-2 bg-white/60 dark:bg-gray-800/60 rounded-xl backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
            <span className="font-cairo text-xs md:text-sm text-gray-500 dark:text-gray-400">
              صفحة
            </span>
            <span className="font-cairo font-bold text-base md:text-lg text-amber-700 dark:text-amber-400">
              {arabicNum(currentPage)}
            </span>
            <span className="font-cairo text-xs text-gray-400 dark:text-gray-500">
              من {arabicNum(availablePages.length)}
            </span>
          </div>

          <button
            onClick={() => goToPage(availablePages[pageIndex + 1])}
            disabled={!hasNext}
            className="flex items-center gap-1.5 px-4 md:px-5 py-2 md:py-2.5 bg-amber-700 hover:bg-amber-800 disabled:bg-gray-300 dark:disabled:bg-gray-700 text-white rounded-xl transition-all font-cairo disabled:cursor-not-allowed shadow-md disabled:shadow-none text-sm md:text-base"
          >
            <span className="hidden sm:inline">التالية</span>
            <svg
              className="w-3.5 h-3.5 md:w-4 md:h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        <div className="text-center mt-8 pb-8">
          <Link
            to="/qurantext"
            className="inline-flex items-center gap-2 text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 transition-colors font-medium"
          >
            → العودة لقائمة السور
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SurahDetails;
