import React, { Component } from "react";
import "./Control.css";
import Section from "../../components/Section";

const HOSTNAME = "http://localhost:4000/api/v1/";

export default class Control extends Component {
  constructor(props) {
    super(props);

    this.state = {
      accounts: [],
      products: [],
      name: "ERR",
      userEmail: "Err",
      userName: "Err",
      userLastName: "Err",
      userPassword: "Err",
      userNickName: "Err",
      userDescription: "Err",
    };
  }

  componentDidMount() {
    this.setState({ name: localStorage.getItem("user") });
    this.getAllCounts();
  }

  async getAllCounts() {
    await fetch(`${HOSTNAME}accounts/`)
      .then((response) => response.json())
      .then((data) => {
        // console.log("before", this.state.accounts);
        console.log(data);
        this.setState({ accounts: data });
        // console.log("after", this.state.accounts);
      })
      .catch((err) => console.log(err));
  }

  async createAccount() {
    let jsonData = {
      correo: this.state.userEmail,
      nombre: this.state.userName,
      apellido: this.state.userLastName,
      fechaNacimiento: "2009-11-02T05:00:00.000Z",
      fotoPerfil: null,
      descripcion: this.state.userDescription,
      password: this.state.userPassword,
      alias: this.state.userNickName,
      puntos: 0,
      CuentaTipoCF: 1,
      CuentaGeneroF: 2,
    };

    if (
      jsonData.correo === "Err" ||
      jsonData.nombre === "Err" ||
      jsonData.apellido === "Err" ||
      jsonData.descripcion === "Err" ||
      jsonData.alias === "Err"
    ) {
      alert("Debe digitar todos los espacios");
    } else {
      await fetch(`${HOSTNAME}accounts/`, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(jsonData),
      })
        .then((response) => response.json())
        .then((res) => {
          console.log(res);
          window.location.href = "http://localhost:3000/control";
        })
        .catch((err) => console.log(err));
    }
  }

  logout = () => {
    localStorage.removeItem("admin");
    localStorage.removeItem("user");
    window.location.href = "http://localhost:3000/login";
  };

  render() {
    return (
      <section className="control">
        <h1 className="control-title">Panel de control</h1>
        <h3 className="control-welcome">Bienvenid@ {this.state.name}</h3>

        <input
          type="button"
          value="Salir de la sesión"
          className="control-btn"
          onClick={() => this.logout()}
        />

        {/* create an Account */}

        <form className="control-form-container">
          <h1 className="control-title">Crear usuario</h1>
          <section className="control-form">
            <input
              type="email"
              placeholder="Correo"
              onChange={(e) => this.setState({ userEmail: e.target.value })}
              required
            />

            <input
              placeholder="Nombre"
              onChange={(e) => this.setState({ userName: e.target.value })}
              required
            />

            <input
              placeholder="Apellido"
              onChange={(e) => this.setState({ userLastName: e.target.value })}
              required
            />

            <input
              type="password"
              placeholder="Contraseña"
              onChange={(e) => this.setState({ userPassword: e.target.value })}
              required
            />

            <input
              placeholder="Alias"
              onChange={(e) => this.setState({ userNickName: e.target.value })}
              required
            />

            <input
              maxLength={255}
              placeholder="Descripción"
              onChange={(e) =>
                this.setState({ userDescription: e.target.value })
              }
              required
            />
          </section>
          <input
            type="button"
            value="Crear Cuenta"
            className="control-btn "
            onClick={() => this.createAccount()}
          />
          <h2>Crea usuarios a partir de estas secciones</h2>
        </form>

        {/* table of all users */}
        <section>
          <h1 className="control-title">Usuarios disponibles</h1>
          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Correo</th>
                <th>Alias</th>
                <th>Descripción</th>
                <th>Puntos</th>
                <th>Tipo de cuenta</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {/* <h3>Bienvenid@ {this.state.accounts}</h3> */}
              {this.state.accounts.map((data, index) => {
                // console.log(index, data.nombre);
                return (
                  <Section
                    userName={data.nombre}
                    userLastName={data.apellido}
                    email={data.correo}
                    nickname={data.alias}
                    description={data.descripcion}
                    points={data.puntos}
                    accountType={data.CuentaTipoCF}
                  />
                );
              })}
            </tbody>
          </table>
        </section>
      </section>
    );
  }
}
