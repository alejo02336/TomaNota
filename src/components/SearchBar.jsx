import React from 'react';
import './styles/Search.css';
export default function SearchBar() {
  return (
    <div className="main">
      <input
        type="text"
        name="Search"
        placeholder="Escribe un tema de interés..."
        className="caja"
      />
    </div>
  );
}
