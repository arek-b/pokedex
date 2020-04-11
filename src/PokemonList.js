import React from "react";
import PropTypes from "prop-types";
import PokemonListItem from "./PokemonListItem";

export default function PokemonList({ pokemonList }) {
  console.log(pokemonList);
  return pokemonList.length === 0 ? (
    <div />
  ) : (
    pokemonList.map((pokemon) => (
      <PokemonListItem key={pokemon.name} name={pokemon.name} />
    ))
  );
}

PokemonList.propTypes = {
  pokemonList: PropTypes.array,
};
