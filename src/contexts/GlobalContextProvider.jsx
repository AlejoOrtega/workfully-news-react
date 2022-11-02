import useGlobalContextProvider from "../hooks/useGlobalContextProvider";
import GlobalContext from "./GlobalContext";

function GlobalContextProvider({ children }) {
  const valuesProvider = useGlobalContextProvider();

  return (
    <GlobalContext.Provider value={valuesProvider}>
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalContextProvider;
