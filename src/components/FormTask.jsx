import { ClipboardPen } from "lucide-react";
import { useState } from "react";
import { useTask } from "../hooks/TaskHook";

function FormTask() {
  const [form, setForm] = useState({
    titulo: "",
    desc: "",
    date: null,
    status: null,
  });
  const { addTask } = useTask();

  // Função que Captura os valores dos inputs e altera as Propriedades da State
  const handleChange = (e) => {
    const { name, value } = e.target; // Capturando Valores do Disparador do Evento

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  // Função Responsavel por Criar o ID da Tarefa e Usar o Context para adicionar a tarefa
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({
      id: Date.now(),
      ...form,
    });

    setForm({
      titulo: "",
      desc: "",
      date: null,
      status: null,
    });
  };

  return (
    <div className="w-[30%] flex justify-center items-center h-full">
      <div className="bg-[#2F3131] border-2 border-[#444748] flex flex-col justify-center rounded-lg p-8 h-[90%] w-105">
        <div className="flex items-center flex-row">
          <ClipboardPen
            className="bg-[#444748] box-content rounded-xl p-3"
            size={40}
            color="#E5E2E1"
          />
          <div className="flex flex-col justify-start ml-3 w-full">
            <h1 className="text-[#E5E2E1]  text-3xl font-bold">
              Criador De Tarefa
            </h1>
            <p className="ml-1 text-sm text-[#C4C7C8]">
              Preencha os Campos Para Criar sua Tarefa
            </p>
          </div>
        </div>
        <form
          className="h-full flex flex-col justify-between"
          onSubmit={handleSubmit}
        >
          <div className="w-full my-4 flex-col flex justify-between">
            <label className="text-[#C4C7C8] text-sm" htmlFor="titulo">
              Título da Tarefa
            </label>
            <input
              className="
        bg-[#000000] my-2 text-sm w-full transition duration-400 text-white border-3 border-[#454747] p-2 rounded-lg outline-none
        focus:ring-1 focus:ring-white focus:border-white focus:outline-none"
              type="text"
              name="titulo"
              id="titulo"
              onChange={handleChange}
              value={form.titulo}
              placeholder="Ex: Finalizar Projeto"
            />
          </div>

          <div className="flex w-full flex-row">
            <div className="flex mr-4 w-full flex-col">
              <label className="text-sm text-[#C4C7C8] " htmlFor="status">
                Status
              </label>
              <select
                className="
             bg-[#000000] my-2 text-sm w-full transition duration-400 text-white border-3 border-[#454747] p-2 rounded-lg outline-none
             focus:ring-1 focus:ring-white focus:border-white focus:outline-none "
                name="status"
                id="status"
                onChange={handleChange}
                value={form.status}
              >
                <option value=""> </option>
                <option value="Pendente">Pendente</option>
                <option value="Em Andamento">Em Andamento</option>
                <option value="Concluida">Concluida</option>
              </select>
            </div>
            <div className="flex w-full flex-col">
              <label className="text-[#C4C7C8] text-sm" htmlFor="date">
                Data de Término
              </label>
              <input
                type="date"
                onChange={handleChange}
                className=" bg-[#000000] text-sm my-2 w-full transition duration-400 text-white border-3 border-[#454747] p-2 rounded-lg outline-none
        focus:ring-1 focus:ring-white focus:border-white focus:outline-none "
                name="date"
                id="date"
              />
            </div>
          </div>

          <div className="w-full  my-4 flex-col flex justify-between">
            <label className="text-sm text-[#C4C7C8]" htmlFor="desc">
              Descrição da Tarefa
            </label>
            <textarea
              className="
        bg-[#000000] text-sm text-white border-3 border-[#454747] transition duration-400 h-37 my-2 p-2 font-light appearance-none rounded-lg outline-none resize-none
        focus:ring-1 focus:ring-white focus:border-white
        "
              placeholder="Descreva o objetivo dessa tarefa..."
              name="desc"
              id="desc"
              onChange={handleChange}
              value={form.desc}
            ></textarea>
          </div>

          <button
            type="submit"
            className="
      bg-[#FFFFFF] h-10 font-bold w-full rounded-xl
        hover:bg-[#C4C7C8] transform duration-200
      "
          >
            Criar Tarefa
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormTask;
