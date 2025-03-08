import { useState, useEffect } from "react";
import Active from "../../header/Active";
import Footer from "../../footer/Footer";
import "../../style.css";

function Agendamento() {
  useEffect(() => {
    document.title = "Agendamento - Web Barber Shop";
  }, []);

  const [data, setData] = useState("");
  const [telefone, setTelefone] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [horario, setHorario] = useState("");
  const [servico, setServico] = useState("");
  const [barbeiro, setBarbeiro] = useState("");

  useEffect(() => {
    setData(getDataAtual());
  }, []);

  function getDataAtual() {
    return new Date().toISOString().split("T")[0];
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!telefone && !email) {
      alert("Por favor, preencha o telefone ou o email.");
      return;
    }

    const agendamento = {
      nome_cliente: nome,
      telefone,
      email,
      data_agendamento: data,
      horario,
      servico,
      barbeiro,
    };

    try {
      const response = await fetch("http://localhost:3000/agendar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(agendamento),
      });

      if (response.ok) {
        alert("Agendamento realizado com sucesso!");
      } else {
        const data = await response.json();
        alert(data.message || "Erro ao agendar, tente novamente.");
      }
    } catch (error) {
      console.error("Erro ao enviar agendamento:", error);
      alert("Erro ao enviar o agendamento. Tente novamente.");
    }
  };

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

    const horaAtual = new Date();
    const horaAtualFormatada = `${String(horaAtual.getHours()).padStart(
      2,
      "0"
    )}:${String(horaAtual.getMinutes()).padStart(2, "0")}`;
    const dataAtual = `${horaAtual.getFullYear()}-${String(
      horaAtual.getMonth() + 1
    ).padStart(2, "0")}-${String(horaAtual.getDate()).padStart(2, "0")}`;
    const dataSelecionada = data;

    const isHoje = dataSelecionada === dataAtual;
    const isPosterior = dataSelecionada > dataAtual;

    return horarios
      .filter((horario) => {
        if (isHoje) {
          return horario > horaAtualFormatada;
        }
        return true;
      })
      .map((horario) => (
        <option key={horario} value={horario}>
          {horario}
        </option>
      ));
  };

  return (
    <>
      <div className="back2">
        <Active />
      </div>
      <div className="back-forms">
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
              <option value="Hidratação - R$15,00">Hidratação - R$15,00</option>
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
            <button type="submit">Confirmar Agendamento</button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Agendamento;
