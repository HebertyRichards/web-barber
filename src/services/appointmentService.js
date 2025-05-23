import { useEffect } from "react";
import { useAgendamento } from "../hooks/useAppointment";

export async function enviarAgendamento({
  nome,
  telefone,
  email,
  data,
  horario,
  servico,
  barbeiro,
}) {
  const agendamento = {
    nome_cliente: nome,
    telefone,
    email,
    data_agendamento: data,
    horario,
    servico: servico.join(", "),
    barbeiro,
  };

  try {
    const response = await fetch("https://web-barber.onrender.com/agendar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(agendamento),
    });

    if (!response.ok) {
      const text = await response.text();
      console.error("Erro na resposta do backend:", text);
      throw new Error(
        `Erro ao agendar: ${response.status} ${response.statusText}`
      );
    }

    const responseFinalizar = await fetch(
      "https://web-barber.onrender.com/servico/finalizar",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome_cliente: nome,
          barbeiro,
          servico,
          data_servico: data,
        }),
      }
    );
    if (!responseFinalizar.ok) {
      const data = await responseFinalizar.json();
      throw new Error(data.message || "Erro ao registrar serviço.");
    }

    return true;
  } catch (error) {
    console.error("Erro ao enviar agendamento:", error);
    throw error;
  }
}
export function useBuscarHorariosIndisponiveis() {
  const { setHorariosIndisponiveis, data, barbeiro } = useAgendamento();

  useEffect(() => {
    async function buscarHorariosIndisponiveis() {
      if (data && barbeiro) {
        try {
          const res = await fetch(
            `https://web-barber.onrender.com/agendamentos?data=${data}&barbeiro=${encodeURIComponent(
              barbeiro
            )}`
          );
          const json = await res.json();
          setHorariosIndisponiveis(json.horariosIndisponiveis || []);
        } catch (err) {
          console.error("Erro ao buscar horários indisponíveis:", err);
          throw new Error("Erro ao buscar horários");
        }
      }
    }

    buscarHorariosIndisponiveis();
  }, [data, barbeiro, setHorariosIndisponiveis]);
}
