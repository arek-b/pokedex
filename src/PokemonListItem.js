import React from "react";
import { Link } from "@reach/router";
import PropTypes from "prop-types";
import noImage96px from "./../public/noImage96px.png";

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
      className="text-capitalize list-group-item list-group-item-action"
    >
      <div>
        <h4>{name}</h4>
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
