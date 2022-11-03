import { createContext, useEffect, useState } from "react";

export const LoginContext = createContext({});

function LoginStatus({ children }) {
  const [isLogged, setIsLogged] = useState();

  useEffect(() => {
    window.localStorage.getItem("isLogged") === "false"
      ? setIsLogged(false)
      : setIsLogged(true);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("isLogged", isLogged);
  }, [isLogged]);

  return (
    <LoginContext.Provider value={{ isLogged, setIsLogged }}>
      {children}
    </LoginContext.Provider>
  );
}

export default LoginStatus;
