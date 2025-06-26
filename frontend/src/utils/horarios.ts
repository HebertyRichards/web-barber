export function gerarHorariosDisponiveis(data: string, horariosIndisponiveis: string[]) {
  const horarios = [
    "08:00",
    "08:30",
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
  ];

  const horaAtual = new Date();
  const horaAtualFormatada = `${String(horaAtual.getHours()).padStart(
    2,
    "0"
  )}:${String(horaAtual.getMinutes()).padStart(2, "0")}`;
  const dataAtual = `${horaAtual.getFullYear()}-${String(
    horaAtual.getMonth() + 1
  ).padStart(2, "0")}-${String(horaAtual.getDate()).padStart(2, "0")}`;

  const isHoje = data === dataAtual;

  return horarios.filter((horario) => {
    if (isHoje && horario <= horaAtualFormatada) return false;
    return !horariosIndisponiveis.includes(horario);
  });
}
