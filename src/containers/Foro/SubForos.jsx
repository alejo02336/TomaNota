import React from "react";
import "./Foro.css";

export default function Lineas() {
  return (
    <section>
      <section>
        <section className="container-explore">
          <h1>Explora aquí</h1>
          <section className="container-options">
            <p>Sugerencias</p>
            <p>Sub-foros</p>
          </section>
        </section>
        <img
          src={require("./Foro_Sub-foros.svg")}
          className="img-lineas"
          alt="example"
        />
      </section>
    </section>
  );
}
