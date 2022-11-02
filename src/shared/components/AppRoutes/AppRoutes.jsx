import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "../../../pages/Home";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import NotFoundPage from "../../../pages/Not_found";
import ReadersView from "../../../pages/Readers_view";

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
    {
      path: "*",
      element: <NotFoundPage />,
    },
    {
      path: "article/:id",
      element: <ReadersView />,
    },
  ]);
};

export default AppRoutes;
