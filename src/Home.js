import React from "react";
import PokemonListContainer from "./PokemonListContainer";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <PokemonListContainer resultsPerPage={10} />
      </div>
    );
  }
}

export default Home;
