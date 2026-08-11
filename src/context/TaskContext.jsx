import { createContext, useState } from "react";

// Criando Contexto
export const TaskContext = createContext();

//Criando Modulo do Contexto
export const TaskProvider = ({ children }) => {
  const [task, setTask] = useState([]);

  // Adicionar Tarefa a Lista
  const addTask = (task) => {
    setTask((prev) => [...prev, task]);
  };

  // Remover Tarefa da Lista
  const deleteTask = (taskID) => {
    setTask(task.filter((task) => task.id !== taskID));
  };

  const editTask = (taskUpdate) => {
    setTask(
      task.map((task) =>
        task.id === taskUpdate.id ? { ...task, ...taskUpdate } : task,
      ),
    );
  };

  return (
    <TaskContext.Provider
      value={{
        task,
        addTask,
        deleteTask,
        editTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
