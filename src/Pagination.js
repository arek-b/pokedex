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

  return (
    <div className="input-group">
      <div className="input-group-prepend">
        <span className="input-group-text">Page</span>
      </div>
      <select
        className="form-control"
        value={currentPage}
        onChange={(e) => setPage(parseInt(e.target.value))}
        onBlur={(e) => setPage(parseInt(e.target.value))}
      >
        {options}
      </select>
      <div className="input-group-append">
        <span className="input-group-text">of {pageCount}</span>
      </div>
    </div>
  );
}

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  pageCount: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
};
