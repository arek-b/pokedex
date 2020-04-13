import React, { useState } from "react";
import { Link } from "@reach/router";
import * as Accents from "./Accents";

function Navbar() {
  const [collapse, setCollapse] = useState("");

  return (
    <nav className="navbar navbar-expand-lg navbar-light navbar-pokedex">
      <Link to="/" className="navbar-brand">
        <span className="brand-pokedex">{Accents.Pokedex}</span>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={() => setCollapse(collapse == "" ? "show" : "")}
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className={`collapse ${collapse} navbar-collapse`}
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/results" className="nav-link">
              All {Accents.Pokemon}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
