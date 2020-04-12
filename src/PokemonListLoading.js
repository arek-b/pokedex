import React from "react";
import PropTypes from "prop-types";

/**
 * This component is a blank list. It's used as a placeholder so that
 * something can be displayed while waiting for PokeAPI to respond.
 */
export default function PokemonListLoading({ resultsPerPage }) {
  let fakeResults = [];
  for (let i = 0; i < resultsPerPage; ++i) {
    fakeResults.push(
      <li key={i} className="list-group-item">
        <div>
          <h4 className="fake">&nbsp;</h4>
          <div className="sprite-container fake" />
        </div>
      </li>
    );
  }
  return <div className="list-group">{fakeResults}</div>;
}

PokemonListLoading.propTypes = {
  resultsPerPage: PropTypes.number.isRequired,
};
