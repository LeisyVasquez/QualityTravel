import React from "react";
import "../style/Ppicontainer.css";
import { BrowserRouter, Route } from "react-router-dom";

import { Bienvenida } from "../components/Bienvenida";
import { Inicio } from "../components/Inicio";
import { IniciarSesion } from "../components/IniciarSesion";
import { IniciarGoogle } from "../components/IniciarGoogle";
import { Registro1 } from "../components/Registro1";
import { Registro2 } from "../components/Registro2";
import { RegistroGoogle } from "../components/RegistroGoogle";
import { Objetivo } from "../components/Objetivo";
import { Historia1 } from "../components/Historia1";

export default function Ppicontainer1() {
  return (
    <div className="Ppicontainer">
      <BrowserRouter>
        <React.Fragment>
          <Route path="/Bienvenida" component={Bienvenida} />
          <Route path="/Inicio" component= {Inicio} />
          <Route path="/IniciarSesion" component= {IniciarSesion} />
          <Route path="/IniciarGoogle" component= {IniciarGoogle} />
          <Route path="/Registro1" component= {Registro1} />
          <Route path="/Registro2" component= {Registro2} />
          <Route path="/RegistroGoogle" component= {RegistroGoogle} />
          <Route path="/Objetivo" component={Objetivo} />
          <Route path="/Historia1" component={Historia1} />
        </React.Fragment>
      </BrowserRouter>
      
    </div>
  );
}
