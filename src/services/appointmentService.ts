"use client";

import { useEffect, useState } from "react";
import { useAgendamento } from "../hooks/useAppointment";

export async function enviarAgendamento({
  nome,
  telefone,
  email,
  data,
  horario,
  servico,
  barbeiro,
}: Agendamento): Promise<boolean> {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const agendamentoPayload = {
    nome_cliente: nome,
    telefone,
    email,
    data_agendamento: data,
    horario,
    servico: servico,
    barbeiro,
  };

  try {
    const responseAgendamento = await fetch(`${apiUrl}/agendamentos/agendar`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(agendamentoPayload),
    });

    if (!responseAgendamento.ok) {
      const errorData = await responseAgendamento.json();
      throw new Error(errorData.detail || "Erro ao criar o agendamento.");
    }

    const servicoRealizadoPayload = {
      nome_cliente: nome,
      barbeiro,
      servico,
      data_servico: data,
    };

    const responseServico = await fetch(`${apiUrl}/servicos-realizados`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(servicoRealizadoPayload),
    });

    if (!responseServico.ok) {
      const errorData = await responseServico.json();
      throw new Error(
        errorData.detail ||
          "Agendamento criado, mas falhou ao registrar o serviço."
      );
    }

    return true;
  } catch (error: unknown) {
    throw error;
  }
}

export function useBuscarHorariosIndisponiveis() {
  const { setHorariosIndisponiveis, data, barbeiro } = useAgendamento();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function buscarHorarios() {
      if (data && barbeiro) {
        try {
          const apiUrl = process.env.NEXT_PUBLIC_API_URL;
          const url = `${apiUrl}/agendamentos/horarios?data=${data}&barbeiro=${encodeURIComponent(
            barbeiro
          )}`;

          const res = await fetch(url);

          if (!res.ok) {
            const errorData = await res.json();
            throw new Error(errorData.detail || `Erro HTTP: ${res.status}`);
          }

          const json = await res.json();
          setHorariosIndisponiveis(json.horariosIndisponiveis || []);
          setError(null);
        } catch (err: unknown) {
          setHorariosIndisponiveis([]);
          setError(
            err instanceof Error
              ? err.message
              : "Erro desconhecido ao buscar horários"
          );
        }
      }
    }

    buscarHorarios();
  }, [data, barbeiro, setHorariosIndisponiveis]);

  return { error };
}
