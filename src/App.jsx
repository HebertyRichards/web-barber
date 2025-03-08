import Active from "./header/Active";
import Text from "./components/SliderText";
import Sobre from "./components/Sobre";
import MainProduct from "./components/MainProduct";
import Mapa from "./components/Maps";
import InfoProds from "./components/Prods";
import Footer from "./footer/Footer";

function App() {
  return (
    <>
      <div className="back">
        <Text />
      </div>
      <Sobre />
      <MainProduct />
      <Mapa />
      <InfoProds />
      <Footer />
    </>
  );
}

export default App;
