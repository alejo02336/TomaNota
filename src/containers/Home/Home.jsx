import React, { Component } from "react";
import "./Home.css";
import foodhySlogan from "../../assets/static/foodhyContent/foodhy-slogan.jpg";

export default class Home extends Component {
  render() {
    return (
      <section className="home">
        <section className="home-banner">
          <img
            src={foodhySlogan}
            className="home-banner__img"
            alt="Foodhy Slogan"
          />
          <p>
            Busca el desarrollo de una aplicación para dispositivos móviles como
            una herramienta que ofrece información nutricional al alcance de
            todos, construir una iniciativa de consumo responsable y consciente.
            La app permitirá identificar y obtener la información del producto
            al escanear su código de barras, para luego sugerirle al usuario
            sobre los beneficios de este.
          </p>
        </section>
        <section className="home-services">
          <h1>Servicios</h1>
          <section className="home-services__items">
            <section className="item img1">
              <p>Sugerencias del día</p>
            </section>
            <section className="item img2">
              <p>Perfil con opciones de gamificación</p>
            </section>
            <section className="item img3">
              <p>Lecturas, guías, recetas y más</p>
            </section>
          </section>
        </section>
      </section>
    );
  }
}
