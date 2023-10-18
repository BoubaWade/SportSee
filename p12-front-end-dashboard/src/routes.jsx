import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Error from "./pages/Error";

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
