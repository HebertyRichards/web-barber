import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "../style.css";

const MainProduct = () => {
  return (
    <>
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
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          800: {
            slidesPerView: 3,
          },
        }}
      >
        <SwiperSlide>
          <div className="slide2">
            <img src="./assets/corte1.png" alt="Corte"></img>
            <h2>Corte</h2>
            <p>R$ 30,00</p>
            <a className="redirect" href="/agendamento">
              Agendar
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide2">
            <img src="./assets/barba.png" alt="Barba"></img>
            <h2>Barba</h2>
            <p>R$ 25,00</p>
            <a className="redirect" href="/agendamento">
              Agendar
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide2">
            <img src="./assets/luzes.png" alt="Luzes"></img>
            <h2>Luzes</h2>
            <p>R$ 65,00</p>
            <a className="redirect" href="/agendamento">
              Agendar
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide2">
            <img src="./assets/penteado.png" alt="Penteado"></img>
            <h2>Penteado</h2>
            <p>R$ 20,00</p>
            <a className="redirect" href="/agendamento">
              Agendar
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide2">
            <img src="./assets/bigode.png" alt="Bigode"></img>
            <h2>Bigode</h2>
            <p>R$ 10,00</p>
            <a className="redirect" href="/agendamento">
              Agendar
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide2">
            <img src="./assets/hidratacao.png" alt="Hidratação"></img>
            <h2>Hidratação</h2>
            <p>R$ 15,00</p>
            <a className="redirect" href="/agendamento">
              Agendar
            </a>
          </div>
        </SwiperSlide>
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
