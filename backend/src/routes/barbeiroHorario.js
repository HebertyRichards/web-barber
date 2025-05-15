module.exports = (app) => {
  const { horariosController } = app.controllers;

  app.get("/agendamentos", horariosController.listarHorarios);
};
