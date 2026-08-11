import { useState } from "react";
import FormTask from "./components/FormTask";
import ListTask from "./components/ListTask";
import { Outlet } from "react-router-dom";

function App() {
  const [formState, setFormState] = useState({ state: false, id: 0 });

  return (
    <div className=" bg-[#141313] p-5 flex h-screen items-center justify-center ">
      <h1></h1>
      <FormTask formState={formState} setFormState={setFormState} />
      <Outlet context={{ setFormState }} />
    </div>
  );
}

export default App;
