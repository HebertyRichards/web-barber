module.exports = (app) => {
  const { relatorioAllController } = app.controllers;

  app.get("/relatorio/todos", relatorioAllController.servicoBarbeiroTodos);
};
