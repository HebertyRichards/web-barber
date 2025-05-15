const pool = require("../config/database");

module.exports = {
  servicoBarbeiro: async (req, res) => {
    const { nome_cliente, barbeiro, servico, data_servico } = req.body;

    if (!servico || (Array.isArray(servico) && servico.length === 0)) {
      return res
        .status(400)
        .json({ message: "É necessário selecionar pelo menos um serviço." });
    }

    const servicos = Array.isArray(servico) ? servico : [servico];
    const matchValores = servicos
      .map((s) => {
        const match = s.match(/R\$ ?(\d+,\d{2})/);
        return match ? parseFloat(match[1].replace(",", ".")) : null;
      })
      .filter((v) => v !== null);

    if (matchValores.length === 0) {
      return res.status(400).json({ message: "Valor do serviço inválido." });
    }

    const valorTotal = matchValores.reduce((acc, cur) => acc + cur, 0);
    const servicoTexto = servicos.join(" + ");

    try {
      await pool.promise().query(
        `INSERT INTO servicos_realizados (nome_cliente, barbeiro, servico, valor, data_servico)
         VALUES (?, ?, ?, ?, ?)`,
        [nome_cliente, barbeiro, servicoTexto, valorTotal, data_servico]
      );
      res.json({ message: "Serviço registrado com sucesso." });
    } catch (error) {
      console.error("Erro ao registrar serviço:", error);
      res.status(500).json({ message: "Erro ao registrar serviço." });
    }
  },
};
