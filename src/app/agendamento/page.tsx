"use client";
import { enviarAgendamento } from "../../services/appointmentService";
import { useAgendamento } from "../../hooks/useAppointment";
import { formatarTel } from "../../utils/formaterTel";
import { useBuscarHorariosIndisponiveis } from "../../services/appointmentService";
import { gerarHorariosDisponiveis } from "../../utils/horarios";

function Agendamento() {
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
  } = useAgendamento();

  useBuscarHorariosIndisponiveis();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!telefone && !email) {
      alert("Por favor, preencha o telefone ou o email.");
      return;
    }

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
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "Erro ao enviar agendamento.";
      alert(errorMessage);
    }
  };

  const renderHorarios = () =>
    gerarHorariosDisponiveis(data, horariosIndisponiveis);

  const isFormValid =
    nome.trim() !== "" &&
    data.trim() !== "" &&
    horario.trim() !== "" &&
    servico.length > 0 &&
    barbeiro.trim() !== "" &&
    (telefone.trim() !== "" || email.trim() !== "");

  return (
    <>
      <div
        className="bg-no-repeat bg-cover p-10"
        style={{
          backgroundImage: `linear-gradient(to right, rgb(0,0,0) 0%, rgba(255,126,95,0) 100%), url('/1.webp')`,
        }}
      ></div>
      <div className="bg-[#2c2c2c] text-white p-5 md:mx-auto">
        <div className="flex flex-col items-center mx-auto bg-[#111] rounded-[20px] shadow-[0_3px_6px_rgba(0,0,0,1)] px-5 py-2.5 md:w-full">
          <h2
            className="text-[1.0rem] font-bold mt-[3%] lg:text-[1.5rem] xl:text-[2rem]"
            style={{ fontFamily: "ImpactCustom, sans-serif" }}
          >
            Agendamento
          </h2>
          <p className="text-center text-lg lg:text-xl mb-10 mt-[3%]">
            Venha aumentar sua autoestima ficando novo!
          </p>
          <form
            id="formulario"
            className="bg-[#111] rounded-[20px] shadow-[0_3px_6px_rgba(0,0,0,1)] w-full md:w-[50%] px-2"
            onSubmit={handleSubmit}
          >
            <label
              htmlFor="telefone"
              className="text-white ml-[20px] block font-bold"
            >
              Telefone
            </label>
            <input
              type="tel"
              id="telefone"
              name="telefone"
              placeholder="Telefone com DD"
              value={telefone}
              onChange={(e) => setTelefone(formatarTel(e.target.value))}
              className="w-full mt-4 border-b border-[whitesmoke] bg-transparent text-white placeholder:text-[#9e9e9e] placeholder:font-bold py-2.5 px-5 mb-5 focus:outline-none"
            />
            <label
              htmlFor="text"
              className="text-white ml-[20px] block font-bold"
            >
              Nome
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Seu Nome"
              required
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="w-full border-b border-[whitesmoke] bg-transparent text-white placeholder:text-[#9e9e9e] placeholder:font-bold py-2.5 px-5 mb-5 focus:outline-none"
            />
            <label
              htmlFor="email"
              className="text-white ml-[20px] block font-bold"
            >
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Seu E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-b border-[whitesmoke] bg-transparent text-white placeholder:text-[#9e9e9e] placeholder:font-bold py-2.5 px-5 mb-5 focus:outline-none"
            />
            <div className="flex flex-col justify-center gap-8 md:gap-2">
              <label
                htmlFor="data"
                className="text-white ml-[20px] block font-bold"
              >
                Data
              </label>
              <input
                type="date"
                name="data"
                id="date"
                value={data}
                min={dataMinima}
                onChange={(e) => setData(e.target.value)}
                className="ml-[20px] my-[10px] p-[10px] bg-[#2f2f2f] text-white border-none shadow-[0_3px_6px_rgba(0,0,0,1)] sm:ml-0"
                required
              />
              <label
                htmlFor="horario"
                className="text-white ml-[20px] block font-bold"
              >
                Horario
              </label>
              <select
                id="horario"
                name="horario"
                required
                value={horario}
                onChange={(e) => setHorario(e.target.value)}
                className="ml-[20px] my-[10px] p-[10px] bg-[#2f2f2f] text-white border-none shadow-[0_3px_6px_rgba(0,0,0,1)] sm:ml-0"
              >
                <option value="">Horário</option>
                {renderHorarios().map((horario) => (
                  <option key={horario} value={horario}>
                    {horario}
                  </option>
                ))}
              </select>
            </div>
            <div className="m-[10px] w-full">
              <p className="text-white ml-[20px] block font-bold">
                Selecione os serviços:
              </p>
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
                <label
                  key={item}
                  style={{ display: "block", marginBottom: "5px" }}
                  className="text-white border-none shadow-[0_3px_6px_rgba(0,0,0,1)] p-[10px] w-[90%] md:p-[5px] m-4 mx-auto"
                >
                  <input
                    type="checkbox"
                    value={item}
                    checked={servico.includes(item)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setServico((prev) => [...prev, item]);
                      } else {
                        setServico((prev) =>
                          prev.filter((val) => val !== item)
                        );
                      }
                    }}
                  />{" "}
                  {item}
                </label>
              ))}
            </div>
            <div className="m-[10px] w-full">
              <label
                htmlFor="barbeiro"
                className="text-white ml-[20px] block font-bold"
              >
                Barbeiro
              </label>
              <select
                id="barbeiro"
                name="barbeiro"
                required
                value={barbeiro}
                onChange={(e) => setBarbeiro(e.target.value)}
                className="ml-[20px] my-[10px] p-[10px] bg-[#2f2f2f] text-white border-none shadow-[0_3px_6px_rgba(0,0,0,1)] w-auto md:ml-0"
              >
                <option value="">Selecione</option>
                <option value="João">João</option>
                <option value="Carlos">Carlos</option>
                <option value="Pedro">Pedro</option>
              </select>
            </div>
            <div className="mt-[2%]">
              <button
                type="submit"
                disabled={!isFormValid}
                className={`mx-auto block p-5 m-4 md:p-4 rounded-full font-bold border-none transition-colors duration-400 ease-in-out
    ${
      isFormValid
        ? "bg-[#f5bd25] text-white hover:bg-yellow-400 cursor-pointer"
        : "bg-gray-400 text-gray-600 cursor-not-allowed"
    }
  `}
              >
                Confirmar Agendamento
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Agendamento;
