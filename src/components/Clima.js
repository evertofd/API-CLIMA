import React from "react";
import PropTypes  from "prop-types";

const Clima = ({ resultCountry }) => {
  const { name, main } = resultCountry;

  if (!name) return null;

  const kelvin = 273.15;
  return (
    <div className="card-panel white">
      <div className="black-text">
        <h2>El clima de {name} es:</h2>
        <p className="temperatura">
          {parseFloat(main.temp - kelvin, 10).toFixed(2)} <span>&#x2103;</span>
        </p>
        <h6>Temperatura maxima:</h6>
        <p>
          {parseFloat(main.temp_max - kelvin, 10).toFixed(2)} <span>&#x2103;</span>
        </p>
        <h6>temperatura minima</h6>
        <p >
          {parseFloat(main.temp_min - kelvin, 10).toFixed(2)} <span>&#x2103;</span>
        </p>
      </div>
    </div>
  );
};

Clima.propTypes={
  resultCountry: PropTypes.object.isRequired
}

export default Clima;
