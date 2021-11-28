import React, { useState } from "react";
import "./Login.css";
import GoogleIcon from "../../assets/static/icon/2000px-Google_G_Logo.svg_.png";
import { Link } from "react-router-dom";

const HOSTNAME = "http://localhost:4000/api/v1/";

function Login() {
  // const { control } = this.props;
  // control = true;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const verifyUser = async () => {
    if (email === "" || password === "") {
      alert("Por favor llena los espacios con tu usuario y contreseña");
    } else {
      await fetch(`${HOSTNAME}accounts/${email}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data.password === password) {
            console.log("La contraseña es correcta");
            if (data.CuentaTipoCF === 3) {
              localStorage.setItem("admin", true);
              localStorage.setItem("user", data.nombre + " " + data.apellido);
              // alert("Eres un usuario admin");
              // window.location.reload(false);
              window.location.href = "http://localhost:3000/control";
            } else {
              alert("No tienes permisos usuario admin");
            }
          } else {
            alert("La contraseña no es la correcta");
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <section>
      <form className="login">
        <h1 className="login-title font">Iniciar Sesión</h1>
        <input
          value={email}
          placeholder="Correo"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          value={password}
          placeholder="Contraseña"
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <input
          // type="submit"
          type="button"
          value="Ingresar"
          className="login-btn"
          onClick={() => verifyUser()}
        />
        <h2>O ingresa por otras formas</h2>
        <Link to="/foro" className="social-section">
          <img
            src={GoogleIcon}
            className="social-login"
            alt="Inicia con Google"
          />
          <p>Ingresa con Google</p>
        </Link>
        <Link to="/foro" className="social-section">
          <img
            src={GoogleIcon}
            className="social-login"
            alt="Inicia con Facebook"
          />
          <p>Ingresa con facebook</p>
        </Link>
      </form>
    </section>
  );
}

export default Login;
