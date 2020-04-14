import React from "react";
import * as Accents from "./Accents";

export default class APIConnectionFailed extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h4>There was an error connecting to {Accents.PokeAPI}!</h4>
          <p className="text-muted">
            {Accents.PokeAPI} might be down at this moment or there could be a
            problem with your connection. Try again later.
          </p>
        </div>
      </div>
    );
  }
}
