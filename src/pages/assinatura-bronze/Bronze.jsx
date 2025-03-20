import { useEffect } from "react";
import Active from "../../header/Active";
import Footer from "../../footer/Footer";
import "./bronze.css";

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
          ></input>
          <input
            type="text"
            id="nome3"
            name="nome"
            placeholder="Seu Nome"
          ></input>
        </div>
      </form>
      <div className="bronze">
        <div className="bronze-pay2">
          <h3>COMBO BRONZE</h3>
          <hr></hr>
          <h2>R$70/ por mês</h2>
        </div>
        <div className="bronze-info">
          <table id="table3">
            <tr>
              <td>3 Cortes por mês</td>
            </tr>
            <tr>
              <td>Acabamento ilimitado</td>
            </tr>
            <tr>
              <td>Nenhum</td>
            </tr>
            <tr>
              <td>Nenhum</td>
            </tr>
            <tr>
              <td>Nenhum</td>
            </tr>
            <tr>
              <td>Nehnum</td>
            </tr>
            <tr>
              <td>20% Desc. produto/serviço</td>
            </tr>
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
