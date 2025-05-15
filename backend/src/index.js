const express = require("express");
const consign = require("consign");
require("dotenv").config();

const app = express();

app.use(express.json());
const corsMiddleware = require("./middleware/cors");
app.use(corsMiddleware);

consign()
  .include("config/database.js")
  .then("config/email.js")
  .then("controllers/agendamentoController.js")
  .then("controllers/horariosController.js")
  .then("controllers/cancelarAgendamentoController.js")
  .then("controllers/barbeiroController.js")
  .then("controllers/relatorioBarberController.js")
  .then("controllers/relatorioAllController.js")
  .into(app);

// porta de conexão backend
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
