import React from "react";
import PropTypes from "prop-types";
import PokemonList from "./PokemonList";
import Pagination from "./Pagination";
import PokemonListLoading from "./PokemonListLoading";
import Filters from "./Filters";
import * as Accents from "./Accents";

export default function Results({
  page,
  pageCount,
  setPage,
  isLoading,
  resultsPerPage,
  pokemonList,
  totalCount,
  filters,
  mobileShowFilters,
  setMobileShowFilters,
}) {
  return (
    <div>
      <div className="row d-md-none mb-3">
        <div className="col-12">
          <button
            type="button"
            className={`btn btn-block ${
              mobileShowFilters ? "btn-secondary" : "btn-dark"
            }`}
            onClick={() => setMobileShowFilters(!mobileShowFilters)}
          >
            {mobileShowFilters ? "Back to results" : "Filters"}
          </button>
        </div>
      </div>
      <div className="row">
        <div
          className={`${
            mobileShowFilters ? "col-12" : "d-none d-md-block"
          } col-md-4 col-lg-3`}
        >
          <Filters filters={filters} />
        </div>
        <div
          className={`${
            mobileShowFilters ? "d-none d-md-block" : "col-12"
          } col-md-8 col-lg-9`}
        >
          <div className="row">
            <div className="col-4 col-sm-7 col-md-8 col-lg-9 mt-2">
              <h4 className="d-none d-sm-block">
                {totalCount === 0 ? "No" : totalCount}{" "}
                <small className="text-muted">{Accents.Pokemon} found!</small>
              </h4>
              <h3 className="d-sm-none">
                {totalCount === 0 ? "No" : totalCount}
              </h3>
            </div>
            <div className="col-8 col-sm-5 col-md-4 col-lg-3">
              {totalCount === 0 ? null : (
                <Pagination
                  currentPage={page}
                  pageCount={pageCount}
                  setPage={setPage}
                />
              )}
            </div>
          </div>
          <div className="row d-sm-none">
            <div className="col-12">
              <h5 className="text-muted">{Accents.Pokemon} found!</h5>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-12">
              {isLoading ? (
                <PokemonListLoading resultsPerPage={resultsPerPage} />
              ) : (
                <PokemonList pokemonList={pokemonList} />
              )}
            </div>
          </div>
          {totalCount === 0 ? null : (
            <div className="row mt-3 mb-5">
              <div className="col-4 col-sm-7 col-md-8 col-lg-9"></div>
              <div className="col-8 col-sm-5 col-md-4 col-lg-3">
                <Pagination
                  currentPage={page}
                  pageCount={pageCount}
                  setPage={setPage}
                />
              </div>
            </div>
          )}
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
  totalCount: PropTypes.number.isRequired,
  filters: PropTypes.object.isRequired,
  mobileShowFilters: PropTypes.bool.isRequired,
  setMobileShowFilters: PropTypes.func.isRequired,
};
