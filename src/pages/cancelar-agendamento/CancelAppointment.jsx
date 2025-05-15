import { useState } from "react";
import Active from "../../components/Active";
import Footer from "../../components/Footer";
import { useAppointmentCancelTitle } from "../../hooks/useCancelAppointment";
import { CancelAppoint } from "../../services/cancelAppointmentService";

function CancelarAgendamento() {
  useAppointmentCancelTitle("Cancelar Agendamento - Barbearia Ramos");

  const [idAgendamento, setIdAgendamento] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [erro, setErro] = useState("");

  const handleCancel = async (e) => {
    e.preventDefault();
    setMensagem("");
    setErro("");

    try {
      const resposta = await CancelAppoint(idAgendamento);
      setMensagem(resposta.message || "Agendamento cancelado com sucesso.");
      setIdAgendamento("");
    } catch (error) {
      setErro(error.message || "Erro ao cancelar o agendamento.");
      console.error(error);
    }
  };

  const cancelFormValid = idAgendamento.trim() !== "";

  return (
    <>
      <div className="back2">
        <Active />
      </div>
      <div className="back-forms">
        <div className="forms-style">
          <h2>Cancelar Agendamento</h2>
          <form id="cancel-formulario" onSubmit={handleCancel}>
            <input
              type="number"
              name="id"
              id="id"
              required
              placeholder="Informe o ID do agendamento"
              value={idAgendamento}
              onChange={(e) => setIdAgendamento(e.target.value)}
            />
            <button id="btn-cancel" type="submit" disabled={!cancelFormValid}>
              Cancelar Agendamento
            </button>
          </form>
          {mensagem && <p>{mensagem}</p>}
          {erro && <p>{erro}</p>}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CancelarAgendamento;
