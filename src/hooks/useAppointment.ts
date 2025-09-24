"use client"
import { useState, useEffect } from "react";

export function useAgendamento() {
  const [data, setData] = useState("");
  const [telefone, setTelefone] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [horario, setHorario] = useState("");
  const [servico, setServico] = useState<string[]>([]);
  const [barbeiro, setBarbeiro] = useState("");
  const [horariosIndisponiveis, setHorariosIndisponiveis] = useState([]);

  function getDataAtual() {
    return new Date().toISOString().split("T")[0];
  }

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
    dataMinima: getDataAtual(),
  };
}
