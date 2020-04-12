import React, { useEffect, useState } from "react";
import PokemonListItem from "./PokemonListItem";
import PropTypes from "prop-types";
import PokeAPI from "./PokeAPI";

export default function PokemonListItemContainer({ name, url }) {
  const [info, setInfo] = useState({});
  const [spriteLoaded, setSpriteLoaded] = useState(false);

  useEffect(() => {
    PokeAPI.get(url).then((apiResult) => {
      console.log(apiResult);
      setInfo(apiResult);
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
