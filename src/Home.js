import React from "react";
import * as Accents from "./Accents";
import PokemonListContainer from "./PokemonListContainer";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Welcome to {Accents.Pokedex}!</h1>
        <PokemonListContainer />
      </div>
    );
  }
}

export default Home;
