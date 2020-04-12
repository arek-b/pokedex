import React from "react";
import * as Accents from "./Accents";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>{Accents.Pokedex}</h1>
      </div>
    );
  }
}

export default Home;
