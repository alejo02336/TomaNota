import React from "react";
import { Link } from "react-router-dom";

export default function ReporteInfo() {
  return (
    <section className="report-container">
      <Link to="/map">
        <button className="btn-back">Regresar</button>
      </Link>
      <section className="container-img-subforos">
        <img
          src={require("./Map_información.svg")}
          className="img-subforos"
          alt="example"
        />
      </section>
    </section>
  );
}
