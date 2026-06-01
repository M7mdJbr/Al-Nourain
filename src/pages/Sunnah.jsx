import React, { useEffect, useState } from "react";

const Sunnah = () => {
  const [books, setBooks] = useState([]);
  const [selectedBookSlug, setSelectedBookSlug] = useState(null);
  const [hadiths, setHadiths] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [loadingHadiths, setLoadingHadiths] = useState(false);
  const [loadingBooks, setLoadingBooks] = useState(true);

  const apiKey = "$2y$10$uS6IrpsXb2yfrKdPcGBOUeW7EDEyVx0ieBJNVdPGcLegWK2ZA7pO";

  useEffect(() => {
    fetch(`https://www.hadithapi.com/api/books?apiKey=${apiKey}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.books) {
          const allBooks = data.books;
          const filteredBooks = allBooks.filter(
            (book) => book.bookSlug !== "al-silsila-sahiha",
          );
          setBooks(filteredBooks);
        }
        setLoadingBooks(false);
      })
      .catch((err) => {
        console.error("Error fetching books:", err);
        setLoadingBooks(false);
      });
  }, []);

  useEffect(() => {
    if (!selectedBookSlug) return;

    setLoadingHadiths(true);
    fetch(
      `https://www.hadithapi.com/api/hadiths?apiKey=${apiKey}&book=${selectedBookSlug}&paginate=20&page=${currentPage}`,
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 200 && data.hadiths) {
          setHadiths(data.hadiths.data);
          setLastPage(data.hadiths.last_page);
        }
        setLoadingHadiths(false);
      })
      .catch((err) => {
        console.error("Error fetching hadiths:", err);
        setLoadingHadiths(false);
      });
  }, [selectedBookSlug, currentPage]);

  const handleBookClick = (slug) => {
    setSelectedBookSlug(slug);
    setCurrentPage(1);
  };

  const handleBackToBooks = () => {
    setSelectedBookSlug(null);
    setHadiths([]);
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50/30 to-slate-100 p-6"
      dir="ltr"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10 px-4">
          <span className="inline-block px-4 py-1.5 mb-4 bg-amber-100/80 text-amber-800 text-xs font-semibold rounded-full tracking-wide uppercase border border-amber-200">
            Prophetic Sunnah
          </span>
          <h1 className="font-cairo text-4xl md:text-5xl font-bold text-emerald-900 mb-3">
            {selectedBookSlug ? "Hadiths Collection" : "Books of Sunnah"}
          </h1>
          <p className="text-slate-600 max-w-xl mx-auto">
            {selectedBookSlug
              ? "Browse authentic narrations from the Prophet Muhammad (PBUH)"
              : "Select a book to explore its collection of hadiths"}
          </p>
        </div>

        {/* Books Grid View */}
        {!selectedBookSlug ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {loadingBooks
              ? // Skeleton Loading for Books
                [...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-slate-200/60 animate-pulse"
                  >
                    <div className="h-6 bg-slate-200 rounded w-3/4 mb-4"></div>
                    <div className="h-4 bg-slate-100 rounded w-1/2 mb-2"></div>
                    <div className="h-4 bg-slate-100 rounded w-1/3 mb-6"></div>
                    <div className="h-10 bg-slate-200 rounded-xl w-full"></div>
                  </div>
                ))
              : books.map((book) => (
                  <div
                    key={book.id}
                    className="group bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-slate-200/60 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <div>
                      {/* Book Icon/Header */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-amber-700 group-hover:bg-amber-100 transition-colors">
                          <i className="fa-solid fa-book-open-reader text-xl"></i>
                        </div>
                        <h3 className="text-xl font-bold text-emerald-900 font-cairo">
                          {book.bookName}
                        </h3>
                      </div>

                      {/* Book Info */}
                      <div className="space-y-2 mb-5">
                        <p className="text-slate-600 font-medium flex items-center gap-2">
                          <i className="fa-regular fa-user text-slate-400 text-sm"></i>
                          Scholar:{" "}
                          <span className="text-slate-800">
                            {book.writerName}
                          </span>
                        </p>
                        <div className="flex gap-4 text-sm text-slate-500">
                          <span className="flex items-center gap-1">
                            <i className="fa-regular fa-folder"></i>
                            {book.chapters_count} Chapters
                          </span>
                          <span className="flex items-center gap-1">
                            <i className="fa-regular fa-message"></i>
                            {book.hadiths_count} Hadiths
                          </span>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => handleBookClick(book.bookSlug)}
                      className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-medium py-3 px-4 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 group/btn"
                    >
                      View Hadiths
                      <i className="fa-solid fa-arrow-right text-sm transition-transform group-hover/btn:translate-x-1"></i>
                    </button>
                  </div>
                ))}
          </div>
        ) : (
          /* Hadiths Detail View */
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <button
              onClick={handleBackToBooks}
              className="mb-6 inline-flex items-center gap-2 px-5 py-2.5 bg-white/90 backdrop-blur-sm border border-slate-200/60 text-slate-700 font-medium rounded-xl hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-200 transition-all duration-200 shadow-sm"
            >
              <i className="fa-solid fa-arrow-right text-sm"></i>
              Back to Books
            </button>

            {loadingHadiths ? (
              // Skeleton Loading for Hadiths
              <div className="space-y-6">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-slate-200/60 animate-pulse"
                  >
                    <div className="h-4 bg-slate-200 rounded w-24 mb-4"></div>
                    <div className="h-6 bg-slate-200 rounded w-full mb-3"></div>
                    <div className="h-6 bg-slate-200 rounded w-5/6 mb-6"></div>
                    <div className="h-4 bg-slate-100 rounded w-full mb-2"></div>
                    <div className="h-4 bg-slate-100 rounded w-4/5"></div>
                  </div>
                ))}
              </div>
            ) : hadiths.length === 0 ? (
              <div className="text-center py-16 bg-white/90 backdrop-blur-sm rounded-2xl border border-slate-200/60">
                <i className="fa-regular fa-folder-open text-4xl text-slate-300 mb-4"></i>
                <p className="text-slate-500 font-medium">
                  No hadiths found in this collection.
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-6">
                {hadiths.map((hadith) => (
                  <article
                    key={hadith.id}
                    className="bg-white/90 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md transition-shadow duration-200 border-l-4 border-l-emerald-500"
                  >
                    {/* Hadith Header */}
                    <div className="flex flex-wrap justify-between items-center gap-3 text-sm text-slate-400 mb-5 pb-4 border-b border-slate-100">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 rounded-full font-medium text-slate-600">
                        <i className="fa-solid fa-hashtag text-xs"></i>
                        Hadith #{hadith.hadithNumber}
                      </span>
                      {hadith.chapterName && (
                        <span className="text-slate-500 italic">
                          <i className="fa-regular fa-folder me-1"></i>
                          {hadith.chapterName}
                        </span>
                      )}
                    </div>

                    {/* Arabic Text (Right Aligned) */}
                    {hadith.hadithArabic && (
                      <blockquote
                        className="text-slate-800 text-lg md:text-xl leading-loose font-cairo font-semibold mb-6 text-right border-r-2 border-emerald-200/60 pr-4"
                        dir="rtl"
                      >
                        "{hadith.hadithArabic}"
                      </blockquote>
                    )}

                    {/* English Text (Left Aligned) */}
                    {hadith.hadithEnglish && (
                      <p
                        className="text-slate-600 text-base leading-relaxed mb-5 text-left"
                        dir="ltr"
                      >
                        {hadith.hadithEnglish}
                      </p>
                    )}

                    {/* Heading/Category */}
                    {(hadith.headingArabic || hadith.headingEnglish) && (
                      <div className="mt-4 p-4 bg-gradient-to-r from-emerald-50/60 to-amber-50/60 rounded-xl border border-emerald-100/60 flex flex-col gap-1.5">
                        {hadith.headingArabic && (
                          <p
                            className="text-right text-emerald-800 font-cairo font-medium"
                            dir="rtl"
                          >
                            <i className="fa-solid fa-tag text-emerald-400 me-1 text-xs"></i>
                            {hadith.headingArabic}
                          </p>
                        )}
                        {hadith.headingEnglish && (
                          <p
                            className="text-left text-emerald-700/80 text-sm"
                            dir="ltr"
                          >
                            {hadith.headingEnglish}
                          </p>
                        )}
                      </div>
                    )}
                  </article>
                ))}

                {/* Pagination Controls */}
                <div className="flex flex-wrap justify-center items-center gap-3 my-10 p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/60 shadow-sm">
                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                    disabled={currentPage === 1}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 text-slate-700 font-medium rounded-xl disabled:opacity-50 disabled:cursor-not-allowed hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-200 transition-all duration-200"
                  >
                    <i className="fa-solid fa-chevron-right text-xs"></i>
                    Previous
                  </button>

                  <span className="px-4 py-2 text-slate-600 font-medium bg-slate-100 rounded-lg">
                    Page{" "}
                    <span className="text-emerald-700 font-bold">
                      {currentPage}
                    </span>{" "}
                    of {lastPage}
                  </span>

                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(prev + 1, lastPage))
                    }
                    disabled={currentPage === lastPage}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 text-slate-700 font-medium rounded-xl disabled:opacity-50 disabled:cursor-not-allowed hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-200 transition-all duration-200"
                  >
                    Next
                    <i className="fa-solid fa-chevron-left text-xs"></i>
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Sunnah;
