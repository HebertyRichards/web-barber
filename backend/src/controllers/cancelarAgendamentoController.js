const pool = require("../config/database");
const { enviarEmailCancelamento } = require("../services/cancelEmailService");

module.exports = {
  cancelarAgendamento: async (req, res) => {
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

      const deletarAgendamento =
        "DELETE FROM agendamentos WHERE id_agendamento = ?";

      pool.query(
        deletarAgendamento,
        [idAgendamento],
        async (errDelete, resultDelete) => {
          if (errDelete) {
            console.error("Erro ao deletar agendamento:", errDelete);
            return res
              .status(500)
              .json({ message: "Erro ao cancelar o agendamento." });
          }

          if (resultDelete.affectedRows === 0) {
            return res
              .status(404)
              .json({ message: "Agendamento não encontrado." });
          }

          if (email) {
            try {
              const info = await enviarEmailCancelamento({
                to: email,
                nomeCliente: nome_cliente,
                data: data_agendamento,
                horario,
                barbeiro,
                servicos: servico,
              });

              return res.status(200).json({
                message: "Agendamento cancelado com sucesso e e-mail enviado!",
                info: info.response,
              });
            } catch (error) {
              console.error("Erro ao enviar o e-mail:", error);
              return res.status(500).json({
                message: "Agendamento cancelado, mas erro ao enviar e-mail.",
              });
            }
          } else {
            return res
              .status(200)
              .json({ message: "Agendamento cancelado com sucesso!" });
          }
        }
      );
    });
  },
};
