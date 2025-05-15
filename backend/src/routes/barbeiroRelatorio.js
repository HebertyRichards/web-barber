module.exports = (app) => {
  const { relatorioBarberController } = app.controllers;
  if (!relatorioBarberController) {
    console.error("❌ relatorioBarberController não carregado!");
  } else {
    console.log("✅ relatorioBarberController carregado com sucesso.");
  }
  app.get(
    "/relatorio/barbeiro/:nome",
    relatorioBarberController.barbeiroServico
  );
};
