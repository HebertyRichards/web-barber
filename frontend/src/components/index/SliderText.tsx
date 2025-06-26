"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Text = () => {
  return (
    <Swiper
      navigation={{
        nextEl: ".custom-next",
        prevEl: ".custom-prev",
      }}
      modules={[Navigation, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      loop
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
    >
      {" "}
      <SwiperSlide>
        <section className="text-white shadow-[0_4px_8px_rgba(0,0,0,0.7)] mx-auto w-[90%] md:w-[80%] lg:w-[60%] p-5 mt-[10%]">
          <h2
            className="text-[1.2rem] font-bold lg:text-[1.8rem] xl:text-[2.5rem]"
            style={{ fontFamily: "'ImpactCustom', sans-serif" }}
          >
            Cortes profissionais
          </h2>
          <p className="text-[1em] lg:text-[2em] mb-5">
            Cortes modernos, clássicos ou personalizados com acabamento
            impecável. Estilo e cuidado com quem entende do assunto.
          </p>
          <button className="text-white bg-[#ffbb00] rounded-full border-none cursor-pointer px-6 py-3 font-bold transition-colors duration-400 hover:bg-transparent hover:text-[#f5bd25] hover:border hover:border-[#f5bd25]">
            Contate-nos
          </button>
        </section>
      </SwiperSlide>
      <SwiperSlide>
        <section className="text-white shadow-[0_4px_8px_rgba(0,0,0,0.7)] mx-auto w-[90%] md:w-[80%] lg:w-[60%] p-5 mt-[10%]">
          <h2
            className="text-[1.2rem] font-bold lg:text-[1.8rem] xl:text-[2.5rem]"
            style={{ fontFamily: "'ImpactCustom', sans-serif" }}
          >
            Faça sua Barba
          </h2>
          <p className="text-[1em] lg:text-[2em] mb-5">
            Barba feita com precisão e conforto. Higienização, hidratação e
            modelagem para valorizar seu visual.
          </p>
          <button className="text-white bg-[#ffbb00] rounded-full border-none cursor-pointer px-6 py-3 font-bold transition-colors duration-400 hover:bg-transparent hover:text-[#f5bd25] hover:border hover:border-[#f5bd25]">
            Contate-nos
          </button>
        </section>
      </SwiperSlide>
      <SwiperSlide>
        <section className="text-white shadow-[0_4px_8px_rgba(0,0,0,0.7)] mx-auto w-[90%] md:w-[80%] lg:w-[60%] p-5 mt-[10%]">
          <h2
            className="text-[1.2rem] font-bold lg:text-[1.8rem] xl:text-[2.5rem]"
            style={{ fontFamily: "'ImpactCustom', sans-serif" }}
          >
            Mega Hair
          </h2>
          <p className="text-[1em] lg:text-[2em] mb-5">
            Transforme seu estilo com Mega Hair de alta qualidade. Volume,
            comprimento e naturalidade em cada aplicação.
          </p>
          <button className="text-white bg-[#ffbb00] rounded-full border-none cursor-pointer px-6 py-3 font-bold transition-colors duration-400 hover:bg-transparent hover:text-[#f5bd25] hover:border hover:border-[#f5bd25]">
            Contate-nos
          </button>
        </section>
      </SwiperSlide>
      <SwiperSlide>
        <section className="text-white shadow-[0_4px_8px_rgba(0,0,0,0.7)] mx-auto w-[90%] md:w-[80%] lg:w-[60%] p-5 mt-[10%]">
          <h2
            className="text-[1.2rem] font-bold lg:text-[1.8rem] xl:text-[2.5rem]"
            style={{ fontFamily: "'ImpactCustom', sans-serif" }}
          >
            Hidratação Capilar
          </h2>
          <p className="text-[1em] lg:text-[2em] mb-5">
            Recupere a saúde dos seus fios com hidratação profunda. Cabelos mais
            fortes, macios e com brilho natural.o.
          </p>
          <button className="text-white bg-[#ffbb00] rounded-full border-none cursor-pointer px-6 py-3 font-bold transition-colors duration-400 hover:bg-transparent hover:text-[#f5bd25] hover:border hover:border-[#f5bd25]">
            Contate-nos
          </button>
        </section>
      </SwiperSlide>
      <SwiperSlide>
        <section className="text-white shadow-[0_4px_8px_rgba(0,0,0,0.7)] mx-auto w-[90%] md:w-[80%] lg:w-[60%] p-5 mt-[10%]">
          <h2
            className="text-[1.2rem] font-bold lg:text-[1.8rem] xl:text-[2.5rem]"
            style={{ fontFamily: "'ImpactCustom', sans-serif" }}
          >
            Coloração ou Luzes Masculinas
          </h2>
          <p className="text-[1em] lg:text-[2em] mb-5">
            Renove o visual com coloração ou luzes modernas. Estilo,
            personalidade e cuidado com cada detalhe.
          </p>
          <button className="text-white bg-[#ffbb00] rounded-full border-none cursor-pointer px-6 py-3 font-bold transition-colors duration-400 hover:bg-transparent hover:text-[#f5bd25] hover:border hover:border-[#f5bd25]">
            Contate-nos
          </button>
        </section>
      </SwiperSlide>
      <section className="mx-auto w-[30%] p-2">
        <button className="custom-prev bg-black/50 text-white border-none p-2 cursor-pointer rounded-full w-10 h-10 transition-colors duration-400 hover:bg-white/80">
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button className="custom-next bg-black/50 text-white border-none p-2 cursor-pointer rounded-full w-10 h-10 transition-colors duration-400 hover:bg-white/80">
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </section>
    </Swiper>
  );
};

export default Text;
