import React, { Component } from "react";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <section className="home">
        <section className="home-banner">
          <p className="title-home">TomaNota</p>
          <p>
            Web app que permita desplegar foros donde se pueden compartir:
            recomendaciones, experiencias, zona inseguras y demás
            funcionalidades para crear una comunidad. Cabe añadir que la
            información personal no será visible por otros usuarios, siende de
            forma anónima para guardar la privacidad de la persona.
          </p>
        </section>
      </section>
    );
  }
}
