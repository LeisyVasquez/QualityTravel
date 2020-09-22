import React from "react";
import "../style/Objetivo.css";

export const Objetivo = () => {
  return (
    <div className="Objetivo">
      <div className="pos-f-t">
        <div className="collapse" id="navbarToggleExternalContent">
          <div className="bg-dark p-4">
            <h4 className="text-white">Collapsed content</h4>
            <span className="text-muted">Toggleable via the navbar brand.</span>
          </div>
        </div>
        <nav className="navbar navbar-light">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </nav>
      </div>

      <h1 className="titulo2 py-2">Objetivo</h1>

      <h1 className="Descripcion mt-5 mb-4">
        Crear una aplicación web progresiva, enfocada a dispositivos moviles,
        que ayude al usuario a tomar la mejor elección a la hora de visitar los
        parques públicos y privados en el área metropolitana del Valle de
        Aburrá.{" "}
      </h1>
    </div>
  );
};