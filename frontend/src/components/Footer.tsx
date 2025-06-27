/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

function Footer() {
  return (
    <>
      <footer className="bg-[#242424] text-white text-center mt-[5%] px-6 py-6 flex flex-col gap-12">
        <div className="flex flex-wrap justify-center items-center gap-6">
          <div className="w-full sm:w-1/5 text-left sm:ml-[5%]">
            <Link
              href="/"
              className="text-[1.2rem] font-bold lg:text-[1.8rem] xl:text-[2.5rem]"
              style={{ fontFamily: "ImpactCustom, sans-serif" }}
              aria-label="Início"
            >
              Barbearia Ramos
            </Link>
            <p className="text-white text-left">
              A Barbearia Ramos oferece agendamento online prático e rápido.
              Escolha o serviço, o horário e receba a confirmação por WhatsApp
              ou e-mail. Mais comodidade, agilidade e estilo no seu dia a dia.
            </p>
          </div>
          <div className="w-full sm:w-1/5 text-left sm:ml-[5%]">
            <h2
              className="text-[1rem] font-bold lg:text-[1.5rem] xl:text-[2rem]"
              style={{ fontFamily: "ImpactCustom, sans-serif" }}
            >
              Contato
            </h2>
            <div className="text-white text-left flex items-center mb-1">
              <img
                src="/mapa.webp"
                alt="Endereço"
                className="w-[25px] aspect-square mr-[10px] object-contain"
                />
              São mateus - São Paulo
            </div>
            <div className="text-white text-left flex items-center mb-1">
              <img
                src="/whatsapp.webp"
                alt="WhatsApp"
                className="w-[25px] aspect-square mr-[10px] object-contain"
                />
              WhatsApp: (11) 00000-0000
            </div>
            <div className="text-white text-left flex items-center">
              <img
                src="/msg2.webp"
                alt="Email"
                className="w-[25px] aspect-square mr-[10px] object-contain"
                />
              ramosbarbearia@gmail.com
            </div>
          </div>
          <div className="w-full md:w-1/5 flex flex-col items-center ml-[5%]">
            <h2
              className="text-[1.0rem] font-bold lg:text-[1.5rem] xl:text-[2rem]"
              style={{ fontFamily: "ImpactCustom, sans-serif" }}
            >
              Nossas Redes Sociais
            </h2>
            <div className="flex flex-row">
              <Link
                aria-label="Acesse Nosso Facebook"
                className="w-[30px] aspect-square bg-[url('/Facebook.webp')] bg-contain bg-no-repeat rounded border-none mx-2"
                href="#"
              ></Link>
              <Link
                aria-label="Acesse nosso Instagram"
                className="object-contain w-[30px] h-[30px] bg-[url('/instagram.webp')] bg-contain bg-no-repeat rounded border-none mx-2"
                href="#"
              ></Link>
            </div>
          </div>
        </div>
        <hr className="w-[90%] border-white mx-auto" />
        <p className="text-white text-center">
          © 2025 Barbearia Freitas. Todos os direitos reservados.
        </p>
      </footer>
    </>
  );
}
export default Footer;
