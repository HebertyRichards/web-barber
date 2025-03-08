const express = require("express");
const mysql = require("mysql2");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use((req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://web-barber-phi.vercel.app"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  next();
});

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  connectTimeout: 10000,
});

const transport = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

//rota para criar um agendamento
app.post("/agendar", (req, res) => {
  const {
    nome_cliente,
    telefone,
    email,
    data_agendamento,
    horario,
    servico,
    barbeiro,
  } = req.body;

  if (!telefone && !email) {
    return res
      .status(400)
      .json({ message: "Por favor, preencha o telefone ou o email." });
  }

  const sql =
    "INSERT INTO agendamentos (nome_cliente, telefone, email, data_agendamento, horario, servico, barbeiro) VALUES (?, ?, ?, ?, ?, ?, ?)";

  pool.query(
    sql,
    [
      nome_cliente,
      telefone,
      email,
      data_agendamento,
      horario,
      servico,
      barbeiro,
    ],
    (err, result) => {
      if (err) {
        console.error("Erro ao inserir no banco:", err);
        return res.status(500).json({ message: "Erro ao salvar agendamento" });
      }
      if (email) {
        const mailOptions = {
          from: "Web Barber-Shop <" + process.env.EMAIL_USER + ">",
          to: email,
          subject: "Agendamento Confirmado!",
          html: `
            <h1>Agendamento Concluído</h1> 
            <p>Olá ${nome_cliente}, seu agendamento foi concluído no dia ${data_agendamento} às ${horario} com o barbeiro ${barbeiro}.</p>
            <p>Segue o serviço agendado:</p>
            <ul>
              <li>${servico}</li>
            </ul>
            <p>O código do seu agendamento é: <strong>${result.insertId}</strong></p>
            <p>Para cancelar, acesse <a href="https://web-barber-phi.vercel.app/cancelar-agendamento">Cancelar Agendamento</a> e insira o código.</p>
            <p>A barbearia Web Barber-Shop agradece a preferência. Venha ficar novo de novo!</p>
          `,
        };
        transport.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.error("Erro ao enviar e-mail:", error);
            return res.status(500).json({
              message: "Agendamento salvo, mas erro ao enviar e-mail.",
            });
          }
          res.status(200).json({
            message: "Agendamento criado e e-mail enviado com sucesso!",
          });
        });
      } else {
        return res.status(200).json({
          message: "Agendamento criado com sucesso!",
        });
      }
    }
  );
});

//rota para cancelar agendamento
app.delete("/cancelar-agendamento/:id", (req, res) => {
  const idAgendamento = req.params.id;

  if (!idAgendamento) {
    return res
      .status(400)
      .json({ message: "ID do agendamento é obrigatório." });
  }

  const sql = "DELETE FROM agendamentos WHERE id_agendamento = ?";

  pool.query(sql, [idAgendamento], (err, result) => {
    if (err) {
      console.error("Erro ao deletar agendamento:", err);
      return res
        .status(500)
        .json({ message: "Erro ao cancelar o agendamento." });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Agendamento não encontrado." });
    }

    res.status(200).json({ message: "Agendamento cancelado com sucesso!" });
  });
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
