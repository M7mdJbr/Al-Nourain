import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Qurantext = () => {
  const [surahs, setSurahs] = useState([]);

  useEffect(() => {
    fetch("https://api.alquran.cloud/v1/surah")
      .then((response) => response.json())
      .then((res) => {
        if (res.code === 200) {
          setSurahs(res.data);
        }
      })
      .catch((error) => {
        console.log("Error fetching surahs:", error);
      });
  }, []);

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50/30 to-slate-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-6 transition-colors duration-300"
      dir="rtl"
    >
      <div className="max-w-6xl mx-auto">
        <h1 className="font-hafs mt-25 text-3xl text-center text-emerald-700 dark:text-emerald-400 mb-8 leading-[2.4]">
          سور القرآن الكريم
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {surahs.map((surah) => (
            <Link
              key={surah.number}
              to={`/qurantext/${surah.number}`}
              className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md border border-emerald-100 dark:border-gray-700 transition-all duration-200 cursor-pointer group"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 font-bold text-sm">
                {surah.number}
              </div>

              <div className="text-right flex-1 mr-4">
                <h2 className="font-hafs font-semibold text-gray-800 dark:text-gray-200 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors leading-[2.4]">
                  {surah.name}
                </h2>
                <p className="text-xs text-gray-400 dark:text-gray-500">
                  {surah.revelationType === "Meccan" ? "مكية" : "مدنية"} •{" "}
                  {surah.numberOfAyahs} آية
                </p>
              </div>
            </Link>
          ))}
        </div>

        {surahs.length === 0 && (
          <p className="text-center text-gray-500 dark:text-gray-400 mt-10">
            جاري تحميل قائمة السور...
          </p>
        )}
      </div>
    </div>
  );
};

export default Qurantext;
