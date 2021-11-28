import React from "react";
import "./styles/Comment.css";
import UserIcon from "../assets/static/icon/userIcon.svg";

export default function Comment({ userName, hour, description, Ncomment }) {
  return (
    <section className="container-comment">
      {/* info */}
      <section className="container-comment-info">
        <img
          src={UserIcon}
          alt="imagen de usuario"
          className="img-comment-info"
        />
        <p>{userName}</p>
        <p>{hour} hr</p>
      </section>
      {/* comment */}
      <section className="container-comment-description">
        <p>{description}</p>
        <p>{Ncomment} respuestas</p>
      </section>
    </section>
  );
}
