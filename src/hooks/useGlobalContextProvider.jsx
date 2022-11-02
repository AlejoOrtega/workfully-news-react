import { useState } from "react";

function useGlobalContextProvider() {
  const [articles, setArticles] = useState([]);

  return {
    articles,
    setArticles,
  };
}

export default useGlobalContextProvider;
