export async function CancelAppoint(idAgendamento: number) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  if (!idAgendamento) {
    throw new Error("Por favor, informe o ID do agendamento");
  }
  try {
    const response = await fetch(
      `${apiUrl}/cancelar-agendamento/${idAgendamento}`,
      {
        method: "DELETE",
      }
    );

    const contentType = response.headers.get("content-type");
    let data;
    if (contentType && contentType.includes("application/json")) {
      data = await response.json();
    } else {
      const text = await response.text();
      throw new Error(`Erro inesperado: ${text}`);
    }

    if (!response.ok) {
      throw new Error(data.message || "Erro ao cancelar o agendamento.");
    }

    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message || "Erro ao conectar com o servidor.");
    }
    throw new Error("Erro ao conectar com o servidor.");
  }
}
