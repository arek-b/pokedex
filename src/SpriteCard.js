import React from "react";
import PropTypes from "prop-types";

export default function SpriteCard({ src, alt, description }) {
  if (src === null) return null;
  return (
    <div className="card bg-light card-sprite">
      <img className="card-img-top" src={src} alt={alt} />
      <div className="card-body">
        <p className="card-text text-center">{description}</p>
      </div>
    </div>
  );
}

SpriteCard.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
