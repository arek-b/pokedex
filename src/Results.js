import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import PokemonList from "./PokemonList";
import PokeAPI from "./PokeAPI";
import Pagination from "./Pagination";
import PokemonListLoading from "./PokemonListLoading";

export default function Results({ resultsPerPage }) {
  const [pokemonList, setPokemonList] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setPokemonList([]);
    setIsLoading(true);
    PokeAPI.getPaginated(
      "https://pokeapi.co/api/v2/pokemon/",
      page,
      resultsPerPage
    ).then((apiResult) => {
      setPokemonList(apiResult.results);
      setPageCount(Math.ceil(apiResult.count / resultsPerPage));
      setIsLoading(false);
    });
  }, [page, resultsPerPage]);
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
  resultsPerPage: PropTypes.number.isRequired,
};

Results.defaultProps = {
  resultsPerPage: 20,
};
