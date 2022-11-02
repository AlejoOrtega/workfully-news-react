import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useGlobalContext from "../hooks/useGlobalContext";
import Button from "../shared/components/Button/Button";
import Card from "../shared/components/Card/Card";
function Readers_view() {
  let { id } = useParams();
  const [article, setArticle] = useState({
    title: "",
    description: "",
    thumbnail: "",
    author: "",
    content: "",
  });
  const isEditable =
    window.localStorage.getItem("isLogged") === "false" ? false : true;

  const { articles } = useGlobalContext();
  const navigate = useNavigate();
  const { title, description, author, thumbnail, content } = article;
  const handleChange = (e) => {
    const { className, textContent } = e.target;
    console.log(article);
    setArticle({
      ...article,
      [className]: textContent,
    });
  };

  useEffect(() => {
    const localArticle = articles.find((item) => {
      return item.id === id;
    });
    setArticle(localArticle);
  }, [articles, id]);

  return (
    <div className="article__container">
      {isEditable && (
        <div className="sidebar">
          {articles.map((article) => {
            return (
              <Card key={article.id}>
                <Card.CardSideBar>
                  <p>TITLE: {article.title}</p>
                  <p>AUTHOR: {article.author}</p>
                </Card.CardSideBar>
              </Card>
            );
          })}
          <Card key={article.id}>
            <Card.CardSideBar>
              <p>Create Article</p>
            </Card.CardSideBar>
          </Card>
        </div>
      )}
      <div className="main-column">
        <Button handleClick={() => navigate(-1)}>Back</Button>
        {isEditable && (
          <Button handleClick={() => console.log("edit")}>Edit</Button>
        )}
        <h1
          contentEditable={isEditable}
          suppressContentEditableWarning={true}
          name="title"
          className="title"
          onInput={handleChange}
        >
          {title}
        </h1>

        <h2
          contentEditable={isEditable}
          suppressContentEditableWarning={true}
          className="description"
          name="description"
          onInput={handleChange}
        >
          {description}
        </h2>
        <h3
          contentEditable={isEditable}
          suppressContentEditableWarning={true}
          className="author"
          name="author"
          onInput={handleChange}
        >
          {author}
        </h3>
        <img src={thumbnail} alt="" />
        <p
          contentEditable={isEditable}
          suppressContentEditableWarning={true}
          className="content"
          onInput={handleChange}
          name="content"
        >
          {content}
        </p>
      </div>
    </div>
  );
}

export default Readers_view;
