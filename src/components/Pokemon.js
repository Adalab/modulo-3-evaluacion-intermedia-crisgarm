import React from "react";

class Pokemon extends React.Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }

  render() {
    const types = this.props.pokemon.types.map((type) => {
      return <p>{type}</p>;
    });
    return (
      <>
        <img
          src={this.props.pokemon.url}
          alt={"Imagen de " + this.props.pokemon.name}
        />
        <h2>{this.props.pokemon.name}</h2>
        <div>{types}</div>
      </>
    );
  }
}

export default Pokemon;
