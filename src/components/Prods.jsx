import "../styles/style.css";
import produtosData from "../data/produtos.json";

function InfoProds() {
  return (
    <>
      <div className="produtos">
        <h2>Produtos</h2>
      </div>
      <div className="products">
        {produtosData.slice(0, 4).map((item) => (
          <div className="Prods" key={item.id}>
            <img src={item.imagem} alt={item.produto} />
            <h2>{item.produto}</h2>
            <h3>{item.preco}</h3>
            <button>Comprar Agora</button>
          </div>
        ))}
      </div>
      <div className="btn-prods">
        <a href="/produtos">Ver mais produtos</a>
      </div>
    </>
  );
}

export default InfoProds;
