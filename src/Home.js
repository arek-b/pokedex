import React from "react";
import * as Accents from "./Accents";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h1>Welcome to {Accents.Pokedex}!</h1>;
  }
}

export default Home;
