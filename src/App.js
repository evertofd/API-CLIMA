import React, { Fragment, useState, useEffect } from "react";
import Header from "./components/header";
import Formulario from "./Formulario";
import Clima from "./components/Clima";
import Error from "./components/Error";

function App() {
  const [search, saveSearch] = useState({
    ciudad: "",
    pais: "",
  });
  const { ciudad, pais } = search;

  const [consult, saveConsult] = useState(false);
  const [resultCountry, saveResultCountry] = useState({});
  const [error, saveError] = useState(false);

  useEffect(() => {
    const consultApi = async () => {
      if (consult) {
        const appId = "ace55d6130bdc366fed533ccb5071d30";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
        const response = await fetch(url);
        const result = await response.json();

        saveResultCountry(result);
        saveConsult(false);

        if (result.cod === "404") {
          saveError(true);
        } else {
          saveError(false);
        }
      }
    };
    consultApi();
  }, [consult]);

  let component;

  component = error ? (
    <Error mensaje="No hay resultados" />
  ) : (
    <Clima resultCountry={resultCountry} />
  );

  return (
    <Fragment>
      <Header titulo="Clima React App" />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario
                search={search}
                saveSearch={saveSearch}
                saveConsult={saveConsult}
              />
            </div>
            <div className="col m6 s12">{component}</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
