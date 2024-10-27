import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const Pagination = ({ totalRecords, recordsPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalRecords / recordsPerPage);
  const maxVisiblePages = 3; // Maximum number of pages to display
  const halfMaxVisible = Math.floor(maxVisiblePages / 2);

  const startPage = Math.max(
    Math.min(currentPage - halfMaxVisible, totalPages - maxVisiblePages),
    0
  );
  const endPage = Math.min(startPage + maxVisiblePages, totalPages);

  const handleClick = (pageNumber) => {
    onPageChange(pageNumber);
  };

  if (totalPages <= 1) return null; // No pagination needed for a single page

  return (
    <div className="flex items-end justify-end space-x-2 mt-4">
      {/* Previous Icon */}
      <button
        onClick={() => handleClick(currentPage - 1)}
        disabled={currentPage === 0}
        className={`p-1 rounded-full ${
          currentPage === 0
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
            : 'bg-gray-500 text-white hover:bg-gray-600'
        }`}
      >
        <IoIosArrowBack />
      </button>

      {/* Page Numbers */}
      {Array.from({ length: endPage - startPage }, (_, index) => {
        const pageIndex = startPage + index;
        return (
          <button
            key={pageIndex}
            onClick={() => handleClick(pageIndex)}
            className={`px-1  text-sm rounded-md ${
              currentPage === pageIndex
                ? 'bg-gray-700 text-white'
                : 'bg-white text-gray-500 border border-gray-500 hover:bg-gray-400 hover:text-white'
            }`}
          >
            {pageIndex + 1}
          </button>
        );
      })}

      {/* Next Icon */}
      <button
        onClick={() => handleClick(currentPage + 1)}
        disabled={currentPage === totalPages - 1}
        className={`p-1 rounded-full ${
          currentPage === totalPages - 1
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
            : 'bg-gray-500 text-white hover:bg-gray-600'
        }`}
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default Pagination;
