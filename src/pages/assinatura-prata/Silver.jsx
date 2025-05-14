import { useSilverTitle } from "../../hooks/useSilver";
import Active from "../../components/Active";
import Footer from "../../components/Footer";
import planosData from "../../data/planos.json";
import "../../styles/silver.css";

const prata = planosData.find((plano) => plano.classe === "silver");

function AssinaturaPrata() {
useSilverTitle("Produtos - Barbearia Ramos")
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
      <div className="silver">
        <div className="silver-pay2">
          <h3>{prata.nome}</h3>
          <hr></hr>
          <h2>{prata.preco}</h2>
        </div>
        <div className="silver-info">
          <table id="table3">
            {prata.beneficios.map((item, index) => (
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

export default AssinaturaPrata;
