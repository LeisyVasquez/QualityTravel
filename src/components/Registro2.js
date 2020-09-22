import React from "react";
import { Container } from "react-bootstrap";
import { Navbar } from "react-bootstrap";


export const Registro2 = () => {
  return (
    <div className="Registro2">
      <div className="menu1 mb-5">
        <Navbar expand="lg" variant="dark">
          <Container>
            <Navbar.Brand href="/">Registrate</Navbar.Brand>
          </Container>
        </Navbar>
      </div>
      <Container className="text-center mb-5 mt-5">
        <form className="form-signin mt-4 py-2">
          <label for="inputEmail" class="sr-only">
            Correo electrónico
          </label>
          <input
            type="email"
            id="inputEmail"
            className="form-control"
            placeholder="Correo electrónico"
            required=""
          />
           <label for="inputPassword" class="sr-only">
            Contraseña
          </label>
          <input
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Contraseña"
            required=""
          />
          <label for="inputVerificationPassword" class="sr-only">
            Verificar contraseña
          </label>
          <input
            type="verificationPassword"
            id="inputVerificationPassword"
            className="form-control"
            placeholder="Verificar contraseña"
            required=""
          />
          <div className="checkbox mb-3"></div>
          <button
            className="btn btn-lg Boton1 btn-block mt-5 mb-5"
            type="submit"
          >
            Registrarse
          </button>
          <br></br>
          <p class=" mt-4 text-muted"> © Quality Travel, 2020</p>
        </form>
      </Container>
    </div>
  );
};
