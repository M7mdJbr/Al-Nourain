import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

const SurahDetails = () => {
  const { surahNumber } = useParams();
  const [surahData, setSurahData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
          setSurahData(result.data);
        } else {
          setError("السورة غير موجودة");
        }
      } catch (err) {
        setError("حدث خطأ أثناء تحميل البيانات");
      } finally {
        setLoading(false);
      }
    };
    fetchSurah();
  }, [surahNumber]);

  return (
    <div
      className="min-h-screen font-quran bg-gradient-to-br from-slate-50 via-emerald-50/30 to-slate-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-6 transition-colors duration-300"
      dir="rtl"
    >
      <div className="mt-25 max-w-4xl mx-auto">
        <Link
          to="/qurantext"
          className="inline-flex font-quran items-center gap-2 text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 mb-6 transition-colors font-medium"
        >
          → العودة لقائمة السور
        </Link>

        {loading && (
          <div className="text-center py-20">
            <div className="w-12 h-12 border-4 border-emerald-200 border-t-emerald-600 rounded-full animate-spin mx-auto mb-4" />
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              جاري تحميل السورة...
            </p>
          </div>
        )}

        {!loading && error && (
          <div className="text-center py-20 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-red-100 dark:border-red-900/30">
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
        )}

        {!loading && !error && surahData && (
          <>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-emerald-100 dark:border-gray-700 p-8 mb-8 text-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 font-bold text-2xl mx-auto mb-4">
                {surahData.number}
              </div>
              <h1 className="text-4xl font-bold text-emerald-700 dark:text-emerald-400 mb-3">
                {surahData.name}
              </h1>
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                {surahData.revelationType === "Meccan" ? "مكية" : "مدنية"} •{" "}
                {surahData.numberOfAyahs} آية
              </p>
            </div>

            {surahData.number !== 9 && (
              <p className=" font-quran text-center text-2xl md:text-3xl text-emerald-800 dark:text-emerald-300 mb-10 font-serif leading-relaxed">
                بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
              </p>
            )}

            <div className="space-y-6">
              {surahData.ayahs.map((ayah) => (
                <div
                  key={ayah.numberInSurah}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-emerald-50 dark:border-gray-700 hover:border-emerald-200 dark:hover:border-emerald-800 transition-all duration-200"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 font-bold text-sm mt-1">
                      {ayah.numberInSurah}
                    </div>
                    <p className="font-quran flex-1 text-xl md:text-2xl leading-[2.2] text-gray-800 dark:text-gray-200 font-serif text-right">
                      {ayah.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SurahDetails;
