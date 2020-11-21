import React from "react";
import PropTypes from "prop-types";

class Pokemon extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const types = this.props.pokemon.types.map((type, index) => {
      return (
        <p key={index} className="list__items--text">
          {type}
        </p>
      );
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

Pokemon.defaultProps = {
  name: "Pokemon desconocido",
  url: "../images/pokemon-bola.png",
  types: "Tipo desconocido",
};

Pokemon.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  types: PropTypes.array,
};
export default Pokemon;
