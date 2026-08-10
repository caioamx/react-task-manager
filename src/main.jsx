import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { TaskProvider } from "./context/TaskContext.jsx";
import ListTask from "./components/ListTask.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DetailsTask from "./components/DetailsTask.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <ListTask />,
      },
      {
        path: "/details/:id",
        element: <DetailsTask />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TaskProvider>
      <RouterProvider router={router} />
    </TaskProvider>
  </StrictMode>,
);
