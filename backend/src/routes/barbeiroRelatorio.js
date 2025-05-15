module.exports = (app) => {
  const { relatorioBarberController } = app.controllers;

  app.get(
    "/relatorio/barbeiro/:nome",
    relatorioBarberController.barbeiroServico
  );
};
