module.exports = (app) => {
  const controller = app.controllers.agendamentoController;
  app.post("/agendar", controller.criarAgendamento);
  app.get("/agendamentos", controller.listarHorarios);
  app.delete("/cancelar-agendamento/:id", controller.cancelarAgendamento);
  app.post("/servico/finalizar", controller.servicoBarbeiro);
  app.get("/relatorio/barbeiro:nome", controller.barbeiroServico);
  app.get("/relatorio/todos", controller.servicoBarbeiroTodos);
};
