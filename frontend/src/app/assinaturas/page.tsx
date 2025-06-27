import planosData from "../../data/planos.json";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Barbearia Ramos - Assinaturas",
  description:
    "Venha fidelizar seu corte, temos diversos planos para te deixar novo de novo",
  openGraph: {
    title: "Barbearia Ramos - Assinaturas",
    description:
      "Venha fidelizar seu corte, temos diversos planos para te deixar novo de novo",
  },
};

function Assinatura() {
  return (
    <>
      <div
        className="bg-no-repeat bg-cover p-10"
        style={{
          backgroundImage: `linear-gradient(to right, rgb(0,0,0) 0%, rgba(255,126,95,0) 100%), url('/1.webp')`,
        }}
      ></div>
      <div className="text-center text-white my-8 px-4">
        <h2
          className="text-[1.0rem] font-bold mt-[3%] lg:text-[1.5rem] xl:text-[2rem]"
          style={{ fontFamily: "ImpactCustom, sans-serif" }}
        >
          ESCOLHA UM PLANO E FIQUE NOVO SEM PARAR!
        </h2>
        <p>
          Na Barbearia Ramos, acreditamos que estilo e cuidado são inseparáveis.
          Apresentamos as Assinaturas Exclusivas para quem busca uma experiência
          premium.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 px-4 md:px-20 pb-16">
        {planosData.map((plano, index) => {
          let bgColor = "";
          let textColor = "";

          switch (plano.classe) {
            case "bronze":
              bgColor = "bg-[#5b2c06] hover:bg-[#7a3e0a]";
              textColor = "text-white";
              break;
            case "silver":
              bgColor = "bg-gray-300 hover:bg-gray-400";
              textColor = "text-black";
              break;
            case "gold":
              bgColor = "bg-[#f6d300] hover:bg-yellow-400";
              textColor = "text-black";
              break;
            default:
              bgColor = "bg-gray-200";
              textColor = "text-black";
          }

          return (
            <div
              key={index}
              className="flex flex-col bg-white text-center shadow-lg w-full md:w-[300px]"
            >
              <div className={`p-4 font-bold ${bgColor} ${textColor}`}>
                <h3>{plano.nome}</h3>
                <h2>{plano.preco}</h2>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <ul className="text-black space-y-2 mb-6">
                  {plano.beneficios.map((beneficio, idx) => (
                    <li key={idx}>{beneficio}</li>
                  ))}
                </ul>
                <Link
                  href={plano.link}
                  className={`mt-auto inline-block font-semibold px-4 py-2 ${bgColor} ${textColor}`}
                >
                  Assinar
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Assinatura;
