import React from "react";
import "./styles/InfoContainer.css";
import UserIcon from "../assets/static/icon/userIcon.svg";

export default function InfoContainer({userName, description, Ncomment }) {
    return (
        <section className="container-info">
            {/* info */}

            {/* comment */}
            <section className="container-info-description">
                <p>{userName}</p>
                <p>{description}</p>
                <p>{Ncomment}</p>
            </section>
        </section>
    );
}
