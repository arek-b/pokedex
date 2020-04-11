import React, { useEffect, useState } from "react";
import PokemonList from "./PokemonList";
import PokeAPI from "./PokeAPI";

export default function PokemonListContainer() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    // get pokemon list from api
    PokeAPI.get("https://pokeapi.co/api/v2/pokemon/").then((apiResult) => {
      setPokemonList(apiResult.results);
    });
  }, []);

  return <PokemonList pokemonList={pokemonList} />;
}
