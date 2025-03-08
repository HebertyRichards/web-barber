import React, { useState } from "react";
import Active from "../../header/Active";
import Footer from "../../footer/Footer";

function CancelarAgendamento() {
  useEffect(() => {
    document.title = "Cancelar Agendamento - Web Barber Shop";
  }, []);

  const [idAgendamento, setIdAgendamento] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleCancel = async (e) => {
    e.preventDefault();
    if (!idAgendamento) {
      setMensagem("Por favor, informe o ID do agendamento");
      return;
    }

    try {
      const response = await fetch(
        `https://web-barber-production.up.railway.app/cancelar-agendamento/${idAgendamento}`,
        {
          method: "DELETE",
        }
      );

      const data = await response.json();

      if (response.ok) {
        setMensagem("Agendamento cancelado com sucesso.");
        setIdAgendamento("");
      } else {
        setMensagem(data.message || "Erro ao cancelar o agendamento.");
      }
    } catch (error) {
      setMensagem("Erro ao conectar com o servidor.");
    }
  };

  return (
    <>
      <div className="back2">
        <Active />
      </div>
      <div className="back-forms">
        <h2>Cancelar Agendamento</h2>
        <form id="formulario" onSubmit={handleCancel}>
          <input
            type="number"
            name="id"
            id="id"
            required
            placeholder="Informe o ID do agendamento"
            value={idAgendamento}
            onChange={(e) => setIdAgendamento(e.target.value)}
          />
          <button id="-btn-cancel" type="submit">
            Cancelar Agendamento
          </button>
        </form>
        {mensagem && <p>{mensagem}</p>}
      </div>
      <Footer />
    </>
  );
}

export default CancelarAgendamento;
