import { X } from "lucide-react";
import { CalendarDays } from "lucide-react";
import { useTask } from "../hooks/TaskHook";

function ListTask() {
  const { task, deleteTask } = useTask();

  // Função para Excluir Tarefa atráves do Context
  const onClickDelete = (taskID) => {
    deleteTask(taskID);
  };

  return (
    <div className="w-full h-full overflow-auto mx-10 flex flex-col items-end m-2">
      {/* Renderização Dinâmica das Tarefas */}
      {task.map((task) => {
        return (
          <div
            key={task.id}
            className="w-[80%] mr-5 mb-5 py-5 px-5 rounded-xl flex flex-col bg-[#201F1F] border-2 border-[#444748] h-auto"
          >
            <div className="h-8 flex flex-row w-full justify-between items-start ">
              <span className="h-10 items-center flex flex-row w-auto">
                <span
                  className={`px-2 text-xs py-1.5 rounded mb-1 mr-3 text-center ${task.status === "Concluida" ? "bg-green-200 text-emerald-800" : task.status === "Em Andamento" ? "bg-orange-200 text-orange-500" : "bg-gray-200 text-gray-700"}`}
                >
                  {task.status}
                </span>
                <CalendarDays size={25} color="#E5E2E1" />
                <p className="text-[#C4C7C8] text-xs ml-2 font-semibold">
                  {task.date}
                </p>
              </span>
              <button
                onClick={() => onClickDelete(task.id)}
                className="bg-transparent h-9 w-12 font-bold flex items-center justify-center rounded-xl
                         hover:bg-[#444748] transform duration-200"
              >
                <X size={30} color="#E5E2E1" />
              </button>
            </div>
            <h1 className="text-2xl font-bold text-[#E5E2E1] mt-2 mb-1">
              {task.titulo}
            </h1>
            <p className="text-[#C4C7C8] text-sm break-all">
              {/* Condicional para Limitar o Texto da Descrição Substituindo o Final por Fetecencias (...) */}
              {task.desc.length <= 130
                ? task.desc
                : task.desc.slice(1, 130) + "..."}
            </p>
            <div className="w-full h-10 mt-2 flex items-center justify-end">
              <button
                className="
              bg-[#FFFFFF] w-28 my-3 text-sm float-right h-8 font-bold rounded-xl
              hover:bg-[#C4C7C8] transform duration-200
            "
              >
                Ver Mais
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ListTask;
