import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./shared/components/AppRoutes/AppRoutes";
import GlobalContextProvider from "./contexts/GlobalContextProvider";

const App = () => {
  return (
    <GlobalContextProvider>
      <BrowserRouter>
        <React.Suspense fallback={<h1>Loading</h1>}>
          <AppRoutes />
        </React.Suspense>
      </BrowserRouter>
    </GlobalContextProvider>
  );
};

export default App;
