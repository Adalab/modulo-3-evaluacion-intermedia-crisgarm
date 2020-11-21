import React from "react";
import Pokemon from "./Pokemon";

class PokeList extends React.Component {
  render() {
    const listPokemons = this.props.pokemons.map((pokemon) => {
      return (
        <li key={pokemon.id} className="list__items">
          <Pokemon pokemon={pokemon} />
        </li>
      );
    });

    return <ul className="list">{listPokemons}</ul>;
  }
}

export default PokeList;
