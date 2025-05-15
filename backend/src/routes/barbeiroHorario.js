module.exports = (app) => {
  const { horariosController } = app.controllers;

  if (!horariosController) {
    console.error("❌ horariosController não carregado!");
  } else {
    console.log("✅ horariosController carregado com sucesso.");
  }
  app.get("/agendamentos", horariosController.listarHorarios);
};
