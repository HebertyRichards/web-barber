module.exports = (app) => {
  const { barbeiroController } = app.controllers;
  if (!barbeiroController) {
    console.error("❌ barbeiroController não carregado!");
  } else {
    console.log("✅ barbeiroController carregado com sucesso.");
  }

  app.post("/servico/finalizar", barbeiroController.servicoBarbeiro);
};
