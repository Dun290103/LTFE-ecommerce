import React from "react";

const Pagination = (props) => {
  const { pagination, onPageChange } = props;
  const { _page, _limit, _totalRows } = pagination;

  const totalPages = Math.ceil(_totalRows / _limit);

  const handlePageChange = (newPage) => {
    if (onPageChange && newPage >= 1 && newPage <= totalPages) {
      onPageChange(newPage);

      window.scrollTo({
        top: 0,
        behavior: "smooth", // This adds a smooth scrolling effect
      });
    }
  };

  // Create an array of page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        <li className={`page-item ${_page <= 1 ? "disabled" : ""}`}>
          <button
            className="page-link"
            onClick={() => handlePageChange(_page - 1)}
            disabled={_page <= 1}
          >
            Previous
          </button>
        </li>

        {pageNumbers.map((number) => (
          <li key={number} className={`page-item ${_page === number ? "active" : ""}`}>
            <button className="page-link" onClick={() => handlePageChange(number)}>
              {number}
            </button>
          </li>
        ))}

        <li className={`page-item ${_page >= totalPages ? "disabled" : ""}`}>
          <button
            className="page-link"
            onClick={() => handlePageChange(_page + 1)}
            disabled={_page >= totalPages}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
