import Active from "../../header/Active";
import SliderText from "../../components/SliderText";
import Sobre from "../../components/Sobre";
import MainProduct from "../../components/MainProduct";
import Footer from "../../footer/Footer";
import Mapa from "../../components/Maps";
import InfoProds from "../../components/Prods";
import Depoiments from "../../components/Depoiments";
import "../../style.css";

function Home() {
  return (
    <>
      <div className="back">
        <Active />
        <SliderText />
      </div>
      <Sobre />
      <MainProduct />
      <Mapa />
      <InfoProds />
      <Depoiments />
      <Footer />
    </>
  );
}

export default Home;
