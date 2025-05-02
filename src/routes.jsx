import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

import Home from "./pages/index/Home";
import Agendamento from "./pages/agendamento/Appointment";
import Produtos from "./pages/produtos/Product";
import Servicos from "./pages/servicos/Service";
import CancelarAgendamento from "./pages/cancelar-agendamento/CancelAppointment";
import Assinatura from "./pages/assinaturas/Signature";
import AssinaturaBronze from "./pages/assinatura-bronze/Bronze";
import AssinaturaPrata from "./pages/assinatura-prata/Silver";
import AssinaturaOuro from "./pages/assinatura-ouro/Gold";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Página Inicial */}
        <Route path="/" element={<Home />}></Route>

        {/* Agendamentos*/}
        <Route path="/agendamento" element={<Agendamento />}></Route>
        <Route
          path="/cancelar-agendamento"
          element={<CancelarAgendamento />}
        ></Route>

        {/* Produtos e serviços */}
        <Route path="/produtos" element={<Produtos />}></Route>
        <Route path="/servicos" element={<Servicos />}></Route>

        {/* Assinaturas */}
        <Route path="/assinaturas" element={<Assinatura />}></Route>
        <Route path="/assinatura-bronze" element={<AssinaturaBronze />}></Route>
        <Route path="/assinatura-prata" element={<AssinaturaPrata />}></Route>
        <Route path="/assinatura-ouro" element={<AssinaturaOuro />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
