import React, { useEffect, useState } from "react";
import PokemonList from "./PokemonList";

export default function PokemonListContainer() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    // get pokemon list from api
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then((response) => response.json(), console.error)
      .then(({ results }) => {
        console.log(results);
        setPokemonList(results);
      }, console.error);
  }, []);

  return <PokemonList pokemonList={pokemonList} />;
}
