import { useState } from "react";
import FormTask from "./components/FormTask";
import ListTask from "./components/ListTask";

function App() {
  return (
    <div className=" bg-[#141313] p-5 flex h-screen items-center justify-center ">
      <FormTask />
      <ListTask />
    </div>
  );
}

export default App;
