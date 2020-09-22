import React from "react";
import "../style/Historia1.css";

export const Historia1 = () => {
  return (
    <div className="Historia1">
      <div className="pos-f-t">
        <div class="collapse" id="navbarToggleExternalContent">
          <div class="bg-dark">
            <h4 class="text-white">Collapsed content</h4>
            <span class="text-muted">Toggleable via the navbar brand.</span>
          </div>
        </div>
        <nav class="navbar navbar-light">
          <button
            class="navbar-toggler"
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
      <h1 className="titulo3 mt-4 mb-4 text-center">Historia</h1>
      <p className="descripcion mt-2 mr-2 ml-2 mb-2">
        En el siglo XVII el cerro fue uno de los primeros contactos de Medellín
        con el mundo, este camino se haci­a llamar el camino de piedras blancas
        que llevaba directo al rio magdalena, a partir de este camino se crearon
        los primeros barrios vecinos, como lo es en el caso del barrio Llanaditas el cual fue creado en 1950.{" "}
      </p>
    </div>
  );
};
