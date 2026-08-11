import { useNavigate, useParams } from "react-router-dom";
import { CalendarDays, TextAlignStart } from "lucide-react";
import { useTask } from "../hooks/TaskHook";
import { useEffect, useState } from "react";

function DetailsTask() {
  const [selectTask, setSelect] = useState({});

  const { task } = useTask();
  const { id } = useParams(); // Captura do Parâmetro (ID) Enviado pela URL
  const navigate = useNavigate();

  // Função Executada ao Componente ser Renderizado que Busca a Tarefa pelo ID na URL
  useEffect(() => {
    setSelect(task.find((task) => task.id === Number(id)));
  }, []);

  // Função de Retorno para Tela da Lista de Tarefas
  const handleClickReturn = () => {
    navigate("/");
  };

  return (
    <div className="w-full justify-end items-end flex h-full bg-transparent mx-10 m-2">
      <div className="w-[80%] bg-[#201F1F] border-[#444748] border-2 h-full rounded-lg gap-3 p-5 mr-5 grid grid-cols-4">
        <div className="bg-transparent rounded-xl h-30 py-5 col-span-full">
          <h1 className="text-[#E5E2E1] flex mb-4 my-2 flex-col text-5xl font-bold">
            {selectTask.titulo.length === 0 ? "Sem Título" : selectTask.titulo}
          </h1>
          <span className="flex flex-row items-center">
            <span
              className={`px-2 text-xs py-1.5 rounded mb-1 mr-3 text-center ${selectTask.status === "Concluida" ? "bg-green-200 text-emerald-800" : selectTask.status === "Em Andamento" ? "bg-orange-200 text-orange-500" : "bg-gray-200 text-gray-700"}`}
            >
              {selectTask.status}
            </span>
            <CalendarDays size={25} color="#E5E2E1" />
            <p className="text-[#C4C7C8] text-xs ml-2 font-semibold">
              {selectTask.date}
            </p>
          </span>
        </div>
        <div className="bg-transparent flex items-start justify-end flex-col col-span-full rounded-xl ">
          <div className="flex flex-row items-center mb-2">
            <TextAlignStart size={30} className="mr-2" color="#E5E2E1" />
            <h1 className="font-bold text-[#E5E2E1] text-lg">Descrição</h1>
          </div>

          <hr className=" border-t-2 border-[#444748] w-full " />
        </div>
        <div className="bg-[#2F3131]   border-2 border-[#444748] rounded-xl p-5 col-span-full row-span-10">
          <p className="text-[#E5E2E1] break-all text-base">
            {selectTask.desc}
          </p>
        </div>

        <div className="col-span-full flex items-end justify-end">
          <button
            onClick={handleClickReturn}
            className="
              bg-[#FFFFFF] w-28 my-3 text-sm h-8 font-bold rounded-xl
              hover:bg-[#C4C7C8] transform duration-200
            "
          >
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
}

export default DetailsTask;
