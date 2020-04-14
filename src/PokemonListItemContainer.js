import React, { useEffect, useState } from "react";
import PokemonListItem from "./PokemonListItem";
import PropTypes from "prop-types";
import PokeAPI from "./PokeAPI";
import { navigate } from "@reach/router";

export default function PokemonListItemContainer({ name, url }) {
  const [info, setInfo] = useState({});
  const [spriteLoaded, setSpriteLoaded] = useState(false);

  useEffect(() => {
    PokeAPI.get(url).then((apiResult) => {
      if (apiResult) {
        setInfo(apiResult);
      } else navigate("/api-connection-failed/");
    });
  }, [url]);

  return (
    <PokemonListItem
      name={name}
      info={info}
      spriteLoaded={spriteLoaded}
      setSpriteLoaded={setSpriteLoaded}
    />
  );
}

PokemonListItemContainer.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
