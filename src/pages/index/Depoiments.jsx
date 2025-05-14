import { useState, useEffect } from "react";
import "../../styles/style.css";
import clientesData from "../../data/clientes.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

function Depoiments() {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    setClientes(clientesData);
  }, []);

  return (
    <div className="depoimentos">
      <h2>Depoimentos de nossos Clientes</h2>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={2}
        loop={true}
        speed={3000}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".btn-next",
          prevEl: ".btn-prev",
        }}
        onSwiper={(swiper) => {
          setTimeout(() => {
            if (swiper.params.navigation) {
              swiper.navigation.init();
              swiper.navigation.update();
            }
          }, 0); 
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          801: {
            slidesPerView: 3,
          },
        }}
        className="depoiment-swiper"
      >
        {clientes.map((depoimento) => (
          <SwiperSlide key={depoimento.id}>
            <div className="depoimento-item">
              <img
                src={depoimento.imagem}
                alt={`Foto de ${depoimento.cliente}`}
                className="depoimento-imagem"
              />
              <h2>
                <strong>{depoimento.cliente}</strong>
              </h2>
              <p>{depoimento.depoimento}</p>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-nav-buttons">
          <button className="btn-prev">
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button className="btn-next">
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </Swiper>
    </div>
  );
}

export default Depoiments;
