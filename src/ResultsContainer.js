import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import PokeAPI from "./PokeAPI";
import Results from "./Results";

export default function ResultsContainer({ resultsPerPage }) {
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
    <Results
      page={page}
      pageCount={pageCount}
      setPage={setPage}
      isLoading={isLoading}
      resultsPerPage={resultsPerPage}
      pokemonList={pokemonList}
    />
  );
}

ResultsContainer.propTypes = {
  resultsPerPage: PropTypes.number.isRequired,
};

ResultsContainer.defaultProps = {
  resultsPerPage: 20,
};
