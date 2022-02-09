import React, { useState } from "react";
import Error from "./components/Error";
import PropTypes  from "prop-types";



const Formulario = ({ search, saveSearch, saveConsult }) => {

  const [error, saveError] = useState(false);
  const { ciudad, pais } = search;

  const handelChange = (e) => {
    saveSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  const handelSubmit = (e) => {
    e.preventDefault();

    if (ciudad.trim() === "" || pais.trim() === "") {
      saveError(true);
      return;
    }

    saveError(false);
    saveConsult(true)
  };

  return (
    <form onSubmit={handelSubmit}>
      {error && <Error mensaje="Ambos campos son obligatorios"/>}
      <div className="input-field col s12">
        <input
          type="text"
          name="ciudad"
          id="ciudad"
          value={ciudad}
          onChange={handelChange}
        />
        <label htmlFor="ciudad">Ciudad: </label>
      </div>

      <div className="input-field col s12">
        <select name="pais" id="pais" value={pais} onChange={handelChange}>
          <option value="">--Seleccione un país</option>
          <option value="US">Estados Unidos</option>
          <option value="MX">México</option>
          <option value="AR">Argentina</option>
          <option value="CO">Colombia</option>
          <option value="CR">Costa Rica</option>
          <option value="ES">España</option>
          <option value="PE">Perú</option>
        </select>
        <label htmlFor="pais">Pais: </label>
      </div>

      <div className="input-field col s12">
        <input
          type="submit"
          value="Buscar Clima"
          className="waves-effect waves-light btn-large btn-block yellow accent-4"
        />
      </div>
    </form>
  );
};

Formulario.propTypes={
  search: PropTypes.object.isRequired,
  saveSearch: PropTypes.func.isRequired,
  saveConsult:PropTypes.func.isRequired
}
export default Formulario;
