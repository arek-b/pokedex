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
}) {
  return (
    <div>
      <div className="row">
        <div className="d-none d-sm-block col-sm-3">
          <Filters filters={filters} />
        </div>
        <div className="col-12 col-sm-9">
          <div className="row">
            <div className="col-5 col-sm-7 col-md-8 col-lg-9 mt-2">
              <h3>
                {totalCount === 0 ? "No" : totalCount} {Accents.Pokemon} found!
              </h3>
            </div>
            <div className="col-7 col-sm-5 col-md-4 col-lg-3">
              <Pagination
                currentPage={page}
                pageCount={pageCount}
                setPage={setPage}
              />
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
};
