import React from "react";
import { Container } from "react-bootstrap";
import { Navbar } from "react-bootstrap";


export const Registro1 = () => {
  return (
    <div className="Registro1">
      <div className="menu1">
        <Navbar expand="lg" variant="dark">
          <Container>
            <Navbar.Brand href="/">Registrate</Navbar.Brand>
          </Container>
        </Navbar>
      </div>
      <Container className="text-center">
        <form className="form-signin mt-4 py-1">
          <label for="inputName" class="sr-only">
            Nombre completo
          </label>
          <input
            type="name"
            id="inputName"
            className="form-control"
            placeholder="Nombre completo"
            required=""
            autofocus=""
          />
          <label for="inputNameUser" class="sr-only">
            Nombre de usuario
          </label>
          <input
            type="nameUser"
            id="inputNameUser"
            className="form-control"
            placeholder="Nombre de usuario"
            required=""
          />
          <label for="inputBirth" class="sr-only">
            Fecha de nacimiento
          </label>
          <input
            type="birth"
            id="inputBirth"
            className="form-control"
            placeholder="Fecha de nacimiento"
            required=""
          />
          <div className="checkbox mb-3"></div>
          <button
            className="btn btn-lg Boton1 btn-block mt-1 mb-3"
            type="submit"
          >
            Registrarse
          </button>
          <br></br>
          <button className="btn btn-lg Boton1 btn-block" type="submit">
            <img
              className="Icon"
              src="./imagenes_PPI/IconFacebook1.png"
              alt="Facebook"
            />
            Registrarse con Facebook
          </button>
          <button class="btn btn-lg Boton1 btn-block" type="submit">
            <img
              className="Icon"
              src="./imagenes_PPI/IconGoogle1.png"
              alt="Google"
            />
            Registrarse con Google
          </button>
          <p class="mb-3 text-muted"> © Quality Travel, 2020</p>
        </form>
      </Container>
    </div>
  );
};
