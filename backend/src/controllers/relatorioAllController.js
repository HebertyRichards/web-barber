const pool = require("../config/database");

module.exports = {
  servicoBarbeiroTodos: async (res) => {
    try {
      const [dados] = await pool
        .promise()
        .query(
          `SELECT barbeiro, nome_cliente, servico, valor FROM servicos_realizados`
        );

      const relatorio = {};

      for (const item of dados) {
        const { barbeiro, nome_cliente, servico, valor } = item;

        if (!relatorio[barbeiro]) {
          relatorio[barbeiro] = {
            totalServicos: 0,
            totalValor: 0,
            servicosPorCliente: [],
          };
        }

        relatorio[barbeiro].totalServicos++;
        relatorio[barbeiro].totalValor += Number(valor);
        relatorio[barbeiro].servicosPorCliente.push({
          nome_cliente,
          servico,
          valor: Number(valor).toFixed(2),
        });
      }

      for (const barbeiro in relatorio) {
        relatorio[barbeiro].totalValor =
          relatorio[barbeiro].totalValor.toFixed(2);
      }

      res.json(relatorio);
    } catch (error) {
      console.error("Erro ao buscar relatório geral:", error);
      res.status(500).json({
        message: "Erro ao buscar relatório geral.",
        erro: error.message,
        stack: error.stack,
      });
    }
  },
};
