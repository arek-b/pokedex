import React, { useEffect, useState, useRef } from "react";
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
  const [mobileShowFilters, setMobileShowFilters] = useState(false);
  const [selectedTypes, setSelectedTypes] = useQueryParam(
    "pokemonType",
    ArrayParam
  );

  // reset page number when one of the filters changes
  const isFirstRun = useRef(true);
  useEffect(() => {
    // skip first run to preserve page number from url
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    setPage(1);
  }, [selectedTypes, setPage]);

  useEffect(() => {
    setPokemonList([]);
    setIsLoading(true);

    if (selectedTypes && selectedTypes.length > 0) {
      const urls = selectedTypes.map(
        (pokemonType) => `https://pokeapi.co/api/v2/type/${pokemonType}`
      );
      PokeAPI.getAll(urls).then((apiResults) => {
        // checks whether api result has error
        const unsuccessful = (apiResult) => apiResult === false;
        if (apiResults.some(unsuccessful)) {
          navigate("/api-connection-failed/");
          return;
        }
        let newPokemonList = [];
        let newTotalCount = 0;
        apiResults.forEach((apiResult) => {
          if (!apiResult.pokemon || apiResult.pokemon.length === 0) return;
          let pokemon = apiResult.pokemon.map(({ pokemon }) => pokemon);
          newPokemonList = [...newPokemonList, ...pokemon];
        });

        // removes duplicates
        let seen = {};
        newPokemonList = newPokemonList.filter(function (item) {
          let key = item.name;
          return Object.prototype.hasOwnProperty.call(seen, key)
            ? false
            : (seen[key] = true);
        });

        newTotalCount = newPokemonList.length;
        newPokemonList = newPokemonList.sort((a, b) => a.name > b.name);
        newPokemonList = newPokemonList.slice(
          resultsPerPage * (page - 1),
          resultsPerPage * page
        );
        setPokemonList(newPokemonList);
        setPageCount(Math.ceil(newTotalCount / resultsPerPage));
        setTotalCount(newTotalCount);
        setIsLoading(false);
      });
    } else {
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
    }
  }, [page, resultsPerPage, selectedTypes]);
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
      mobileShowFilters={mobileShowFilters}
      setMobileShowFilters={setMobileShowFilters}
    />
  );
}

ResultsContainer.propTypes = {
  resultsPerPage: PropTypes.number.isRequired,
};

ResultsContainer.defaultProps = {
  resultsPerPage: 20,
};
