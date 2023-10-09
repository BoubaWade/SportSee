import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";

import Dashboard from "./components/pages/dashboard/Dashboard.jsx";
import Login from "./components/pages/login/Login.jsx";
import Error from "./components/pages/error/Error.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/user/12",
    element: <Dashboard userId={12} />,
  },
  {
    path: "/user/18",
    element: <Dashboard userId={18} />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);
export default router;
