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

const API_BASE = "https://web-barber-production.up.railway.app/agendar";
const API_BARBER = "https://web-barber-production.up.railway.app/servico/finalizar"

try {
  const response = await fetch(`${API_BASE}/agendar`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(agendamento),
  });

  if (response.ok) {
    const data = await response.json();
      throw new Error(data.message || "Erro ao agendar.");
  }

const responseFinalizar = await fetch(`${API_BARBER}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      nome_cliente: nome,
      barbeiro,
      servico,
      data_servico: data,
    }),
  });  if(!responseFinalizar) {
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
                const API_BARBERHOUR = `https://web-barber-production.up.railway.app/agendamentos?data=${data}&barbeiro=${encodeURIComponent(barbeiro)}`;
  
          try {
            const res = await fetch(API_BARBERHOUR);
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
