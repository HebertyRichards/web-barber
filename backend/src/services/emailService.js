require("dotenv").config();
const transport = require("../config/email");

async function enviarEmail(
  email,
  nome_cliente,
  data_agendamento,
  horario,
  barbeiro,
  servico,
  codigo
) {
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

  const mensagem = `
      <h1>Agendamento Concluído</h1>
      <p>Olá ${nome_cliente}, seu agendamento foi concluído no dia ${dataFormatada} às ${horario} com o barbeiro ${barbeiro}.</p>
      <p>Segue o(s) serviço(s) agendado(s):</p>
      <ul>
        ${listaServicos}
      </ul>
      <p>O código do seu agendamento é: <strong>${codigo}</strong></p>
      <p>Para cancelar, acesse <a href="https://web-barber-phi.vercel.app/cancelar-agendamento">Cancelar Agendamento</a> e insira o código.</p>
      <p>A barbearia Web Barber-Shop agradece a preferência. Venha ficar novo de novo!</p>
    `;

  const mailOptions = {
    from: `Barbearia Ramos <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Agendamento Confirmado!",
    html: mensagem,
  };

  return transport.sendMail(mailOptions);
}

module.exports = { enviarEmail };
