module.exports = (app) => {
  const { relatorioBarberController } = app.controllers;
  if (!relatorioBarberController) {
    console.error("❌ agendamentoController não carregado!");
  } else {
    console.log("✅ agendamentoController carregado com sucesso.");
  }
  app.get(
    "/relatorio/barbeiro/:nome",
    relatorioBarberController.barbeiroServico
  );
};
