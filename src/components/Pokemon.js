import React from "react";

class Pokemon extends React.Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.pokemon);
    return (
      <>
        <img
          src={this.props.pokemon.url}
          alt={"Imagen de " + this.props.pokemon.name}
        />
        <h2>{this.props.pokemon.name}</h2>
      </>
    );
  }
}

export default Pokemon;
