module.exports = (app) => {
  const { relatorioAllController } = app.controllers;
  if (!relatorioAllController) {
    console.error("❌ arelatorioAllController não carregado!");
  } else {
    console.log("✅ relatorioAllController carregado com sucesso.");
  }
  app.get("/relatorio/todos", relatorioAllController.servicoBarbeiroTodos);
};
