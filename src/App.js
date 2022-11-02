import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./shared/components/AppRoutes/AppRoutes";
import Layout from "./shared/components/Layout/Layout";
import LoginStatus from "./contexts/LoginStatusContext";
import useGlobalContext from "./hooks/useGlobalContext";

const App = () => {
  const { articles, setArticles } = useGlobalContext();
  useEffect(() => {
    try {
      const getData = async () => {
        const res = await fetch("http://localhost:3000/articles");
        const data = await res.json();
        return setArticles(data);
      };
      getData();
    } catch (error) {
      console.log(error);
    }
  }, [setArticles]);
  return (
    <LoginStatus>
      <Layout>
        <BrowserRouter>
          <React.Suspense fallback={<h1>Loading</h1>}>
            <AppRoutes />
          </React.Suspense>
        </BrowserRouter>
      </Layout>
    </LoginStatus>
  );
};

export default App;
