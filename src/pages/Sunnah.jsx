import React, { useEffect, useState } from "react";

const Sunnah = () => {
  const [books, setBooks] = useState([]);
  const [selectedBookSlug, setSelectedBookSlug] = useState(null);
  const [hadiths, setHadiths] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [loadingHadiths, setLoadingHadiths] = useState(false);

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
      })
      .catch((err) => console.error("Error fetching books:", err));
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
    <div className="min-h-screen bg-gray-50 p-6" dir="ltr">
      {!selectedBookSlug ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {books.map((book) => (
            <div
              key={book.id}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold mb-2 text-indigo-900 text-left">
                  {book.bookName}
                </h3>
                <p className="text-gray-600 mb-1 font-medium">
                  Scholar: {book.writerName}
                </p>
                <p className="text-gray-500 text-sm">
                  Chapters Count: {book.chapters_count}
                </p>
                <p className="text-gray-500 text-sm">
                  Hadiths Count: {book.hadiths_count}
                </p>
              </div>
              <button
                onClick={() => handleBookClick(book.bookSlug)}
                className=" cursor-pointer mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
              >
                View Hadiths
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="max-w-4xl mx-auto">
          <button
            onClick={handleBackToBooks}
            className="cursor-pointer mb-6 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-md transition-colors"
          >
            ← Back to Books
          </button>

          {loadingHadiths ? (
            <p className="text-center text-indigo-900 font-bold text-lg p-10">
              Loading Hadiths...
            </p>
          ) : (
            <div className="flex flex-col gap-6">
              {hadiths.map((hadith) => (
                <div
                  key={hadith.id}
                  className="bg-white p-6 rounded-lg shadow border-l-4 border-indigo-600"
                >
                  <div className="flex justify-between text-sm text-gray-400 mb-4 border-b border-gray-100 pb-2">
                    <span>Hadith No: {hadith.hadithNumber}</span>
                    <span className="bg-green-50 text-green-700 px-2 py-0.5 rounded-full text-xs font-bold">
                      {hadith.status}
                    </span>
                  </div>

                  {/* Arabic Text (Right Aligned) */}
                  <p
                    className="text-gray-800 text-xl leading-relaxed font-semibold mb-6 text-right"
                    dir="rtl"
                  >
                    {hadith.hadithArabic}
                  </p>

                  {/* English Text (Left Aligned) */}
                  <p
                    className="text-gray-700 text-base leading-relaxed mb-4 text-left"
                    dir="ltr"
                  >
                    {hadith.hadithEnglish}
                  </p>

                  {hadith.headingArabic && (
                    <div className="text-sm bg-gray-50 p-2 rounded border border-gray-100 mt-2 flex flex-col gap-1">
                      <p className="text-right text-gray-600" dir="rtl">
                        {hadith.headingArabic}
                      </p>
                      {hadith.headingEnglish && (
                        <p className="text-left text-gray-500" dir="ltr">
                          {hadith.headingEnglish}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              ))}

              <div className="flex justify-center items-center gap-4 my-8">
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                  className="cursor-pointer px-4 py-2 bg-indigo-600 text-white rounded-md disabled:bg-gray-300 hover:bg-indigo-700 transition-colors"
                >
                  Previous
                </button>
                <span className="text-gray-700 font-medium">
                  Page {currentPage} of {lastPage}
                </span>
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, lastPage))
                  }
                  disabled={currentPage === lastPage}
                  className=" cursor-pointer px-4 py-2 bg-indigo-600 text-white rounded-md disabled:bg-gray-300 hover:bg-indigo-700 transition-colors"
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Sunnah;
