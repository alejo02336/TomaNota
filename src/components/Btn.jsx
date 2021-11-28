import React from "react";
import "./styles/Search.css";
import { Link } from "react-router-dom";

const Btn = () => {
  return (
    <Link to="/report">
      <button className="abajo font">Reporta un caso</button>
    </Link>
  );
};

export default Btn;
