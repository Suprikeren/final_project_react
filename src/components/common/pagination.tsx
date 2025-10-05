import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5; // jumlah maksimal tombol angka ditampilkan
    let startPage = Math.max(currentPage - 2, 1);
    let endPage = Math.min(startPage + maxVisible - 1, totalPages);

    if (endPage - startPage < maxVisible - 1) {
      startPage = Math.max(endPage - maxVisible + 1, 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  return (
    <div className="flex justify-center items-center gap-2 py-4">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 bg-gray-100 rounded border text-sm disabled:opacity-50"
      >
        Prev
      </button>

      {getPageNumbers().map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-3 py-1 rounded text-sm border ${
            currentPage === page
              ? "bg-blue-600 text-white border-blue-600"
              : "bg-white text-gray-700 hover:bg-gray-100"
          }`}
        >
          {page}
        </button>
      ))}

      {totalPages > 5 && currentPage + 2 < totalPages && (
        <>
          <span className="text-sm">...</span>
          <button
            onClick={() => onPageChange(totalPages)}
            className={`px-3 py-1 rounded text-sm border ${
              currentPage === totalPages
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            {totalPages}
          </button>
        </>
      )}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 bg-gray-100 rounded border text-sm disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
