import React from "react";
import PropTypes from "prop-types";

export default function Pagination({ currentPage, pageCount, setPage }) {
  let options = [];
  let i = 1;
  do {
    options.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
    ++i;
  } while (i <= pageCount);

  let back = currentPage > 1;
  let next = currentPage < pageCount;

  return (
    <div className="row">
      <div className="col-12 my-pagination">
        <button
          className={`pagination-arrow ${back ? "" : "visibility-hidden"}`}
          onClick={() => setPage(currentPage - 1)}
        >
          &lt;
        </button>
        <select
          className="form-control"
          value={currentPage}
          onChange={(e) => setPage(parseInt(e.target.value))}
          onBlur={(e) => setPage(parseInt(e.target.value))}
        >
          {options}
        </select>
        <button
          className={`pagination-arrow ${next ? "" : "visibility-hidden"}`}
          onClick={() => setPage(currentPage + 1)}
        >
          &gt;
        </button>
        <div>of&nbsp;{pageCount}</div>
      </div>
    </div>
  );
}

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  pageCount: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
};
