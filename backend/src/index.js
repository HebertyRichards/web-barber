require("dotenv").config();
const express = require("express");
const consign = require("consign");
const path = require("path");

const app = express();

app.use(express.json());
const corsMiddleware = require("./middleware/cors");
app.use(corsMiddleware);
consign({ cwd: path.join(__dirname) })
  .include("./config")
  .then("./controllers")
  .then("./routes")
  .into(app);

console.log("Controllers carregados:", app.controllers);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
