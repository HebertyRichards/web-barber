import { useEffect } from "react";
import Active from "../../header/Active";
import Footer from "../../footer/Footer";
import produtosData from "../../data/produtos.json";

function Produtos() {
  useEffect(() => {
    document.title = "Produtos - Barbearia Ramos";
  }, []);

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
        {produtosData.map((item) => (
          <div className="produtos2" key={item.id}>
            <img src={item.imagem} alt={item.produto}></img>
            <h2>{item.produto}</h2>
            <h3>{item.preco}</h3>
            <button>Comprar Agora</button>
          </div>
        ))}
        
      </div>
      <Footer />
    </>
  );
}

export default Produtos;
