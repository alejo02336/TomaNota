import React from "react";
import "./Lineas.css";
import SearchBarZone from '../../components/SearchBarZone.jsx';
import InfoContainer from '../../components/InfoContainer';

export default function Lineas() {
  return (
    <section>
      <SearchBarZone />

      <section>
        <InfoContainer
          userName="Zona Norte"
          description="El Águila - Ansermanuevo - El Cairo - Ulloa - Argelia - Alcalá - Cartago - Obando"
          Ncomment="310 561 0381 - Omar Gómez Celiz"
        />

        <InfoContainer
          userName="Espacios seguros"
          description="A la vuelta de la esquina"
          Ncomment="Link"
        />
      </section>
      <section>
        <section>
          <img
            src={require("./Lineas.svg")}
            className="img-lineas"
            alt="example"
          />
        </section>
      </section>
    </section>


  );
}