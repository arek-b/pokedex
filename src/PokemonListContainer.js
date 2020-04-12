import React, { useEffect, useState } from "react";
import PokemonList from "./PokemonList";
import PokeAPI from "./PokeAPI";
import Pagination from "./Pagination";

export default function PokemonListContainer() {
  const [pokemonList, setPokemonList] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const resultsPerPage = 15;

  useEffect(() => {
    setPokemonList([]);
    PokeAPI.getPaginated(
      "https://pokeapi.co/api/v2/pokemon/",
      page,
      resultsPerPage
    ).then((apiResult) => {
      setPokemonList(apiResult.results);
      setPageCount(Math.ceil(apiResult.count / resultsPerPage));
    });
  }, [page]);
  return (
    <div>
      <div className="row">
        <div className="col-4 col-sm-7 col-md-8 col-lg-9"></div>
        <div className="col-8 col-sm-5 col-md-4 col-lg-3">
          <Pagination
            currentPage={page}
            pageCount={pageCount}
            setPage={setPage}
          />
        </div>
      </div>
      <PokemonList pokemonList={pokemonList} />
    </div>
  );
}
