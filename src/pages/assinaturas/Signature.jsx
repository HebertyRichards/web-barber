import { useEffect } from "react";
import Active from "../../header/Active";
import Footer from "../../footer/Footer";
import planosData from "../../data/planos.json";

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
        {planosData.map((plano, index) => (
          <div key={index} className={plano.classe}>
            <div className={`${plano.classe}-pay`}>
              <h3>{plano.nome}</h3>
              <h2>{plano.preco}</h2>
            </div>
            <div className={`${plano.classe}-info`}>
              <table>
                <tbody>
                  {plano.beneficios.map((beneficio, idx) => (
                    <tr key={idx}>
                      <td>{beneficio}</td>
                    </tr>
                  ))}
                  <tr>
                    <td>
                      <a href={plano.link}>Assinar</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Assinatura;
