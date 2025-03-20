import { useEffect } from "react";
import Active from "../../header/Active";
import Footer from "../../footer/Footer";
import "./silver.css";

function AssinaturaPrata() {
  useEffect(() => {
    document.title = "Assinatura Prata - Barbearia Ramos";
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
      <div className="silver-pay2">
        <h3>COMBO PRATA</h3>
        <hr></hr>
        <h2>R$130/ por mês</h2>
      </div>
      <div className="silver-info">
        <table id="table3">
          <tr>
            <td>5 Cortes por mês</td>
          </tr>
          <tr>
            <td>Acabamento ilimitado</td>
          </tr>
          <tr>
            <td>Sobrancelha ilimitado</td>
          </tr>
          <tr>
            <td>Hidratação</td>
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
      <Footer />
    </>
  );
}

export default AssinaturaPrata;
