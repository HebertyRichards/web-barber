module.exports = (app) => {
  const {
    agendamentoController,
    barbeiroController,
    cancelarAgendamentoController,
    horariosController,
    relatorioAllController,
    relatorioBarberController,
  } = app.controllers;

  app.post("/agendar", agendamentoController.criarAgendamento);
  app.get("/agendamentos", horariosController.listarHorarios);
  app.delete(
    "/cancelar-agendamento/:id",
    cancelarAgendamentoController.cancelarAgendamento
  );
  app.post("/servico/finalizar", barbeiroController.servicoBarbeiro);
  app.get(
    "/relatorio/barbeiro/:nome",
    relatorioBarberController.barbeiroServico
  );
  app.get("/relatorio/todos", relatorioAllController.servicoBarbeiroTodos);
};
