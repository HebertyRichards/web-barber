module.exports = (app) => {
  const { relatorioAllController } = app.controllers;
  if (!relatorioAllController) {
    console.error("❌ agendamentoController não carregado!");
  } else {
    console.log("✅ agendamentoController carregado com sucesso.");
  }
  app.get("/relatorio/todos", relatorioAllController.servicoBarbeiroTodos);
};
