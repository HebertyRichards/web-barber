module.exports = (app) => {
  const { agendamentoController } = app.controllers;
  if (!agendamentoController) {
    console.error("❌ agendamentoController não carregado!");
  } else {
    console.log("✅ agendamentoController carregado com sucesso.");
  }
  app.post("/agendar", agendamentoController.criarAgendamento);
};
