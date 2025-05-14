import Active from "../../components/Active";
import Footer from "../../components/Footer";
import { enviarAgendamento } from "../../services/appointmentService";
import { useAppointmenTitle } from "../../hooks/useAppointmentTitle";
import { useAgendamento } from "../../hooks/useAppointment";
import { formatarTel } from "../../utils/formaterTel";
import { useBuscarHorariosIndisponiveis } from "../../services/appointmentService";
import { gerarHorariosDisponiveis } from "../../utils/horarios";

import "../../styles/style.css";

// mudar título da página
function Agendamento() {
useAppointmenTitle("Agendamento - Barbearia Ramos")

  // retornando os estados do hook useagendamento
  const {
    data,
    telefone,
    nome,
    email,
    horario,
    servico,
    barbeiro,
    horariosIndisponiveis,
    setData,
    setTelefone,
    setNome,
    setEmail,
    setHorario,
    setServico,
    setBarbeiro,
    dataMinima,
    setHorariosIndisponiveis
  } = useAgendamento();

  useBuscarHorariosIndisponiveis(setHorariosIndisponiveis);
  // enviar agendamento
  const handleSubmit = async (e) => {
    e.preventDefault();

  // campos e-mail ou telefone, um dos dois é obrigatório
    if (!telefone && !email) {
      alert("Por favor, preencha o telefone ou o email.");
      return;
    }

    // credenciais do banco de dados e api para envio
    try {
      await enviarAgendamento({
        nome,
        telefone,
        email,
        data,
        horario,
        servico,
        barbeiro,
      });
  
      alert("Agendamento e serviço registrados com sucesso!");
    } catch (error) {
      alert(error.message || "Erro ao enviar agendamento.");
    }
  };

  const renderHorarios = () => gerarHorariosDisponiveis(data, horariosIndisponiveis);

  // lógica para deixar botão inutilizavel caso os campos não sejam preenchidos "required"
  const isFormValid =
    nome.trim() !== "" &&
    data.trim() !== "" &&
    horario.trim() !== "" &&
    servico.length > 0 &&
    barbeiro.trim() !== "" &&
    (telefone.trim() !== "" || email.trim() !== "");
  return (
    <>
      <div className="back2">
        <Active />
      </div>
      <div className="back-forms">
        <div className="forms-style">
          <h2>Agendamento</h2>
          <p>Venha aumentar sua autoestima ficando novo!</p>
          <form id="formulario" onSubmit={handleSubmit}>
            <div className="num-date">
              <input
                type="tel"
                id="telefone"
                name="telefone"
                placeholder="Telefone com DD"
                value={telefone}
                onChange={(e) => setTelefone(formatarTel(e.target.value))}
              />
            </div>
            <div className="name-info">
              <input
                type="text"
                id="nome"
                name="nome"
                placeholder="Seu Nome"
                required
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </div>
            <div className="email-infos">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Seu Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="date-hour">
              <input
                type="date"
                name="data"
                id="date"
                value={data}
                min={dataMinima}
                onChange={(e) => setData(e.target.value)}
                required
              />
              <select
              id="horario"
              name="horario"
              required
              value={horario}
              onChange={(e) => setHorario(e.target.value)}
              >
                <option value="">Horário</option>
                {renderHorarios().map((horario) => (
                  <option key={horario} value={horario}>
                    {horario}
                    </option>
                  ))}
                  </select>
            </div>
            <div className="cut-info">
  <p>Selecione os serviços:</p>
  {[
    "Corte - R$30,00",
    "Barba - R$25,00",
    "Bigode - R$5,00",
    "Corte + Barba - R$50,00",
    "Corte + Bigode + Sobrancelha - R$40,00",
    "Penteado - R$20,00",
    "Máquina Geral - R$20,00",
    "Luzes - R$65,00",
    "Hidratação - R$15,00",
  ].map((item) => (
    <label key={item} style={{ display: "block", marginBottom: "5px" }}>
      <input
        type="checkbox"
        value={item}
        checked={servico.includes(item)}
        onChange={(e) => {
          if (e.target.checked) {
            setServico((prev) => [...prev, item]);
          } else {
            setServico((prev) => prev.filter((val) => val !== item));
          }
        }}
      />
      {" "}{item}
    </label>
  ))}
</div>
            <div className="barber-infos">
              <select
                id="barbeiro"
                name="barbeiro"
                required
                value={barbeiro}
                onChange={(e) => setBarbeiro(e.target.value)}
              >
                <option value="">Selecione</option>
                <option value="João">João</option>
                <option value="Carlos">Carlos</option>
                <option value="Pedro">Pedro</option>
              </select>
            </div>
            <div className="btn-confirm">
              <button type="submit" disabled={!isFormValid}>
                Confirmar Agendamento
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Agendamento;
