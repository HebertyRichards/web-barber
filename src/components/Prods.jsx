import React from "react";
import "../style.css";

function InfoProds() {
  return (
    <>
      <div className="produtos">
        <h2>Produtos</h2>
      </div>
      <div className="products">
        <div className="Prods">
          <img
            src="./assets/pomada-modeladora.png"
            alt="Pomada Modeladora"
          ></img>
          <h2>Pomada Modeladora</h2>
          <h3>R$ 20,00</h3>
          <button>Comprar Agora</button>
        </div>
        <div className="Prods">
          <img src="./assets/creme-pentear.png" alt="Creme para Pentear"></img>
          <h2>Creme Pentear</h2>
          <h3>R$ 25,00</h3>
          <button>Comprar Agora</button>
        </div>
        <div className="Prods">
          <img src="./assets/gel.png" alt="Gel"></img>
          <h2>Gel</h2>
          <h3>R$ 10,00</h3>
          <button>Comprar Agora</button>
        </div>
        <div className="Prods">
          <img src="./assets/locao-barba.png" alt="loção para barba"></img>
          <h2>Loção Barba</h2>
          <h3>R$ 30,00</h3>
          <button>Comprar Agora</button>
        </div>
      </div>
      <div className="btn-prods">
        <a href="/produtos">Ver mais produtos</a>
      </div>
    </>
  );
}

export default InfoProds;
