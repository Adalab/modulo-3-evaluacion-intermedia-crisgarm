import React from "react";
import Pokemon from "./Pokemon";

class PokeList extends React.Component {
  render() {
    const listPokemons = this.props.pokemons.map((pokemon) => {
      return (
        <li key={pokemon.id}>
          <Pokemon pokemon={pokemon} />
        </li>
      );
    });

    return <ul>{listPokemons}</ul>;
  }
}
export default PokeList;
