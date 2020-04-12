import React from "react";
import PropTypes from "prop-types";
import PokemonList from "./PokemonList";
import Pagination from "./Pagination";
import PokemonListLoading from "./PokemonListLoading";

export default function Results({
  page,
  pageCount,
  setPage,
  isLoading,
  resultsPerPage,
  pokemonList,
}) {
  return (
    <div>
      <div className="row">
        <div className="col-5 col-sm-7 col-md-8 col-lg-9">
          <h2>Results</h2>
        </div>
        <div className="col-7 col-sm-5 col-md-4 col-lg-3">
          <Pagination
            currentPage={page}
            pageCount={pageCount}
            setPage={setPage}
          />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-12">
          {isLoading ? (
            <PokemonListLoading resultsPerPage={resultsPerPage} />
          ) : (
            <PokemonList pokemonList={pokemonList} />
          )}
        </div>
      </div>
      <div className="row mt-3 mb-5">
        <div className="col-5 col-sm-7 col-md-8 col-lg-9"></div>
        <div className="col-7 col-sm-5 col-md-4 col-lg-3">
          <Pagination
            currentPage={page}
            pageCount={pageCount}
            setPage={setPage}
          />
        </div>
      </div>
    </div>
  );
}

Results.propTypes = {
  page: PropTypes.number.isRequired,
  pageCount: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  resultsPerPage: PropTypes.number.isRequired,
  pokemonList: PropTypes.array.isRequired,
};
