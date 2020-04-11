import React, { useState } from "react";
import { Link } from "@reach/router";
import * as Accents from "./Accents";

function Navbar() {
  const [collapse, setCollapse] = useState("");

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-pokedex">
      <Link to="/" className="navbar-brand">
        {Accents.Pokedex}
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
          <li className="nav-item active">
            <Link to="/" className="nav-link">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
