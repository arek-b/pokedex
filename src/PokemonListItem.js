import React from "react";
import { Link } from "@reach/router";
import PropTypes from "prop-types";

export default function PokemonListItem({ name }) {
  return (
    <li>
      <div className="row">
        <div className="col-12">
          <Link to={`/pokemon/${name}`} className="text-capitalize">
            {name}
          </Link>
        </div>
      </div>
    </li>
  );
}

PokemonListItem.propTypes = {
  name: PropTypes.string.isRequired,
};
