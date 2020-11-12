import React from "react";
import "../stylesheets/App.css";
import PokeList from "./PokeList";
import pokemons from "../data/pokemons.json";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <PokeList pokemons={pokemons} />
      </div>
    );
  }
}

export default App;
