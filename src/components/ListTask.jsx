import { X } from "lucide-react";
import { CalendarDays } from "lucide-react";

function ListTask() {
  return (
    <div className="w-full h-full overflow-auto mx-10 flex flex-col  items-end m-2">
      <div className="w-[80%] mr-5 mb-5 py-5 px-5 rounded-xl flex flex-col bg-[#201F1F] border-2 border-[#444748] h-auto">
        <div className="h-12 flex flex-row w-full justify-between items-start ">
          <span className="h-10 items-center flex flex-row w-auto">
            <span className="px-2 py-1.5 bg-green-200 rounded mb-1 mr-3 text-center text-emerald-800">
              Concluido
            </span>
            <CalendarDays size={30} color="#E5E2E1" />
            <p className="text-[#C4C7C8] ml-2 font-semibold">02/10</p>
          </span>

          <X size={30} color="#E5E2E1" />
        </div>
        <h1 className="text-4xl font-bold text-[#E5E2E1] mb-3">
          Aprender React
        </h1>
        <p className="text-[#C4C7C8]">
          Para aprender React do zero, você deve dominar os fundamentos de
          JavaScript moderno, a criação de componentes, o uso de hooks...
        </p>
        <div className="w-full h-10 flex items-center justify-end">
          <button
            className="
            bg-[#FFFFFF] w-30 my-3 float-right h-10 font-bold rounded-xl
              hover:bg-[#C4C7C8]
            "
          >
            Ver Mais
          </button>
        </div>
      </div>
    </div>
  );
}

export default ListTask;
