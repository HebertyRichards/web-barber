module.exports = (app) => {
  const { horariosController } = app.controllers;

  if (!horariosController) {
    console.error("❌ agendamentoController não carregado!");
  } else {
    console.log("✅ agendamentoController carregado com sucesso.");
  }
  app.get("/agendamentos", horariosController.listarHorarios);
};
