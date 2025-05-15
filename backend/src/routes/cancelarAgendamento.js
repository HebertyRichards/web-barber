module.exports = (app) => {
  const { cancelarAgendamentoController } = app.controllers;
  if (!cancelarAgendamentoController) {
    console.error("❌ cancelarAgendamentoController não carregado!");
  } else {
    console.log("✅ cancelarAgendamentoController carregado com sucesso.");
  }
  app.delete(
    "/cancelar-agendamento/:id",
    cancelarAgendamentoController.cancelarAgendamento
  );
};
