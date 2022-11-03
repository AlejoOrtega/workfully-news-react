import { useState } from "react";

function useGlobalContextProvider() {
  const [articles, setArticles] = useState([]);
  const [currentArticle, setCurrentArticle] = useState({});

  return {
    articles,
    setArticles,
    currentArticle,
    setCurrentArticle,
  };
}

export default useGlobalContextProvider;
