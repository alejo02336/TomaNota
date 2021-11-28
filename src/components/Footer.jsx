import React from "react";
import { Link } from "react-router-dom";

import "../assets/styles/Footer.css";

export default function Footer() {
  return (
    <section className="footer">
      <ul className="footer-container">
        <Link to="/" className="footer-container__item">
          <li>Líneas</li>
        </Link>
        <Link to="/" className="footer-container__item">
          <li>Mapa</li>
        </Link>
        <Link to="/" className="footer-container__item">
          <li>Foro</li>
        </Link>
      </ul>
    </section>
  );
}
