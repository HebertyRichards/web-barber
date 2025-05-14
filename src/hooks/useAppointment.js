// src/hooks/useAgendamento.js
import { useState, useEffect } from "react";

// Hook para gerenciar os estados do agendamento
export function useAgendamento() {
  const [data, setData] = useState("");
  const [telefone, setTelefone] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [horario, setHorario] = useState("");
  const [servico, setServico] = useState([]);
  const [barbeiro, setBarbeiro] = useState("");
  const [horariosIndisponiveis, setHorariosIndisponiveis] = useState([]);

  // Função para obter a data atual
  function getDataAtual() {
    return new Date().toISOString().split("T")[0];
  }

  // Efeito para pegar a data de agora
  useEffect(() => {
    setData(getDataAtual());
  }, []);

  return {
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
    setHorariosIndisponiveis,
    dataMinima: getDataAtual()
  };
}