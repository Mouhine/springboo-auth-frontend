import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Routes from "./components/Routes.tsx";
import Modal from "./components/Modal.tsx";
import AdminRout from "./components/routes/AdminRout.tsx";
import UserRout from "./components/routes/UserRout.tsx";
import ManagerRout from "./components/routes/ManagerRout.tsx";
import { RecoilRoot } from "recoil";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/auth",
        element: <Modal />,
      },
      {
        path: "/routes",
        element: <Routes />,
      },
      {
        path: "/routes/admin",
        element: <AdminRout />,
      },
      {
        path: "/routes/manager",
        element: <ManagerRout />,
      },
      {
        path: "/routes/user",
        element: <UserRout />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  </React.StrictMode>
);
