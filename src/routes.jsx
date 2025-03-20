import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/index/Home";
import Agendamento from "./pages/agendamento/Appointment";
import Produtos from "./pages/produtos/Product";
import Servicos from "./pages/servicos/Service";
import CancelarAgendamento from "./pages/apagar/CancelAppointment";
import Assinatura from "./pages/assinaturas/Signature";
import AssinaturaBronze from "./pages/assinatura-bronze/Bronze";
import AssinaturaPrata from "./pages/assinaturaPrata/Silver";
import AssinaturaOuro from "./pages/AssinaturaOuro/Gold";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/agendamento" element={<Agendamento />}></Route>
        <Route path="/produtos" element={<Produtos />}></Route>
        <Route path="/servicos" element={<Servicos />}></Route>
        <Route
          path="/cancelar-agendamento"
          element={<CancelarAgendamento />}
        ></Route>
        <Route path="/assinatura" element={<Assinatura />}></Route>
        <Route path="assinatura-bronze" element={<AssinaturaBronze />}></Route>
        <Route path="assinatura-prata" element={<AssinaturaPrata />}></Route>
        <Route path="assinatura-ouro" element={<AssinaturaOuro />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
