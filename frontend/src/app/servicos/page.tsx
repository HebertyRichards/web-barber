/* eslint-disable @next/next/no-img-element */
import servicosData from "../../data/servicos.json";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Barbearia Ramos - Serviços",
  description: "Na Barbearia Ramos, te deixamos novo de novo sempre!",
  openGraph: {
    title: "Barbearia Ramos - Serviços",
    description: "Na Barbearia Ramos, te deixamos novo de novo sempre!",
  },
};

function Servicos() {
  return (
    <>
      <div
        className="bg-no-repeat bg-cover p-10"
        style={{
          backgroundImage: `linear-gradient(to right, rgb(0,0,0) 0%, rgba(255,126,95,0) 100%), url('/1.png')`,
        }}
      ></div>
      <div className="w-1/2 mx-auto mt-[5%] text-center md:w-4/5">
        <h2
          className="text-[1.0rem] font-bold mt-[3%] lg:text-[1.5rem] xl:text-[2rem]"
          style={{ fontFamily: "ImpactCustom, sans-serif" }}
        >
          Nossos Serviços
        </h2>
        <p className="text-[1.5em] sm:text-[1em]">Corte / Química / Barba </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4 mt-[5%]">
        {servicosData.map((item) => (
          <div
            className="flex flex-col items-center mt-[5%] sm:mt-[10%]"
            key={item.id}
          >
            <img
              src={item.imagem}
              alt={item.servico}
              className="w-[200px] h-[200px] shadow-[0_4px_8px_rgba(255,255,255,0.8)]"
            ></img>
            <h2 className="text-white text-2xl mb-4 font-bold mt-4">
              {item.servico}
            </h2>
            <h3 className="text-white text-2xl mb-4 font-bold mt-4">
              {item.preco}
            </h3>
            <Link
              className="bg-yellow-400 px-5 py-5 text-white rounded-[30px] font-bold mt-4 cursor-pointer no-underline transition-colors duration-400 hover:bg-yellow-500"
              href="/agendamento"
            >
              Agendar
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default Servicos;
