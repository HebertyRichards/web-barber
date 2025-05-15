module.exports = (app) => {
  const { cancelarAgendamentoController } = app.controllers;

  app.delete(
    "/cancelar-agendamento/:id",
    cancelarAgendamentoController.cancelarAgendamento
  );
};
