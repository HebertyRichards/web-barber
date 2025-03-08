import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../style.css";
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
        <div className="slide">
          <h2 id="p1">Cortes profissionais</h2>
          <p id="f1">
            Descrição relacionada ao texto, você poderá alterar essa descrição e
            o título do texto no paínel administativo, lá tera uma opção para
            gerenciar os recursos do site
          </p>
          <button className="contact-btn">Contate-nos</button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide">
          <h2 id="p2">Faça sua Barba</h2>
          <p id="f2">
            Descrição relacionado ao texto, você poderá alterar essa descrição e
            o título do texto no paínel administrativo, lá terá uma opção para
            gerenciar os recursos do site
          </p>
          <button className="contact-btn">Contate-nos</button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide">
          <h2 id="p3">Mega Hair</h2>
          <p id="f3">
            Descrição relacionado ao texto, você poderá alterar essa descrição e
            o título do texto no painel administrativo, lá terá uma opção para
            gerenciar os recursos do site.
          </p>
          <button className="contact-btn">Contate-nos</button>
        </div>
      </SwiperSlide>
      <div className="custom-navigation">
        <button className="custom-prev">
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button className="custom-next">
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </Swiper>
  );
};

export default Text;
