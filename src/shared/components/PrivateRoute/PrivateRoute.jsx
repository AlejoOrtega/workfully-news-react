import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element, redirectTo }) => {
  return window.localStorage.getItem("isLogged") ? (
    <div>{element}</div>
  ) : (
    <Navigate to={redirectTo} />
  );
};

export default PrivateRoute;
