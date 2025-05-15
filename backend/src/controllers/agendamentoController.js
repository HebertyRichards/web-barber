const pool = require("../config/database");
const { enviarEmail } = require("../services/emailService");

module.exports = {
  criarAgendamento: async (req, res) => {
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

    try {
      const [result] = await pool
        .promise()
        .query(sql, [
          nome_cliente,
          telefone,
          email,
          data_agendamento,
          horario,
          servico,
          barbeiro,
        ]);

      if (email) {
        try {
          await enviarEmail(
            email,
            nome_cliente,
            data_agendamento,
            horario,
            barbeiro,
            servico,
            result.insertId
          );
          return res.status(200).json({
            message: "Agendamento criado e e-mail enviado com sucesso!",
          });
        } catch (error) {
          console.error("Erro ao enviar o e-mail:", error);
          return res.status(500).json({
            message: "Agendamento salvo, mas erro ao enviar e-mail.",
          });
        }
      } else {
        return res.status(200).json({
          message:
            "Agendamento criado com sucesso! Nenhum e-mail enviado porque o campo 'email' não foi preenchido.",
        });
      }
    } catch (err) {
      console.error("Erro ao inserir no banco:", err);
      return res.status(500).json({ message: "Erro ao salvar agendamento" });
    }
  },
};
