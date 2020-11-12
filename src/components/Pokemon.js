import React from "react";

class Pokemon extends React.Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }

  render() {
    const types = this.props.pokemon.types.map((type) => {
      return <p className="list__items--text">{type}</p>;
    });
    return (
      <>
        <img
          src={this.props.pokemon.url}
          alt={"Imagen de " + this.props.pokemon.name}
          className="list__items--image"
        />
        <h2 className="list__items--title">{this.props.pokemon.name}</h2>
        <div className="list__items--container">{types}</div>
      </>
    );
  }
}

export default Pokemon;
