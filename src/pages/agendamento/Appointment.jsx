import { useState, useEffect } from "react";
import Active from "../../header/Active";
import Footer from "../../footer/Footer";
import "../../styles/style.css";

// mudar título da página
function Agendamento() {
  useEffect(() => {
    document.title = "Agendamento - Barbearia Ramos";
  }, []);

  // estados para guardar os dados cadastrados
  const [data, setData] = useState("");
  const [telefone, setTelefone] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [horario, setHorario] = useState("");
  const [servico, setServico] = useState("");
  const [barbeiro, setBarbeiro] = useState("");
  const [horariosIndisponiveis, setHorariosIndisponiveis] = useState([]);

  // pega a data de agora e aplica no campo de horario no agendamento para evitar erros e marcações no passado
  useEffect(() => {
    setData(getDataAtual());
  }, []);

  function getDataAtual() {
    return new Date().toISOString().split("T")[0];
  }

  // enviar agendamento
  const handleSubmit = async (e) => {
    e.preventDefault();

    //formatar o telefone
    if (!telefone && !email) {
      alert("Por favor, preencha o telefone ou o email.");
      return;
    }

    // credenciais do banco de dados
    const agendamento = {
      nome_cliente: nome,
      telefone,
      email,
      data_agendamento: data,
      horario,
      servico,
      barbeiro,
    };

    //envia dados para o banco de dados
    try {
      const response = await fetch(
        "https://web-barber-production.up.railway.app/agendar",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(agendamento),
        }
      );
  
      if (response.ok) {
        alert("Agendamento realizado com sucesso!");
  
        // Chamada para registrar o serviço
        await fetch("https://web-barber-production.up.railway.app/servico/finalizar", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            nome_cliente: nome,
            barbeiro,
            servico,
            data_servico: data,
          }),
        });
  
      } else {
        const data = await response.json();
        alert(data.message || "Erro ao agendar, tente novamente.");
      }
    } catch (error) {
      console.error("Erro ao enviar agendamento:", error);
      alert("Erro ao enviar o agendamento. Tente novamente.");
    }
  };

  //formatação do telefone estilo(XX)xxxxx-xxxx
  const formatarTelefone = (valor) => {
    valor = valor.replace(/\D/g, "");

    if (valor.length > 2) {
      valor = `(${valor.slice(0, 2)}) ${valor.slice(2)}`;
    }
    if (valor.length > 10) {
      valor = `${valor.slice(0, 10)}-${valor.slice(10, 14)}`;
    }

    return valor;
  };

  // busca qual o horario aquele barbeiro tem disponivel no dia, evitar overbooking
  useEffect(() => {
    async function buscarHorariosIndisponiveis() {
      if (data && barbeiro) {
        try {
          const res = await fetch(
            `https://web-barber-production.up.railway.app/agendamentos?data=${data}&barbeiro=${encodeURIComponent(
              barbeiro
            )}`
          );
          const json = await res.json();
          setHorariosIndisponiveis(json.horariosIndisponiveis || []);
        } catch (err) {
          console.error("Erro ao buscar horários indisponíveis:", err);
        }
      }
    }

    buscarHorariosIndisponiveis();
  }, [data, barbeiro]);

  // filtra todos os horarios e gera os horarios disponiveis
  const renderHorarios = () => {
    const horarios = [
      "08:00",
      "08:30",
      "09:00",
      "09:30",
      "10:00",
      "10:30",
      "11:00",
      "11:30",
      "12:00",
      "12:30",
      "13:00",
      "13:30",
      "14:00",
      "14:30",
      "15:00",
      "15:30",
      "16:00",
      "16:30",
      "17:00",
      "17:30",
      "18:00",
      "18:30",
      "19:00",
      "19:30",
    ];

    //formatar a hora em Horas:Minutos e formatar a data em YYYY-MM-DD
    const horaAtual = new Date();
    const horaAtualFormatada = `${String(horaAtual.getHours()).padStart(
      2,
      "0"
    )}:${String(horaAtual.getMinutes()).padStart(2, "0")}`;
    const dataAtual = `${horaAtual.getFullYear()}-${String(
      horaAtual.getMonth() + 1
    ).padStart(2, "0")}-${String(horaAtual.getDate()).padStart(2, "0")}`;
    // consulta seo dia do agendamento é mesmo de hoje, se for menor remove da lista
    const isHoje = data === dataAtual;

    // remove automaticamente horarios indisponiveis  e criação de option para cada horario disponivel
    return horarios
      .filter((horario) => {
        if (isHoje && horario <= horaAtualFormatada) return false;
        return !horariosIndisponiveis.includes(horario);
      })
      .map((horario) => (
        <option key={horario} value={horario}>
          {horario}
        </option>
      ));
  };

  // lógica para deixar botão inutilizavel caso os campos não sejam preenchidos "required"
  const isFormValid =
    nome.trim() !== "" &&
    data.trim() !== "" &&
    horario.trim() !== "" &&
    servico.trim() !== "" &&
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
                onChange={(e) => setTelefone(formatarTelefone(e.target.value))}
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
                min={getDataAtual()}
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
                {renderHorarios()}
              </select>
            </div>
            <div className="cut-info">
              <select
                id="servico"
                name="servico"
                required
                value={servico}
                onChange={(e) => setServico(e.target.value)}
              >
                <option value="">Selecione</option>
                <option value="Corte - R$30,00">Corte - R$30,00</option>
                <option value="Barba - R$25,00">Barba - R$25,00</option>
                <option value="Bigode - R$5,00">Bigode - R$5,00</option>
                <option value="Corte + Barba -  R$50,00">
                  Corte + Barba - R$50,00
                </option>
                <option value="Corte + Bigode+ Sobrancelha - R$40,00 ">
                  Corte + Bigode + Sobrancelha - R$40,00
                </option>
                <option value="Penteado - R$20,00">Penteado - R$20,00</option>
                <option value="Máquina Geral - R$20,00">
                  Máquina Geral - R$20,00
                </option>
                <option value="Luzes - R$65,00">Luzes - R$65,00</option>
                <option value="Hidratação - R$15,00">
                  Hidratação - R$15,00
                </option>
              </select>
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
