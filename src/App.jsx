import { useState } from "react";
import FormTask from "./components/FormTask";
import ListTask from "./components/ListTask";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className=" bg-[#141313] p-5 flex h-screen items-center justify-center ">
      <h1></h1>
      <FormTask />
      <Outlet />
    </div>
  );
}

export default App;
