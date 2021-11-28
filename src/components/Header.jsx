import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/styles/Header.css";

export default function Header() {
  return (
    <section className="header">
      {/* <img src={logoWeb} className="header_img" alt="Logo Foodhy" /> */}
      <NavLink to="/" className="header_options font" activeClass="active">
        TomaNota
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
