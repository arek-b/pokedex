import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import PokeAPI from "./PokeAPI";
import Results from "./Results";
import { navigate } from "@reach/router";
import { useQueryParam, NumberParam, ArrayParam } from "use-query-params";

export default function ResultsContainer({ resultsPerPage }) {
  const [pokemonList, setPokemonList] = useState([]);
  const [page, setPage] = useQueryParam("page", NumberParam);
  const [pageCount, setPageCount] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [totalCount, setTotalCount] = useState(0);
  const [selectedTypes, setSelectedTypes] = useQueryParam(
    "pokemonType",
    ArrayParam
  );

  useEffect(() => {
    setPokemonList([]);
    setIsLoading(true);
    PokeAPI.getPaginated(
      "https://pokeapi.co/api/v2/pokemon/",
      page || 1,
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
      page={page || 1}
      pageCount={pageCount}
      setPage={setPage}
      isLoading={isLoading}
      resultsPerPage={resultsPerPage}
      pokemonList={pokemonList}
      totalCount={totalCount}
      filters={{ types: [selectedTypes, setSelectedTypes] }}
    />
  );
}

ResultsContainer.propTypes = {
  resultsPerPage: PropTypes.number.isRequired,
};

ResultsContainer.defaultProps = {
  resultsPerPage: 20,
};
