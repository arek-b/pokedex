import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import PokeAPI from "./PokeAPI";
import { navigate } from "@reach/router";
import PokemonScreen from "./PokemonScreen";

export default function PokemonScreenContainer({ name }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    PokeAPI.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then(
      (apiResult) => {
        if (apiResult) {
          setData(apiResult);
        } else navigate("/api-connection-failed/");
      }
    );
  }, [name]);

  return <PokemonScreen data={data} />;
}

PokemonScreenContainer.propTypes = {
  name: PropTypes.string,
};
