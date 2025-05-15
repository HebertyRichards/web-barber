export async function CancelAppoint(idAgendamento) {
  if (!idAgendamento) {
    throw new Error("Por favor, informe o ID do agendamento");
  }
  const API_CANCEL = `https://web-barber-production.up.railway.app/cancelar-agendamento/${idAgendamento}`;
  try {
    const response = await fetch(API_CANCEL, {
      method: "DELETE",
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Erro ao cancelar o agendamento.");
    }

    return data;
  } catch (error) {
    throw new Error(error.message || "Erro ao conectar com o servidor.");
  }
}
