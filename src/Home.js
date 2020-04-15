import React from "react";
import * as Accents from "./Accents";
import { Link } from "@reach/router";

export default class Home extends React.Component {
  render() {
    return (
      <div className="jumbotron text-center">
        <h1 className="mb-4">Welcome to {Accents.Pokedex}</h1>
        <Link to="/results">
          <button type="button" className="btn btn-dark px-3 py-2">
            BROWSE {Accents.Pokemon.toUpperCase()}
          </button>
        </Link>
      </div>
    );
  }
}
