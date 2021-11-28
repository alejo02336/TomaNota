import React, { Fragment } from "react";
import "../../components/styles/Search.css";
import Btn from "../../components/Btn";

const MReporte = () => {
  return (
    <div className="report">
      <h1 className="titulo">¿Que tipo de alerta quieres reportar?</h1>

      <div className="alertas">
        <div className="bola">
          <img src={require("../../components/images/Commercial.png")} alt="" />
        </div>
        <div className="bola">
          <img
            src={require("../../components/images/Warning Shield.png")}
            alt=""
          />
        </div>
        <div className="bola">
          <img src={require("../../components/images/Wrestling.png")} alt="" />
        </div>
        <div className="bola">
          <img src={require("../../components/images/Protect.png")} alt="" />
        </div>
      </div>
      <textarea
        className="reporte"
        placeholder="Describe la experiencia que te genero dicho lugar..."
      ></textarea>

      <img
        className="publicidad"
        src={require("../../components/images/Group 25.png")}
      />

      <Btn />
    </div>
  );
};

export default MReporte;
