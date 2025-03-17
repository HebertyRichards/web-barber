import { useEffect } from "react";
import Active from "../../header/Active";
import Footer from "../../footer/Footer";

function Assinatura() {
  useEffect(() => {
    document.title = "Assinatura - Barbearia Ramos";
  }, []);

  return (
    <>
      <div className="back2">
        <Active />
      </div>
      <div className="info-sign">
        <h2>ESCOLHA UM PLANO E FIQUE NOVO SEM PARAR!</h2>
        <p>
          Na Barbearia Ramos, acreditamos que estilo e cuidado são inseparáveis.
          Apresentamos as Assinaturas Exclusivas para quem busca uma experiência
          premium.
        </p>
      </div>
      <div className="plans">
        <div className="bronze">
          <div className="bronze-pay">
            <h3>COMBO BRONZE</h3>
            <h2>R$70/ por mês</h2>
          </div>
          <div className="bronze-info">
            <table>
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
                  <button>ASSINAR</button>
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div className="silver">
          <div className="silver-pay">
            <h3>COMBO PRATA</h3>
            <h2>R$110/ por mês</h2>
          </div>
          <div className="silver-info">
            <table>
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
                  <button>ASSINAR</button>
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div className="gold">
          <div className="gold-pay">
            <h3>COMBO OURO</h3>
            <h2>R$210/ por mês</h2>
          </div>
          <div className="gold-info">
            <table>
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
                  <button>ASSINAR</button>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Assinatura;
