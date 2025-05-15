const transport = require("../config/email");

async function enviarEmailCancelamento({
  to,
  nomeCliente,
  data,
  horario,
  barbeiro,
  servicos,
}) {
  const listaServicos = Array.isArray(servicos)
    ? servicos.map((s) => `<li>${s}</li>`).join("")
    : `<li>${servicos}</li>`;

  const mensagemCancelamento = `
    <h1>Agendamento Cancelado</h1>
    <p>Olá ${nomeCliente}, seu agendamento para o dia ${data} às ${horario} com o barbeiro ${barbeiro} foi cancelado.</p>
    <p>Serviço(s) cancelado(s):</p>
    <ul>${listaServicos}</ul>
    <p>Se você tiver alguma dúvida ou precisar reagendar, entre em contato conosco.</p>
    <p>Agradecemos por escolher a Barbearia Freitas!</p>
  `;

  const mailOptions = {
    from: `Barbearia Freitas <${process.env.EMAIL_USER}>`,
    to,
    subject: "Agendamento Cancelado",
    html: mensagemCancelamento,
  };

  return new Promise((resolve, reject) => {
    transport.sendMail(mailOptions, (error, info) => {
      if (error) {
        reject(error);
      } else {
        resolve(info);
      }
    });
  });
}

module.exports = { enviarEmailCancelamento };
