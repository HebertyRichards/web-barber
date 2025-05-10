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

        const listaServicos = Array.isArray(servico)
        ? servico.map((s) => `<li>${s}</li>`).join("")
        : `<li>${servico}</li>`;
      
      const mensagemConfirmacao = `
        <h1>Agendamento Concluído</h1>
        <p>Olá ${nome_cliente}, seu agendamento foi concluído no dia ${dataFormatada} às ${horario} com o barbeiro ${barbeiro}.</p>
        <p>Segue o(s) serviço(s) agendado(s):</p>
        <ul>
          ${listaServicos}
        </ul>
        <p>O código do seu agendamento é: <strong>${result.insertId}</strong></p>
        <p>Para cancelar, acesse <a href="https://web-barber-phi.vercel.app/cancelar-agendamento">Cancelar Agendamento</a> e insira o código.</p>
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

  if (!idAgendamento) {
    return res
      .status(400)
      .json({ message: "ID do agendamento é obrigatório." });
  }

  const buscarAgendamento =
    "SELECT * FROM agendamentos WHERE id_agendamento = ?";

  pool.query(buscarAgendamento, [idAgendamento], (err, results) => {
    if (err) {
      console.error("Erro ao buscar agendamento:", err);
      return res
        .status(500)
        .json({ message: "Erro ao buscar agendamento para cancelamento." });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: "Agendamento não encontrado." });
    }

    const agendamento = results[0];
    const {
      nome_cliente,
      email,
      data_agendamento,
      horario,
      barbeiro,
      servico,
    } = agendamento;

    const listaServicos = Array.isArray(servico)
  ? servico.map((s) => `<li>${s}</li>`).join("")
  : `<li>${servico}</li>`;
   const mensagemCancelamento = `
  <h1>Agendamento Cancelado</h1>
  <p>Olá ${nome_cliente}, seu agendamento para o dia ${data_agendamento} às ${horario} com o barbeiro ${barbeiro} foi cancelado.</p>
  <p>Serviço(s) cancelado(s):</p>
  <ul>${listaServicos}</ul>
  <p>Se você tiver alguma dúvida ou precisar reagendar, entre em contato conosco.</p>
  <p>Agradecemos por escolher a Barbearia Freitas!</p>
`;

    const deletarAgendamento =
      "DELETE FROM agendamentos WHERE id_agendamento = ?";

      pool.query(deletarAgendamento, [idAgendamento], (errDelete, resultDelete) => {
        if (errDelete) {
          console.error("Erro ao deletar agendamento:", errDelete);
          return res.status(500).json({ message: "Erro ao cancelar o agendamento." });
        }
      
        if (resultDelete.affectedRows === 0) {
          return res.status(404).json({ message: "Agendamento não encontrado." });
        }

      if (email) {
        const mailOptions = {
          from: "Barbearia Freitas <" + process.env.EMAIL_USER + ">",
          to: email,
          subject: "Agendamento Cancelado",
          html: mensagemCancelamento,
        };

        transport.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.error("Erro ao enviar o e-mail:", error);
            return res.status(500).json({
              message: "Agendamento cancelado, mas erro ao enviar e-mail.",
            });
          }

          return res.status(200).json({
            message: "Agendamento cancelado com sucesso e e-mail enviado!",
            info: info.response,
          });
        });
      } else {
        return res.status(200).json({ message: "Agendamento cancelado com sucesso!" });
      }
    });
  });
});


//rota de dados dos barbeiros (envia dados qual barbeiro realizou o serviço, qual cliente e quanto foi o custo)
app.post("/servico/finalizar", async (req, res) => {
  const { nome_cliente, barbeiro, servico, data_servico } = req.body;

  const match = servico.match(/R\$ ?(\d+,\d{2})/);
  if (!match) {
    return res.status(400).json({ message: "Valor do serviço inválido." });
  }

  const valor = parseFloat(match[1].replace(",", "."));

  try {
    await pool.promise().query(
      `INSERT INTO servicos_realizados (nome_cliente, barbeiro, servico, valor, data_servico)
       VALUES (?, ?, ?, ?, ?)`,
      [nome_cliente, barbeiro, servico, valor, data_servico]
    );
    res.json({ message: "Serviço registrado com sucesso." });
  } catch (error) {
    console.error("Erro ao registrar serviço:", error);
    res.status(500).json({ message: "Erro ao registrar serviço." });
  }
});

// rota para visualizar os dados dos barbeiros e seus serviços prestados(DADOS APENAS DE 1 PESSOA)
app.get("/relatorio/barbeiro/:nome", async (req, res) => {
  const { nome } = req.params;

  try {
    const [dados] = await pool.query(
      `SELECT nome_cliente, servico, valor FROM servicos_realizados WHERE barbeiro = ?`,
      [nome]
    );

    const totalServicos = dados.length;
    const totalValor = dados.reduce((acc, cur) => acc + cur.valor, 0);

    res.json({
      barbeiro: nome,
      totalServicos,
      totalValor: totalValor.toFixed(2),
      servicosPorCliente: dados
    });
  } catch (error) {
    console.error("Erro ao buscar relatório:", error);
    res.status(500).json({ message: "Erro ao buscar relatório." });
  }
});

// ROTA PARA MOSTRAR TODOS OS DADOS DOS BARBEIROS
app.get("/relatorio/todos", async (req, res) => {
  try {
    const [dados] = await pool.promise().query(`
      SELECT barbeiro, nome_cliente, servico, valor
      FROM servicos_realizados
    `);

    const relatorio = {};

    for (const item of dados) {
      const { barbeiro, nome_cliente, servico, valor } = item;

      if (!relatorio[barbeiro]) {
        relatorio[barbeiro] = {
          totalServicos: 0,
          totalValor: 0,
          servicosPorCliente: []
        };
      }

      relatorio[barbeiro].totalServicos++;
      relatorio[barbeiro].totalValor += Number(valor); 
      relatorio[barbeiro].servicosPorCliente.push({
        nome_cliente,
        servico,
        valor: Number(valor).toFixed(2) 
      });
    }

    for (const barbeiro in relatorio) {
      relatorio[barbeiro].totalValor = relatorio[barbeiro].totalValor.toFixed(2);
    }

    res.json(relatorio);
  } catch (error) {
    console.error("Erro ao buscar relatório geral:", error);
    res.status(500).json({
      message: "Erro ao buscar relatório geral.",
      erro: error.message,
      stack: error.stack
    });
  }
});

// porta de conexão backend
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
