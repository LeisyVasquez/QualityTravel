import React from "react";
import "../style/Bienvenida.css";
import { Redirect } from "react-router-dom";

import Button from "react-bootstrap/Button";

export const Bienvenida = (props) => {
  const { history } = props;

  return (
    <div className="Bienvenida">
      <img className="Logo" src="./imagenes_PPI/Logo1.png" alt="Logo" />
      <h3 className="titulo1">Bienvenido</h3>
      <br></br>
      <h3 className="titulo1">
        Si a un buen parque quieres llegar, Quality Travel debes buscar
      </h3>
      <Button className="Boton1" onClick={() => history.push("/Inicio")}>
        Continuar
      </Button>
      {""}
      {true && <Redirect to="Bienvenida" />}
    </div>
  );
};
