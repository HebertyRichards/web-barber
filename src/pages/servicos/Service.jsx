import Active from "../../header/Active";
import Footer from "../../footer/Footer";

function Servicos() {
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
        <div className="servicos2">
          <img src="./assets/corte1.png" alt="Corte"></img>
          <h2>Corte</h2>
          <h3>R$ 30,00</h3>
          <a className="redirect" href="/agendamento">
            Agendar
          </a>
        </div>
        <div className="servicos2">
          <img src="./assets/barba.png" alt="Barba"></img>
          <h2>Barba</h2>
          <h3>R$ 25,00</h3>
          <a className="redirect" href="/agendamento">
            Agendar
          </a>
        </div>
        <div className="servicos2">
          <img src="./assets/bigode.png" alt="Bigode"></img>
          <h2>Bigode</h2>
          <h3>R$ 10,00</h3>
          <a className="redirect" href="/agendamento">
            Agendar
          </a>
        </div>
        <div className="servicos2">
          <img src="/assets/careca.png" alt="Máquina Zero"></img>
          <h2>Máquina Geral</h2>
          <h3>R$ 20,00</h3>
          <a className="redirect" href="/agendamento">
            Agendar
          </a>
        </div>
      </div>
      <div className="catalog-services2">
        <div className="servicos2">
          <img src="./assets/corte-barba.png" alt="Corte e Barba"></img>
          <h2>Corte + Barba</h2>
          <h3>R$ 50,00</h3>
          <a className="redirect" href="/agendamento">
            Agendar
          </a>
        </div>
        <div className="servicos2">
          <img src="./assets/penteado.png" alt="Penteado"></img>
          <h2>Penteado</h2>
          <h3>R$ 20,00</h3>
          <a className="redirect" href="/agendamento">
            Agendar
          </a>
        </div>
        <div className="servicos2">
          <img src="./assets/luzes.png" alt="Luzes"></img>
          <h2>Luzes</h2>
          <h3>R$ 65,00</h3>
          <a className="redirect" href="/agendamento">
            Agendar
          </a>
        </div>
        <div className="servicos2">
          <img src="./assets/hidratacao.png" alt="Hidratação"></img>
          <h2>Hidratação</h2>
          <h3>R$ 15,00</h3>
          <a className="redirect" href="/agendamento">
            Agendar
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Servicos;
