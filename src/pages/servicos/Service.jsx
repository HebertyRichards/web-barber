import { useServiceTitle } from "../../hooks/useService";
import Active from "../../components/Active";
import Footer from "../../components/Footer";
import servicosData from "../../data/servicos.json";

function Servicos() {
useServiceTitle("Serviços - Barbearia Ramos")

  return (
    <>
      <div className="back2">
        <Active />
      </div>
      <div className="info-services">
        <h2>Nossos Serviços</h2>
        <p>Corte / Química / Barba </p>
      </div>
      <div className="catalog-services">
        {servicosData.map((item) => (
          <div className="servicos2" key={item.id}>
            <img src={item.imagem} alt={item.servico}></img>
            <h2>{item.servico}</h2>
            <h3>{item.preco}</h3>
            <a className="redirect" href="/agendamento">
              Agendar
            </a>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Servicos;
