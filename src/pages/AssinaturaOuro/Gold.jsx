import { useEffect } from "react";
import Active from "../../header/Active";
import Footer from "../../footer/Footer";
import "./gold.css";

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
          ></input>
          <input
            type="text"
            id="nome3"
            name="nome"
            placeholder="Seu Nome"
          ></input>
        </div>
      </form>
      <div className="gold-pay2">
        <h3>COMBO OURO</h3>
        <hr></hr>
        <h2>R$210/ por mês</h2>
      </div>
      <div className="gold-info">
        <table id="table3">
          <tr>
            <td>Corte ilimitado</td>
          </tr>
          <tr>
            <td>Sobrancelha ilimitado</td>
          </tr>
          <tr>
            <td>Barba ilimitada</td>
          </tr>
          <tr>
            <td>Depilação orelha ou nariz</td>
          </tr>
          <tr>
            <td>Nutrição</td>
          </tr>
          <tr>
            <td>Hidratação</td>
          </tr>
          <tr>
            <td>30% Desc. produto/serviço</td>
          </tr>
          <tr>
            <td>
              <a href="/#">Assinar</a>
            </td>
          </tr>
        </table>
      </div>
      <Footer />
    </>
  );
}

export default AssinaturaOuro;
