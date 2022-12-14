import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../shared/components/Card/Card";
import useGlobalContext from "../hooks/useGlobalContext";

function Home() {
  const { articles, setArticles } = useGlobalContext();
  // useEffect(() => {
  //   try {
  //     const getData = async () => {
  //       const res = await fetch("http://localhost:3000/articles");
  //       const data = await res.json();
  //       return setArticles(data);
  //     };
  //     getData();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, [setArticles]);
  return (
    <div className="articles__container">
      {articles.map((item, index) => {
        return (
          <Link to={`/article/${item.id}`} key={item.id}>
            <Card>
              {index === 0 ? "" : <hr className="inner-separator" />}
              <Card.CardThumbnail img={item.thumbnail} />
              <Card.CardText>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
              </Card.CardText>
            </Card>
          </Link>
        );
      })}
    </div>
  );
  //Add button Reader and Journalist + functions with authentication
}

export default Home;
