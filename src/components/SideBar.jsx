import React from "react";
import Modo from "./Modo";
import { Link } from "react-router-dom";
import "../style.css";

function SideBar() {
  const openNav = () => {
    document.querySelector(".sidebar").style.width = "250px";
  };

  const closeNav = () => {
    document.querySelector(".sidebar").style.width = "0";
  };

  return (
    <>
      <Modo openNav={openNav} />
      <div className="sidebar" style={{ width: "0" }}>
        <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
          ×
        </a>
        <img id="icon2" src="../src/assets/icon.png" alt=""></img>
        <Link to="/">Home</Link>
        <Link to="/agendamento">Agendamento</Link>
        <Link to="/assinatura">Assinaturas</Link>
        <Link to="/produtos">Produtos</Link>
        <Link to="/servicos">Serviços</Link>
        <Link to="/painel">painel</Link>
      </div>
    </>
  );
}

export default SideBar;
