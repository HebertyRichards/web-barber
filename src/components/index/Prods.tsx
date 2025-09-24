/* eslint-disable @next/next/no-img-element */
import produtosData from "../../data/produtos.json";
import Link from "next/link";

function InfoProds() {
  return (
    <>
      <div className="text-center font-[Impact] mt-[5%]">
        <h2
          className="text-[1.0rem] font-bold mt-[3%] lg:text-[1.5rem] xl:text-[2rem]"
          style={{ fontFamily: "ImpactCustom, sans-serif" }}
        >
          Produtos
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4 mt-[5%]">
        {produtosData.slice(0, 4).map((item) => (
          <div className="flex flex-col items-center" key={item.id}>
            <img
              src={item.imagem}
              alt={item.produto}
              className="object-contain w-[200px] h-[200px] shadow-[0_4px_8px_rgba(255,255,255,0.8)] md:mt-0 mt-[10%]"
            />
            <h2 className="text-white text-2xl mb-4 font-bold mt-4">
              {item.produto}
            </h2>
            <h3 className="text-white text-2xl mb-4 font-bold mt-4">
              {item.preco}
            </h3>
            <Link
              href="https://bit.ly/3EWrNiw"
              target="_blank"
              className="block mx-auto bg-yellow-600 text-white py-5 px-6 rounded-full w-1/2 cursor-pointer transition-colors duration-300 no-underline text-center font-bold hover:bg-yellow-500 mt-5"
              >
              Comprar Agora
            </Link>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-[5%] flex-wrap">
        <Link
          href="/produtos"
          className="text-white px-4 py-3 text-[1.3em] rounded-[20px] border border-white cursor-pointer no-underline transition-colors duration-400 m-2 hover:bg-white hover:text-black"
        >
          Ver mais produtos
        </Link>
      </div>
    </>
  );
}

export default InfoProds;
