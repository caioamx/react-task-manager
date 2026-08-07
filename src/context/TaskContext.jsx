import { createContext, useState } from "react";

// Criando Contexto
export const TaskContext = createContext();

//Criando Modulo do Contexto
export const TaskProvider = ({ children }) => {
  const [task, setTask] = useState([
    { id: 1, titulo: "aaa" },
    { id: 2, titulo: "aaa" },
    { id: 3, titulo: "aaa" },
  ]);

  const addTask = (task) => {
    setTask((prev) => [...prev, task]);
  };

  const deleteTask = (taskID) => {
    setTask(task.filter((task) => task.id !== taskID));
  };

  return (
    <TaskContext.Provider
      value={{
        task,
        addTask,
        deleteTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
