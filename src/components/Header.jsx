import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/styles/Header.css";
import logoWeb from "../assets/static/foodhyContent/foodhy-logo.png";

export default function Header() {
  return (
    <section className="header">
      <img src={logoWeb} className="header_img" alt="Logo Foodhy" />
      <NavLink to="/" className="header_options" activeClass="active">
        Home
      </NavLink>
      <NavLink to="/login" className="header_options" activeClass="active">
        Login
      </NavLink>
      {localStorage.getItem("admin") ? (
        <NavLink to="/control" className="header_options" activeClass="active">
          Control
        </NavLink>
      ) : null}
    </section>
  );
}
