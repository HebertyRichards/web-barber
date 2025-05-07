const express = require("express"); // framework do node.js
const mysql = require("mysql2"); // importa a biblioteca mysql para conectar back end ao banco de dados
const nodemailer = require("nodemailer"); // biblioteca para envio de emails
require("dotenv").config(); // arquivo para configuração de deploy

const app = express();

// esse cors lida com requisições json para permitir acesso ao frontend da aplicação
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

/* configuração para conexão do banco de dados, 
máximo de conexões simultaneas: 10 
e o tempo para conectar ao banco: 10 segundos 
As variaveis estão diretamente aplicadas no railway*/
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

/* configuração para envio do email */
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

  /* se não preencher o telefone ou email, aparece a mensagem de aviso */
  if (!telefone && !email) {
    return res
      .status(400)
      .json({ message: "Por favor, preencha o telefone ou o email." });
  }

  /* ao conectar com o banco e o usuario inserir seus dados, aplica esse comando diretamente para cadastro */
  const sql =
    "INSERT INTO agendamentos (nome_cliente, telefone, email, data_agendamento, horario, servico, barbeiro) VALUES (?, ?, ?, ?, ?, ?, ?)";

  // executando uma query, responsavel por salvar o agendamento, em caso de falha exibe mensagem de erro
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

      // modificando o texto na mensagem do email, para maior entendimento do usuário
      const data = new Date(data_agendamento);
      const dataFormatada = data
        .toLocaleDateString("pt-BR", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        })
        .replace(/\//g, "-");

      const mensagemConfirmacao = `
        <h1>Agendamento Concluído</h1>
        <p>Olá ${nome_cliente}, seu agendamento foi concluído no dia ${dataFormatada} às ${horario} com o barbeiro ${barbeiro}.</p>
        <p>Segue o serviço agendado:</p>
        <ul>
          <li>${servico}</li>
        </ul>
        <p>O código do seu agendamento é: <strong>${result.insertId}</strong></p>
        <p>Para cancelar, acesse <a href="https://web-barber-xi.vercel.app/cancelar-agendamento">Cancelar Agendamento</a> e insira o código.</p>
        <p>A barbearia Web Barber-Shop agradece a preferência. Venha ficar novo de novo!</p>
      `;

      /* mensagem de email, caso a requisição de cadastro for sucesso, 
        caso o email seja inválido ou sem cadastro, aparece a mensagem de erro */
      if (email) {
        const mailOptions = {
          from: "Barbearia Ramos <" + process.env.EMAIL_USER + ">",
          to: email,
          subject: "Agendamento Confirmado!",
          html: mensagemConfirmacao
        };

        transport.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.error("Erro ao enviar o e-mail:", error);
            return res.status(500).json({
              message: "Agendamento salvo, mas erro ao enviar e-mail.",
            });
          }
          res.status(200).json({
            message: "Agendamento criado e e-mail enviado com sucesso!",
            info: info.response,
          });
        });
      }
    }
  );
});

// rota para buscar horários já agendados para de um barbeiro em uma data específica
app.get("/agendamentos", (req, res) => {
  const { data, barbeiro } = req.query;

  if (!data || !barbeiro) {
    return res
      .status(400)
      .json({ message: "Data e barbeiro são obrigatórios." });
  }

  const sql =
    "SELECT horario FROM agendamentos WHERE data_agendamento = ? AND barbeiro = ?";

  pool.query(sql, [data, barbeiro], (err, results) => {
    if (err) {
      console.error("Erro ao buscar agendamentos:", err);
      return res.status(500).json({ message: "Erro ao buscar agendamentos." });
    }

    const horariosIndisponiveis = results.map((row) => row.horario);
    res.json({ horariosIndisponiveis });
  });
});

//rota para cancelar agendamento
app.delete("/cancelar-agendamento/:id", (req, res) => {
  const idAgendamento = req.params.id;

  // obriga que o campo seja obrigatorio o preenchimento para prosseguir
  if (!idAgendamento) {
    return res
      .status(400)
      .json({ message: "ID do agendamento é obrigatório." });
  }

  /* cria uma constante e nela, está inserido o código para apagar os dados,
  se o id for correto apaga os dados, se nao encontrar ira aparecer agendamento nao encontrado
  ou erro do banco de dados apagar os dados */
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

// porta de conexão backend
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
