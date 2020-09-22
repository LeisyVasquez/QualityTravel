import React from "react";
import { Button } from 'react-bootstrap';
import "../style/Inicio.css";


export const Inicio = () => {
  return (
    <div className="Inicio mt-5 mb-2"> 
      <img className="Logo" src="./imagenes_PPI/Logo1.png" alt="Logo" />     
      <Button className="Boton2 py-2"> Iniciar sesión </Button>{' '}
      <Button className="Boton2 py-2">  Registrarse  </Button>{' '}
    </div>
  );
}