import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../styles/style.css";
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
            Cortes modernos, clássicos ou personalizados com acabamento
            impecável. Estilo e cuidado com quem entende do assunto.
          </p>
          <button className="contact-btn">Contate-nos</button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide">
          <h2 id="p2">Faça sua Barba</h2>
          <p id="f2">
            Barba feita com precisão e conforto. Higienização, hidratação e
            modelagem para valorizar seu visual.
          </p>
          <button className="contact-btn">Contate-nos</button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide">
          <h2 id="p3">Mega Hair</h2>
          <p id="f3">
            Transforme seu estilo com Mega Hair de alta qualidade. Volume,
            comprimento e naturalidade em cada aplicação.
          </p>
          <button className="contact-btn">Contate-nos</button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide">
          <h2 id="p3">Hidratação Capilar</h2>
          <p id="f3">
            Recupere a saúde dos seus fios com hidratação profunda. Cabelos mais
            fortes, macios e com brilho natural.o.
          </p>
          <button className="contact-btn">Contate-nos</button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide">
          <h2 id="p3">Coloração ou Luzes Masculinas</h2>
          <p id="f3">
            Renove o visual com coloração ou luzes modernas. Estilo,
            personalidade e cuidado com cada detalhe.
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
