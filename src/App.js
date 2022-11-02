import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./shared/components/AppRoutes/AppRoutes";
import GlobalContextProvider from "./contexts/GlobalContextProvider";
import Layout from "./shared/components/Layout/Layout";

const App = () => {
  return (
    <GlobalContextProvider>
      <Layout>
        <BrowserRouter>
          <React.Suspense fallback={<h1>Loading</h1>}>
            <AppRoutes />
          </React.Suspense>
        </BrowserRouter>
      </Layout>
    </GlobalContextProvider>
  );
};

export default App;
