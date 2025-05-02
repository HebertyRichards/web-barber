import React from "react";
import { Link } from "react-router-dom";
import "../style.css";

function SideBar2() {
  return (
    <>
      <div className="container">
        <img id="icon" src="../src/assets/icon.png" alt=""></img>
        <Link to="/" className="barber">
          Barbearia Ramos
        </Link>
        <Link to="/">Home</Link>
        <Link to="/agendamento">Agendamento</Link>
        <Link to="/assinaturas">Assinaturas</Link>
        <Link to="/produtos">Produtos</Link>
        <Link to="/servicos">Serviços</Link>
      </div>
    </>
  );
}

export default SideBar2;
