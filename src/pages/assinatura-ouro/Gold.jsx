import { useEffect } from "react";
import Active from "../../header/Active";
import Footer from "../../footer/Footer";
import planosData from "../../data/planos.json";
import "./gold.css";

const ouro = planosData.find((plano) => plano.classe === "gold");

function AssinaturaOuro() {
  useEffect(() => {
    document.title = "Assinatura Ouro - Barbearia Ramos";
  }, []);
  return (
    <>
      <div className="back2">
        <Active />
      </div>
      <form id="formulario3" onSubmit={"#"}>
        <div className="info-sign">
          <input
            type="tel"
            id="telefone3"
            name="telefone"
            placeholder="Telefone com DD"
          />
          <input type="text" id="nome3" name="nome" placeholder="Seu Nome" />
        </div>
      </form>
      <div className="gold">
        <div className="gold-pay2">
          <h3>{ouro.nome}</h3>
          <hr />
          <h2>{ouro.preco}</h2>
        </div>
        <div className="gold-info">
          <table id="table3">
            {ouro.beneficios.map((item, index) => (
              <tr key={index}>
                <td>{item}</td>
              </tr>
            ))}
            <tr>
              <td>
                <a href="#">Assinar</a>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AssinaturaOuro;
