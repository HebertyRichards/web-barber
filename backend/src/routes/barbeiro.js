module.exports = (app) => {
  const { barbeiroController } = app.controllers;
  if (!barbeiroController) {
    console.error("❌ agendamentoController não carregado!");
  } else {
    console.log("✅ agendamentoController carregado com sucesso.");
  }

  app.post("/servico/finalizar", barbeiroController.servicoBarbeiro);
};
