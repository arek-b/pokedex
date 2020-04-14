import React from "react";
import * as Accents from "./Accents";

export default class NotFound extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h4>Not found!</h4>
          <p className="text-muted">
            Something went wrong. We couldn&apos;t find any wild{" "}
            {Accents.Pokemon} at this URL.
          </p>
        </div>
      </div>
    );
  }
}
