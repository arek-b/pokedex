import React from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import Home from "./Home";

const App = () => {
  return (
    <React.StrictMode>
      <Navbar />
      <div className="container mt-4">
        <Router>
          <Home path="/" />
        </Router>
      </div>
    </React.StrictMode>
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
