import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import PokeAPI from "./PokeAPI";
import { navigate } from "@reach/router";
import PokemonScreen from "./PokemonScreen";

export default function PokemonScreenContainer({ name }) {
  const [data, setData] = useState(null);
  const isMounted = useRef(true);

  useEffect(() => {
    PokeAPI.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then(
      (apiResult) => {
        if (apiResult) {
          if (isMounted.current) setData(apiResult);
        } else navigate("/api-connection-failed/");
      }
    );
    return () => {
      isMounted.current = false;
    };
  }, [name]);

  return <PokemonScreen data={data} />;
}

PokemonScreenContainer.propTypes = {
  name: PropTypes.string,
};
