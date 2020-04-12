import React from "react";
import PropTypes from "prop-types";
import PokemonListItemContainer from "./PokemonListItemContainer";

export default function PokemonList({ pokemonList }) {
  return pokemonList.length === 0 ? (
    <div />
  ) : (
    <div className="list-group">
      {pokemonList.map(({ name, url }) => (
        <PokemonListItemContainer key={name} name={name} url={url} />
      ))}
    </div>
  );
}

PokemonList.propTypes = {
  pokemonList: PropTypes.array.isRequired,
};
