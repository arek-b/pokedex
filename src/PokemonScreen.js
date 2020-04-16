import React from "react";
import PropTypes from "prop-types";
import * as Accents from "./Accents";
import SpriteCard from "./SpriteCard";
import PokemonBasicInfo from "./PokemonBasicInfo";

export default function PokemonScreen({ data }) {
  if (data === null)
    return (
      <div>
        <h3>Loading {Accents.Pokemon} data...</h3>
      </div>
    );
  else {
    return (
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-12 col-md-6">
              <h4 className="card-title text-capitalize">{data.name}</h4>
              <PokemonBasicInfo info={data} />
            </div>
            <div className="col-12 col-md-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Sprites</h5>
                  {Object.values(data.sprites).every(
                    (value) => value === null // if every value is null
                  ) ? (
                    <p className="text-muted">
                      No sprites available for this {Accents.Pokemon}
                    </p>
                  ) : (
                    <div className="row sprites-row">
                      <SpriteCard
                        src={data.sprites.front_default}
                        alt="Front sprite"
                        description="Front"
                      />
                      <SpriteCard
                        src={data.sprites.back_default}
                        alt="Back sprite"
                        description="Back"
                      />
                      <SpriteCard
                        src={data.sprites.front_female}
                        alt="Front female sprite"
                        description="Female"
                      />
                      <SpriteCard
                        src={data.sprites.back_female}
                        alt="Back female sprite"
                        description="Female back"
                      />
                      <SpriteCard
                        src={data.sprites.front_shiny}
                        alt="Front sprite (shiny)"
                        description="Front (shiny)"
                      />
                      <SpriteCard
                        src={data.sprites.back_shiny}
                        alt="Back sprite (shiny)"
                        description="Back (shiny)"
                      />
                      <SpriteCard
                        src={data.sprites.front_shiny_female}
                        alt="Front female sprite (shiny)"
                        description="Female (shiny)"
                      />
                      <SpriteCard
                        src={data.sprites.back_shiny_female}
                        alt="Back sprite (shiny)"
                        description="Female back (shiny)"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PokemonScreen.propTypes = {
  data: PropTypes.object,
};
