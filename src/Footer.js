import React from "react";
import * as Accents from "./Accents";

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="container pb-2 pt-2">
          <div className="row">
            <div className="col-5">
              {Accents.Pokemon} data provided&nbsp;by{" "}
              <a
                href="https://pokeapi.co/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {Accents.PokeAPI}
              </a>
            </div>
            <div className="col-7 text-right">
              App&nbsp;by Arkadiusz&nbsp;Bergmann
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
