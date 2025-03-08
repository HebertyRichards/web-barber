import Active from "../../header/Active";
import Footer from "../../footer/Footer";

function Produtos() {
  return (
    <>
      <div className="back2">
        <Active />
      </div>
      <div className="info-prods">
        <h2>Nossos Produtos</h2>
        <p>
          Confira alguns de nossos produtos, damos desconto caso compre em
          grande quantidade.
        </p>
      </div>
      <div className="catalog-prods">
        <div className="produtos2">
          <img
            src="./assets/pomada-modeladora.png"
            alt="Pomada Modeladora"
          ></img>
          <h2>Pomada Modeladora</h2>
          <h3>R$ 20,00</h3>
          <button>Comprar Agora</button>
        </div>
        <div className="produtos2">
          <img src="./assets/creme-cacho.png" alt="Creme Cachear"></img>
          <h2>Creme Cachear</h2>
          <h3>R$ 25,00</h3>
          <button>Comprar Agora</button>
        </div>
        <div className="produtos2">
          <img src="./assets/gel.png" alt="Gel"></img>
          <h2>Gel</h2>
          <h3>R$ 10,00</h3>
          <button>Comprar Agora</button>
        </div>
        <div className="produtos2">
          <img src="/assets/locao-barba.png" alt="Loção Barba"></img>
          <h2>Loção Barba</h2>
          <h3>R$ 30,00</h3>
          <button>Comprar Agora</button>
        </div>
      </div>
      <div className="catalog-prods2">
        <div className="produtos2">
          <img src="./assets/creme-pentear.png" alt="Creme Pentear"></img>
          <h2>Creme Pentear</h2>
          <h3>R$ 20,00</h3>
          <button>Comprar Agora</button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Produtos;
