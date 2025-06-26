"use client";
/* eslint-disable @next/next/no-img-element */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import servicosData from "../../data/servicos.json";
import Link from "next/link";

const MainProduct = () => {
  return (
    <>
      <div className="bg-[antiquewhite] text-black mx-auto text-center p-5">
        <h2
          className="text-[1.0rem] font-bold mt-[3%] lg:text-[1.5rem] xl:text-[2rem]"
          style={{ fontFamily: "ImpactCustom, sans-serif" }}
        >
          SOBRE NÓS
        </h2>
        <p className="text-2xl w-[90%] mx-auto md:w-[30%] sm:text-base">
          A Barbearia Ramos é uma empresa que une tradição e inovação para
          facilitar o dia a dia dos nossos clientes. Oferecemos um sistema de
          agendamento online rápido e prático, Nosso objetivo é proporcionar
          comodidade, agilidade e uma experiência moderna, sem filas e com total
          controle do seu tempo.
        </p>
      </div>
      <div className="w-[90%] mx-auto mt-12 text-center md:w-[30%]">
        <h2
          className="text-[1.0rem] font-bold mt-[3%] lg:text-[1.5rem] xl:text-[2rem]"
          style={{ fontFamily: "ImpactCustom, sans-serif" }}
        >
          Serviços
        </h2>
        <p className="text-xl sm:text-base">
          Corte / Química / Barba / Sobrancelha / Penteado
        </p>
      </div>
      <Swiper
        id="main-swiper"
        className="w-[90%] mx-auto mt-5 bg-neutral-800 p-2 text-white xl:w-4/5 md:w-[70%]"
        navigation={{
          nextEl: ".btn-next",
          prevEl: ".btn-prev",
        }}
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        loop
        breakpoints={{
          800: {
            slidesPerView: 3,
          },
        }}
      >
        {(servicosData as Servico[]).map((item) => (
          <SwiperSlide key={item.id}>
            <div className="flex flex-col justify-center text-center font-bold py-10 px-2">
              <img
                src={item.imagem}
                alt={item.servico}
                className="mx-auto w-[200px] h-[200px]"
              />
              <h2 className="text-[2.5em] font-bold mt-5 md:text-[1.5em]">
                {item.servico}
              </h2>
              <p className="text-lg mt-5 md:text-base">{item.preco}</p>
              <Link
                className="block mx-auto bg-yellow-400 text-white py-5 px-6 rounded-full w-1/2 cursor-pointer transition-colors duration-300 no-underline text-center font-bold hover:bg-yellow-500 mt-5"
                href="/agendamento"
              >
                Agendar
              </Link>
            </div>
          </SwiperSlide>
        ))}
        <div className="flex justify-center w-full z-10 py-4">
          <button className="btn-prev transition-colors duration-300 text-white bg-black/50 mx-2 rounded-full mt-2 w-10 h-10 hover:bg-white/80 cursor-pointer">
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button className="btn-next transition-colors duration-300 text-white bg-black/50 mx-2 rounded-full mt-2 w-10 h-10 hover:bg-white/80 cursor-pointer">
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </Swiper>
    </>
  );
};

export default MainProduct;
