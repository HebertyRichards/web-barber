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
      <Footer />
    </>
  );
}

export default Assinatura;
