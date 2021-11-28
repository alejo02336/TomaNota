import React from "react";
import { Link } from "react-router-dom";

import "../assets/styles/Footer.css";

export default function Footer() {
  return (
    <section className="footer">
      <ul className="footer-container">
        <Link to="/" className="footer-container__item">
          <li>Contacto</li>
        </Link>
        <Link to="/" className="footer-container__item">
          <li>Términos y condiciones</li>
        </Link>
        <Link to="/" className="footer-container__item">
          <li>Nosotros</li>
        </Link>
      </ul>
    </section>
  );
}
