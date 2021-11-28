import React from "react";

export default function Publication() {
  return (
    <div>
      <h1>¿Qué te gustaría realizar?</h1>
      <form>
        <label>
          Pregunta: Quieres que te ofrezcan una solución a tu pregunta
        </label>
        <input type="check-box" required />

        <label>
          Discusión: Quieres compartir una experiencia o información
        </label>
        <input type="check-box" />

        <input
          type="description"
          placeholder="Título de la pregunta"
          multiline
          required
        />

        <input
          type="description"
          placeholder="Descripción (Opcional)"
          multiline
        />

        <input type="buttom" value="Publicar" multiline />
      </form>
    </div>
  );
}
