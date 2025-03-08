import React from "react";
import { Link } from "react-router-dom";
import "../style.css";

function SideBar2() {
  return (
    <>
      <div className="container">
        <img id="icon" src="../src/assets/icon.png" alt=""></img>
        <Link to="/" className="barber">
          Web Barber Shop
        </Link>
        <Link to="/">Home</Link>
        <Link to="/agendamento">Agendamento</Link>
        <Link to="/produtos">Produtos</Link>
        <Link to="/servicos">Serviços</Link>
      </div>
    </>
  );
}

export default SideBar2;
