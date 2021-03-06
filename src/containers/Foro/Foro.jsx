import React from "react";
import Comment from "../../components/Comment";
import "./Foro.css";
import { Link } from "react-router-dom";
import Banner1 from "../../assets/imgs/Banner1.svg";

export default function Foro() {
  return (
    <section>
      <section>
        <img
          src={Banner1}
          className="banner-pub"
          alt="banner de publicidad programático"
        />
      </section>
      <section className="container-explore">
        <h1>Explora aquí</h1>
        <section className="container-options">
          <Link to="/foro">
            <p className="text-options">Sugerencias</p>
          </Link>
          <Link to="/subforos">
            <p className="text-options">Sub-foros</p>
          </Link>
        </section>
      </section>
      {/* btn create */}
      <Link to="/publication">
        <button className="btn-publication">Comparte tu experiencia</button>
      </Link>

      {/* add comments */}
      <section className="foro-comments-container">
        <Comment
          userName="Margarita111"
          hour="13"
          description="¿Cómo prevenir la violencia contra la mujer en los medios digitales?"
          Ncomment="15"
        />
        <Comment
          userName="User9273"
          hour="1"
          description="Consejos para mi situación..."
          Ncomment="234"
        />
        <Comment
          userName="User23"
          hour="0.3"
          description="¿Un familiar me esta acosando que puedo hacer?"
          Ncomment="89"
        />
        <Comment
          userName="User72"
          hour="32"
          description="¿Qué centros de apoyos recomiendan?"
          Ncomment="2"
        />
        <Comment
          userName="User9"
          hour="12"
          description="Se abre convocatoria gratuita de defensa personal ¿Quién esta interesada?"
          Ncomment="782"
        />
        <Comment
          userName="User532"
          hour="0.2"
          description="¿Qué ayudas económicas existen?"
          Ncomment="12"
        />
      </section>
    </section>
  );
}
