"use client";
import planosData from "../../data/planos.json";
import Link from "next/link";

const prata = planosData.find((plano) => plano.classe === "silver");

function AssinaturaPrata() {
  return (
    <>
      <div
        className="bg-no-repeat bg-cover p-10"
        style={{
          backgroundImage: `linear-gradient(to right, rgb(0,0,0) 0%, rgba(255,126,95,0) 100%), url('/1.png')`,
        }}
      ></div>
      <form id="formulario3" onSubmit={(e) => e.preventDefault()}>
        <div className="info-sign flex flex-col items-center gap-4 p-6">
          <input
            type="tel"
            id="telefone3"
            name="telefone"
            placeholder="Telefone com DD"
            className="border-b-2 border-white bg-transparent text-white p-2 w-64"
          />
          <input
            type="text"
            id="nome3"
            name="nome"
            placeholder="Seu Nome"
            className="border-b-2 border-white bg-transparent text-white p-2 w-64"
          />
        </div>
      </form>
      <div className="flex justify-center mt-6">
        <div className="w-full max-w-md">
          <div className="bg-gray-300 text-black text-center font-semibold p-4 uppercase">
            {prata?.nome}
          </div>
          <div className="bg-gray-300 text-black text-center text-xl font-bold p-4">
            {prata?.preco}
          </div>
          <div className="bg-white text-black text-center">
            <table className="w-full">
              <tbody>
                {prata?.beneficios.map((item, index) => (
                  <tr key={index}>
                    <td className="py-2">{item}</td>
                  </tr>
                ))}
                <tr>
                  <td className="py-4">
                    <Link
                      href="#"
                      className="bg-gray-300 text-black mt-auto inline-block font-semibold px-4 py-2 hover:bg-gray-400"
                    >
                      Assinar
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default AssinaturaPrata;
