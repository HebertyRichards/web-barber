import Active from "../../components/Active";
import Footer from "../../components/Footer";
import SliderText from "./SliderText";
import MainProduct from "./MainProduct";
import Mapa from "./Maps";
import InfoProds from "./Prods";
import Depoiments from "./Depoiments";
import "../../styles/style.css";

function Home() {
  return (
    <>
      <div className="back">
        <Active />
        <SliderText />
      </div>
      <MainProduct />
      <Mapa />
      <InfoProds />
      <Depoiments />
      <Footer />
    </>
  );
}

export default Home;
