module.exports = (app) => {
  const { cancelarAgendamentoController } = app.controllers;
  if (!cancelarAgendamentoController) {
    console.error("❌ agendamentoController não carregado!");
  } else {
    console.log("✅ agendamentoController carregado com sucesso.");
  }
  app.delete(
    "/cancelar-agendamento/:id",
    cancelarAgendamentoController.cancelarAgendamento
  );
};
