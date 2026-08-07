import { ClipboardPen } from "lucide-react";

function FormTask() {
  return (
    <div className="bg-[#2F3131] border-2 border-[#444748] flex flex-col justify-start rounded-lg p-8  h-auto w-200">
      <div className="flex items-center flex-row">
        <ClipboardPen
          className="bg-[#444748] box-content rounded-xl p-3"
          size={40}
          color="#E5E2E1"
        />
        <div className="flex flex-col justify-start ml-3 w-full">
          <h1 className="text-[#E5E2E1]  text-4xl font-bold">
            Criador De Tarefa
          </h1>
          <p className="ml-1 text-[#C4C7C8]">
            Preencha os Campos Para Criar sua Tarefa
          </p>
        </div>
      </div>

      <div className="w-full my-4 flex-col flex justify-between">
        <label className="text-[#C4C7C8]" htmlFor="titulo">
          Título da Tarefa
        </label>
        <input
          className="
        bg-[#000000] my-2 w-full transition duration-400 text-white border-3 border-[#454747] p-2 rounded-lg outline-none
        focus:ring-1 focus:ring-white focus:border-white focus:outline-none"
          type="text"
          name="titulo"
          placeholder="Ex: Finalizar Projeto"
        />
      </div>

      <div className="flex w-full flex-row">
        <div className="flex mr-4 w-full flex-col">
          <label className=" text-[#C4C7C8] " htmlFor="categoria">
            Categoria
          </label>
          <select
            className=" bg-[#000000] my-2 w-full transition duration-400 text-white border-3 border-[#454747] p-2 rounded-lg outline-none
        focus:ring-1 focus:ring-white focus:border-white focus:outline-none "
            name="categoria"
          >
            <option value="">Não Feita</option>
            <option value="">Em Andamento</option>
            <option value="">Concluida</option>
          </select>
        </div>
        <div className="flex w-full flex-col">
          <label className="text-[#C4C7C8]" htmlFor="date">
            Data de Termino
          </label>
          <input
            type="date"
            className=" bg-[#000000] my-2 w-full transition duration-400 text-white border-3 border-[#454747] p-2 rounded-lg outline-none
        focus:ring-1 focus:ring-white focus:border-white focus:outline-none "
            name="date"
          />
        </div>
      </div>

      <div className="w-full  my-4 flex-col flex justify-between">
        <label className=" text-[#C4C7C8]" htmlFor="desc">
          Descrição da Tarefa
        </label>
        <textarea
          className="
        bg-[#000000] text-white border-3 border-[#454747] transition duration-400 h-37 my-2 p-2 font-light appearance-none rounded-lg outline-none resize-none
        focus:ring-1 focus:ring-white focus:border-white
        "
          placeholder="Descreva o objetivo dessa tarefa..."
          name="desc"
        ></textarea>
      </div>

      <button
        className="
      bg-[#FFFFFF] h-10 font-bold rounded-xl
        hover:bg-[#C4C7C8]
      "
      >
        Criar Tarefa
      </button>
    </div>
  );
}

export default FormTask;
