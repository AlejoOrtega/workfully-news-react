import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "../../../pages/Home";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const AppRoutes = () => {
  return useRoutes([
    {
      path: "home",
      element: <Home />,
    },
    {
      path: "/",
      element: <Home />,
    },

    {
      path: "admin",
      element: <PrivateRoute redirectTo="/home" />,
    },
    // {
    //   path: "*",
    //   element: <NotFoundPage />,
    // },
  ]);
};

export default AppRoutes;
