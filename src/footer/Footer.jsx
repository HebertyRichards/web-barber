import React from "react";

function Footer() {
  return (
    <>
      <footer>
        <div className="menu">
          <a href="index.html">Web Barber Shop</a>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
            a beatae. Eum debitis vitae ducimus laboriosam veritatis quas
            doloremque cum!
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
            barbershop@gmail.com
          </p>
        </div>
        <div className="menu3">
          <div className="redes">
            <a id="facebook" href="#"></a>
            <a id="instagram" href="#"></a>
            <a id="linkedin" href="#"></a>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
