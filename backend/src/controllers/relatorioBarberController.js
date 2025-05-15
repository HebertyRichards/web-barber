const pool = require("../config/database");

module.exports = {
  barbeiroServico: async (req, res) => {
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
        servicosPorCliente: dados,
      });
    } catch (error) {
      console.error("Erro ao buscar relatório:", error);
      res.status(500).json({ message: "Erro ao buscar relatório." });
    }
  },
};
