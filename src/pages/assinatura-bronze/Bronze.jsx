import { useEffect } from "react";
import Active from "../../header/Active";
import Footer from "../../footer/Footer";
import planosData from "../../data/planos.json";
import "../../styles/bronze.css";

const bronze = planosData.find((plano) => plano.classe === "bronze");

function AssinaturaBronze() {
  useEffect(() => {
    document.title = "Assinatura Bronze - Barbearia Ramos";
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
      <div className="bronze">
        <div className="bronze-pay2">
          <h3>{bronze.nome}</h3>
          <hr />
          <h2>{bronze.preco}</h2>
        </div>
        <div className="bronze-info">
          <table id="table3">
            {bronze.beneficios.map((item, index) => (
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

export default AssinaturaBronze;
