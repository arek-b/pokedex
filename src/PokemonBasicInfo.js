import React from "react";
import PropTypes from "prop-types";

export default function PokemonBasicInfo({ info }) {
  return (
    <p>
      EXP gain: {info.base_experience}
      <br />
      Height: {info.height /*dm*/ * 10} cm
      <br />
      Weight: {info.weight /*hg*/ / 10} kg
      <br />
      <span className="text-capitalize">Species: {info.species.name}</span>
    </p>
  );
}

PokemonBasicInfo.propTypes = {
  info: PropTypes.object.isRequired,
};
