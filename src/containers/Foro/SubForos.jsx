import React from "react";
import "./Foro.css";
import { Link } from "react-router-dom";

export default function Lineas() {
  return (
    <section>
      <section>
        <section className="container-explore">
          <h1>Explora aquí</h1>
          <section className="container-options">
            <Link to="/foro">
              <p className="text-options">Sugerencias</p>
            </Link>
            <Link to="/subforos">
              <p className="text-options">Sub-foros</p>
            </Link>
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
