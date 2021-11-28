import React from 'react';
import { Link } from 'react-router-dom';

import '../components/styles/Footer.css';

export default function Footer() {
  return (
    <nav className="nav">
      <Link to="/" className="nav__link">
        <i className="material-icons nav__icon">call</i>
      </Link>
      <Link to="/map" className="nav__link nav__link">
        <i className="material-icons nav__icon">map</i>
      </Link>
      <Link to="/foro" className="nav__link">
        <i className="material-icons nav__icon">chat</i>
      </Link>
    </nav>
  );
}
