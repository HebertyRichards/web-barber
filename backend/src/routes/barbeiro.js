module.exports = (app) => {
  const { barbeiroController } = app.controllers;

  app.post("/servico/finalizar", barbeiroController.servicoBarbeiro);
};
