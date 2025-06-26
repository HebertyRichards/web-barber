"use client";
import { useState } from "react";
import { CancelAppoint } from "../../services/cancelAppointmentService";

function CancelarAgendamento() {
  const [idAgendamento, setIdAgendamento] = useState<number | "">("");
  const [mensagem, setMensagem] = useState("");
  const [erro, setErro] = useState("");

  const handleCancel = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMensagem("");
    setErro("");

    try {
      const resposta = await CancelAppoint(Number(idAgendamento));
      setMensagem(resposta.message || "Agendamento cancelado com sucesso.");
      setIdAgendamento("");
    } catch (error: unknown) {
      setErro(
        error instanceof Error
          ? error.message
          : "Erro ao cancelar o agendamento."
      );
      console.error(error);
    }
  };

  const cancelFormValid = idAgendamento !== "";

  return (
    <>
      <div
        className="bg-no-repeat bg-cover p-10"
        style={{
          backgroundImage: `linear-gradient(to right, rgb(0,0,0) 0%, rgba(255,126,95,0) 100%), url('/1.png')`,
        }}
      ></div>
      <div className="bg-[#2c2c2c] text-white p-5 sm:mx-auto">
        <div className="flex flex-col items-center mx-auto bg-[#111] rounded-[20px] shadow-[0_3px_6px_rgba(0,0,0,1)] px-5 py-2.5 md:w-[70%] sm:px-2 py-1">
          <h2
            className="text-[1.0rem] font-bold lg:text-[1.5rem] xl:text-[2rem]"
            style={{ fontFamily: "ImpactCustom, sans-serif" }}
          >
            Cancelar Agendamento
          </h2>
          <form
            className="flex flex-col items-center mx-auto bg-[#111] rounded-[20px] shadow-[0_3px_6px_rgba(0,0,0,1)] px-5 py-2.5 mt-[2%] md:py-1 sm:w-full px-2"
            onSubmit={handleCancel}
          >
            <input
              type="number"
              name="id"
              id="id"
              required
              placeholder="Informe o ID do agendamento"
              value={idAgendamento}
              onChange={(e) =>
                setIdAgendamento(
                  e.target.value === "" ? "" : Number(e.target.value)
                )
              }
              className="p-6 placeholder-gray-400 w-full border border-gray-300 rounded-md"
            />
            <button
              type="submit"
              disabled={!cancelFormValid}
              className={`mx-auto px-[40px] py-[20px] md:py-[10px] rounded-full font-bold border-none transition-colors duration-400 ease-in-out mt-[2%]
    ${
      cancelFormValid
        ? "bg-[#f5bd25] text-white hover:bg-white-400 cursor-pointer"
        : "bg-gray-400 text-gray-600 cursor-not-allowed"
    }
  `}
            >
              Cancelar Agendamento
            </button>
          </form>
          {mensagem && <p>{mensagem}</p>}
          {erro && <p>{erro}</p>}
        </div>
      </div>
    </>
  );
}

export default CancelarAgendamento;
