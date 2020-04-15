import React, { useState } from "react";
import { Link } from "@reach/router";
import * as Accents from "./Accents";

function Navbar() {
  const [expand, setExpand] = useState(false);

  return (
    <nav className="navbar navbar-expand-sm navbar-light navbar-pokedex">
      <Link to="/" className="navbar-brand">
        <span className="brand-pokedex">{Accents.Pokedex}</span>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        aria-controls="navbarSupportedContent"
        aria-expanded={expand.toString()}
        aria-label="Toggle navigation"
        onClick={() => setExpand(!expand)}
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className={`collapse ${expand ? "show" : ""} navbar-collapse`}
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={() => setExpand(false)}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/results"
              className="nav-link"
              onClick={() => setExpand(false)}
            >
              {Accents.Pokemon} list
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
