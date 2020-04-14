import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import PokeAPI from "./PokeAPI";
import Results from "./Results";
import { navigate } from "@reach/router";
import { useQueryParam, NumberParam } from "use-query-params";

export default function ResultsContainer({ resultsPerPage }) {
  const [pokemonList, setPokemonList] = useState([]);
  const [page, setPage] = useQueryParam("page", NumberParam);
  const [pageCount, setPageCount] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [totalCount, setTotalCount] = useState(0);
  if (typeof page === "undefined") {
    setPage(1);
  }

  useEffect(() => {
    setPokemonList([]);
    setIsLoading(true);
    PokeAPI.getPaginated(
      "https://pokeapi.co/api/v2/pokemon/",
      page,
      resultsPerPage
    ).then((apiResult) => {
      if (apiResult) {
        setPokemonList(apiResult.results);
        setPageCount(Math.ceil(apiResult.count / resultsPerPage));
        setTotalCount(apiResult.count);
        setIsLoading(false);
      } else navigate("/api-connection-failed/");
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
      totalCount={totalCount}
    />
  );
}

ResultsContainer.propTypes = {
  resultsPerPage: PropTypes.number.isRequired,
};

ResultsContainer.defaultProps = {
  resultsPerPage: 20,
};
