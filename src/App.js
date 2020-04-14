import React from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import Navbar from "./Navbar";
import Home from "./Home";
import ResultsContainer from "./ResultsContainer";
import APIConnectionFailed from "./APIConnectionFailed";

const App = () => {
  return (
    <React.StrictMode>
      <Navbar />
      <div className="container mt-4">
        <Router>
          <Home path="/" />
          <ResultsContainer path="/results/" resultsPerPage={10} />
          <APIConnectionFailed path="/api-connection-failed/" />
        </Router>
      </div>
    </React.StrictMode>
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
