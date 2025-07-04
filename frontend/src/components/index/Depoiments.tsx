"use client";
/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import clientesData from "../../data/clientes.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { NavigationOptions } from "swiper/types";
import "swiper/css";
import "swiper/css/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

function Depoiments() {
  const [clientes, setClientes] = useState<Cliente[]>([]);

  useEffect(() => {
    setClientes(clientesData);
  }, []);

  return (
    <section className="px-5 py-5 text-center w-[90%] mx-auto bg-[#101010] mt-[5%] rounded-[20px]">
      <h2
        className="text-[1.0rem] font-bold mt-[3%] lg:text-[1.5rem] xl:text-[2rem]"
        style={{ fontFamily: "ImpactCustom, sans-serif" }}
      >
        Depoimentos de nossos Clientes
      </h2>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={2}
        loop={true}
        speed={1000}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={
          {
            nextEl: ".btn-next",
            prevEl: ".btn-prev",
          } as NavigationOptions
        }
        onSwiper={(swiper) => {
          setTimeout(() => {
            if (
              swiper?.params &&
              typeof swiper.params.navigation !== "boolean" &&
              swiper.navigation
            ) {
              swiper.navigation.init();
              swiper.navigation.update();
            }
          }, 0);
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {clientes.map((depoimento) => (
          <SwiperSlide key={depoimento.id}>
            <div className="border border-[#f4f4f4] bg-[#1e1e1e] p-5 rounded-lg w-[80%] mx-auto mb-4 shadow-md text-left md:p-2 md:w-[70%]">
              <img
                src={`${
                  depoimento.imagem.split("?")[0]
                }?w=100&h=100&fit=crop&auto=format&q=60`}
                alt={`Foto de ${depoimento.cliente}`}
                className="object-contain w-[50px] h-[50px] rounded-full object-cover mb-2"
                loading="lazy"
              />

              <h2
                className="text-2xl mb-4"
                style={{ fontFamily: "ImpactCustom, sans-serif" }}
              >
                <strong>{depoimento.cliente}</strong>
              </h2>
              <p className="my-1 text-[#d2d2d2]">{depoimento.depoimento}</p>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-nav-buttons">
          <button
            aria-label="Slide Anterior"
            className="btn-prev bg-black/50 text-white border-none p-2 cursor-pointer rounded-full w-10 h-10 transition-colors duration-400 hover:bg-white/80"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button
            aria-label="Proximo Slide"
            className="btn-next bg-black/50 text-white border-none p-2 cursor-pointer rounded-full w-10 h-10 transition-colors duration-400 hover:bg-white/80"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </Swiper>
    </section>
  );
}

export default Depoiments;
