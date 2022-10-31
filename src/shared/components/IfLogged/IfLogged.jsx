const IfLogged = ({ children }) => {
  return window.localStorage.getItem("isLogged") ? <>{children}</> : null;
};

export default IfLogged;
