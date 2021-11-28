import React, { Component } from "react";
import "./styles/Section.css";
const HOSTNAME = "http://localhost:4000/api/v1/";

export default class Section extends Component {
  componentDidMount() {
    this.getAllCounts();
  }

  async getAllCounts() {}

  DeleteUser = async (email) => {
    console.log(email);

    await fetch(`${HOSTNAME}accounts/${email}`, { method: "DELETE" })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        window.location.href = "http://localhost:3000/control";
      })
      .catch((err) => console.log(err));
  };

  render() {
    const {
      userName,
      userLastName,
      email,
      nickname,
      description,
      points,
      accountType,
    } = this.props;

    return (
      <tr>
        <td>{userName}</td>
        <td>{userLastName}</td>
        <td>{email}</td>
        <td>{nickname}</td>
        <td>{description != null ? description : "No tiene descripción"}</td>
        <td>{points}</td>
        <td>{accountType}</td>
        <td>
          <button className="" onClick={() => this.DeleteUser(email)}>
            Eliminar
          </button>
        </td>
      </tr>
    );
  }
}
