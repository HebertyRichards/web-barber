require("dotenv").config();
const express = require("express");
const consign = require("consign");

const app = express();

app.use(express.json());
const corsMiddleware = require("./middleware/cors");
app.use(corsMiddleware);

consign()
.include("./config")
.then("./controllers")  
.then("./routes")       
.into(app);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
