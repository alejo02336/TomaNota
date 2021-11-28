import React from "react";

import "./styles/Search.css";

export default function SearchBarZone() {
  return (
    <section className="search-container">
      <input
        type="text"
        name="Search"
        maxLength={45}
        placeholder="Escribe el nombre del departamento en el que te encuentras"
      />
    </section>
  );
}
