/* eslint-disable @next/next/no-img-element */
import produtosData from "../../data/produtos.json";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Barbearia Ramos - Produtos",
  description: "Produtos de altíssima qualidade, só aqui na Barbearia Ramos",
  openGraph: {
    title: "Barbearia Ramos - Produtos",
    description: "Produtos de altíssima qualidade, só aqui na Barbearia Ramos",
  },
};
function Produtos() {
  return (
    <>
      <div
        className="bg-no-repeat bg-cover p-10"
        style={{
          backgroundImage: `linear-gradient(to right, rgb(0,0,0) 0%, rgba(255,126,95,0) 100%), url('/1.webp')`,
        }}
      ></div>
      <div className="w-1/2 mx-auto mt-[5%] text-center md:w-4/5">
        <h2
          className="text-[1.0rem] font-bold mt-[3%] lg:text-[1.5rem] xl:text-[2rem]"
          style={{ fontFamily: "ImpactCustom, sans-serif" }}
        >
          Nossos Produtos
        </h2>
        <p className="text-[1.5em] md:text-[1em]">
          Confira alguns de nossos produtos, damos desconto caso compre em
          grande quantidade.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4 mt-[5%]">
        {produtosData.map((item) => (
          <div
            className="flex flex-col items-center mt-[5%] md:mt-[10%]"
            key={item.id}
          >
            <img
              src={item.imagem}
              alt={item.produto}
              className="w-[80%] max-w-[200px] aspect-square object-contain shadow-[0_4px_8px_rgba(255,255,255,0.8)]"
            ></img>
            <h2 className="text-white text-2xl mb-4 font-bold mt-4">
              {item.produto}
            </h2>
            <h3 className="text-white text-2xl mb-4 font-bold mt-4">
              {item.preco}
            </h3>
            <Link
              href="https://bit.ly/3EWrNiw"
              target="_blank"
              className="bg-yellow-600 px-5 py-5 text-white rounded-[30px] font-bold mt-4 cursor-pointer no-underline transition-colors duration-400 hover:bg-yellow-400"
            >
              Comprar Agora
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default Produtos;
