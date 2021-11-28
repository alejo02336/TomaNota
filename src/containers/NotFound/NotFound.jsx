import React, { Component } from "react";
import "./NotFound.css";

export default class NotFound extends Component {
  render() {
    return (
      <section className="container__error">
        <section className="container__error--details">
          <h2>No tienes acceso</h2>
          {/* <p>Página no encontrada</p> */}
        </section>
      </section>
    );
  }
}
