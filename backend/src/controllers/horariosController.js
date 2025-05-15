const pool = require("../config/database");

module.exports = {

  listarHorarios: async (req, res) => {
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
        return res
          .status(500)
          .json({ message: "Erro ao buscar agendamentos." });
      }

      const horariosIndisponiveis = results.map((row) => row.horario);
      res.json({ horariosIndisponiveis });
    });
  },
};
