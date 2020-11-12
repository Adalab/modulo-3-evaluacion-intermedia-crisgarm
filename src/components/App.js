import React from "react";
import "../stylesheets/App.css";
import PokeList from "./PokeList";
import pokemons from "../data/pokemons.json";

class App extends React.Component {
  render() {
    return (
      <>
        <header>
          <h1 className="header__title">Mi lista de Pokemons</h1>
        </header>
        <main className="main">
          <PokeList pokemons={pokemons} />
        </main>
      </>
    );
  }
}

export default App;
