import React from "react";
import { Link } from "@reach/router";
import PropTypes from "prop-types";
import noImage96px from "./assets/noImage96px.png";
import PokemonBasicInfo from "./PokemonBasicInfo";

export default function PokemonListItem({
  name,
  info,
  spriteLoaded,
  setSpriteLoaded,
}) {
  let src = noImage96px;
  if (info.sprites && info.sprites.front_default) {
    src = info.sprites.front_default;
  }
  return (
    <Link
      to={`/pokemon/${name}`}
      className="list-group-item list-group-item-action"
    >
      <div>
        <h4 className="text-capitalize">{name}</h4>
        <div className="pokemon-info-container">
          <div className="sprite-container">
            {info.sprites ? (
              <img
                src={src}
                alt={"Pokemon sprite"}
                className={`sprite ${spriteLoaded ? "sprite-loaded" : ""}`}
                onLoad={() => setSpriteLoaded(true)}
              ></img>
            ) : (
              ""
            )}
          </div>
          <div className="pokemon-info">
            {Object.keys(info).length === 0 ? null : (
              <PokemonBasicInfo info={info} />
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

PokemonListItem.propTypes = {
  name: PropTypes.string.isRequired,
  info: PropTypes.object.isRequired,
  spriteLoaded: PropTypes.bool.isRequired,
  setSpriteLoaded: PropTypes.func.isRequired,
};
