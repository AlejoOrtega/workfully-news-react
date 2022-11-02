import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./shared/components/AppRoutes/AppRoutes";
import Card from "./shared/components/Card/Card";
import Layout from "./shared/components/Layout/Layout";
import { ThemeContext } from "./shared/context/ThemeContext";
import style from "./App.module.css"

const App = () => {
  const [theme, setTheme] = React.useState(true);
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await fetch("http://localhost:3000/articles");
      const data = await res.json();
      return setArticles(data);
    };
    getData();
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
    <div className={style[theme ? "bg-light" : "bg-dark"]}>
      <Layout>
      {articles.map((item) => {
        return (
          <Card>
            <Card.CardThumbnail img={item.thumbnail} />
            <Card.CardText>
              <h1>{item.title}</h1>
              <p>{item.description}</p>
            </Card.CardText>
          </Card>
        );
      })}
      <BrowserRouter>
        <React.Suspense fallback={<h1>Loading</h1>}>
          <AppRoutes />
        </React.Suspense>
      </BrowserRouter>
      </Layout>
    </div>
    </ThemeContext.Provider>
  );
};

export default App;
