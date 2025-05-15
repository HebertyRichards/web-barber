module.exports = (app) => {
  const { agendamentoController } = app.controllers;

  app.post("/agendar", agendamentoController.criarAgendamento);
};
