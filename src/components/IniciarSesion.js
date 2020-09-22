import React from "react";
import { Container } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import "../style/IniciarSesion.css";

export const IniciarSesion = () => {
  return (
    <div className="IniciarSesion">
      <div className="menu1">
        <Navbar  expand="lg" variant="dark" bg="">
          <Container>
            <Navbar.Brand href="/">Iniciar sesión</Navbar.Brand>
          </Container>
        </Navbar>
      </div>
      <Container className="text-center">
        <form className="form-signin mt-5 py-4">
          <label for="inputEmail" class="sr-only"> Correo electrónico</label>
          <input
            type="email"
            id="inputEmail"
            className="form-control"
            placeholder="Correo electrónico"
            required=""
            autofocus=""
          />
          <label for="inputPassword" class="sr-only">Contraseña</label>
          <input
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Contraseña"
            required=""
          />
          <div className="checkbox mb-3"></div>
          <button className="btn btn-lg Boton1 btn-block mt-0 mb-2" type="submit">
            Iniciar sesión
          </button>
          <br></br>
          <button className="btn btn-lg Boton1 btn-block" type="submit">
          <img className="Icon" src="./imagenes_PPI/IconFacebook1.png" alt="Facebook" />
             Iniciar sesión con Facebook
          </button>
          <button class="btn btn-lg Boton1 btn-block" type="submit">
          <img className="Icon" src="./imagenes_PPI/IconGoogle1.png" alt="Google" />
             Iniciar sesión con Google
          </button>
          <p class="mb-3 text-muted"> © Quality Travel, 2020</p>
        </form>
      </Container>
    </div>
  );
};




