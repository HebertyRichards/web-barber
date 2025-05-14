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
import "../../styles/style.css";

const MainProduct = () => {
  return (
    <>
    <div className="sobre">
        <h2>SOBRE NÓS</h2>
        <p>
          A Barbearia Ramos é uma empresa que une tradição e inovação para
          facilitar o dia a dia dos nossos clientes. Oferecemos um sistema de
          agendamento online rápido e prático, Nosso objetivo é proporcionar
          comodidade, agilidade e uma experiência moderna, sem filas e com total
          controle do seu tempo.
        </p>
      </div>
      <div className="services">
        <h2>Serviços</h2>
        <p>Corte / Química / Barba / Sobrancelha / Penteado </p>
      </div>
      <Swiper
        id="main-swiper"
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
        {servicosData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="slide2">
              <img src={item.imagem} alt={item.servico} />
              <h2>{item.servico}</h2>
              <p>{item.preco}</p>
              <a className="redirect" href="/agendamento">
                Agendar
              </a>
            </div>
          </SwiperSlide>
        ))}
        <div className="custom-navigation2">
          <button className="btn-prev">
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button className="btn-next">
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </Swiper>
    </>
  );
};

export default MainProduct;
