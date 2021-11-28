import React from "react";
import { Link } from "react-router-dom";
import "./Foro.css";

export default function Publication() {
  return (
    <section className="publication-container">
      <Link to="/foro">
        <button className="btn-back">Regresar</button>
      </Link>
      <h1>¿Qué te gustaría realizar?</h1>
      <form className="form-container">
        <section className="form-options">
          <input id="question" type="radio" value="question" required />
          <label for="question">
            Pregunta: Quieres que te ofrezcan una solución a tu pregunta
          </label>

          <input id="discution" type="radio" value="discution" />
          <label for="discution">
            Discusión: Quieres compartir una experiencia o información
          </label>
        </section>

        <input
          type="description"
          placeholder="Título de la pregunta"
          required
        />

        <input
          type="description"
          placeholder="Descripción (Opcional)"
          multiline="true"
        />

        <button className="btn-publish font" type="submit">
          Publicar
        </button>
      </form>
    </section>
  );
}
