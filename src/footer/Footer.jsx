import React from "react";

function Footer() {
  return (
    <>
      <footer>
        <div className="menu">
          <a href="/">Barbearia Ramos</a>
          <p>
            A Barbearia Ramos oferece agendamento online prático e rápido.
            Escolha o serviço, o horário e receba a confirmação por WhatsApp ou
            e-mail. Mais comodidade, agilidade e estilo no seu dia a dia.
          </p>
        </div>
        <div className="menu2">
          <h2>Contato</h2>
          <p>
            <img src="../assets/mapa.png" alt="Endereço"></img>São mateus - São
            Paulo
          </p>
          <p>
            <img src="../assets/whatsapp.png" alt="WhatsApp"></img>
            WhatsApp: (11) 00000-0000
          </p>
          <p>
            <img src="../assets/msg2.png" alt="Email"></img>
            ramosbarbearia@gmail.com
          </p>
        </div>
        <div className="menu3">
          <div className="redes">
            <a id="facebook" href="#"></a>
            <a id="instagram" href="#"></a>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
