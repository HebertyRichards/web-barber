import MainProduct from "@/components/index/MainProduct";
import InfoProds from "@/components/index/Prods";
import Depoiments from "@/components/index/Depoiments";
import Text from "@/components/index/SliderText";

export default function Home() {
  return (
    <>
      <div
        className="h-screen bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to right, rgb(0,0,0) 0%, rgba(255,126,95,0) 100%), url('1.png')`,
        }}
      >
        <Text />
      </div>
      <MainProduct />
      <InfoProds />
      <Depoiments />
    </>
  );
}
