import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { LoginContext } from "../contexts/LoginStatusContext";
import useGlobalContext from "../hooks/useGlobalContext";
import Button from "../shared/components/Button/Button";
import Card from "../shared/components/Card/Card";
import { Link } from "react-router-dom";
import { saveBtn } from "../services/articles";
function Readers_view() {
  let { id } = useParams();
  const INITIAL_STATE = {
    title: "",
    description: "",
    thumbnail: "",
    author: "",
    content: "",
  };

  const NEW_ARTICLE_STYLE = {
    backgroundColor: "lightGrey",
    textAlign: "left",
    marginTop: "8px",
    paddingLeft: "8px",
    borderRadius: "8px",
  };
  const [article, setArticle] = useState(INITIAL_STATE);
  const [isNew, setIsNew] = useState(false);

  const { title, description, author, thumbnail, content } = article;
  const { articles, setArticles } = useGlobalContext();
  const navigate = useNavigate();

  const { isLogged, setIsLogged } = useContext(LoginContext);

  const handleChange = (e) => {
    const { className, textContent } = e.target;
    setArticle({
      ...article,
      [className]: textContent,
    });
  };
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const url = `http://localhost:3000/articles/${id}`;
    fetch(url, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setArticle(data));
  }, [counter]);

  useEffect(() => {
    const url = `http://localhost:3000/articles`;
    fetch(url, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setArticles(data));
  }, [counter]);

  const handleOnCreateArticle = () => {
    setArticle({ ...INITIAL_STATE });
    setIsNew(() => true);
  };

  const handleOnChangeArticle = () => {
    setIsNew(() => false);
  };
  const handleSave = () => {
    saveBtn(article);
    setCounter(counter + 1);
  };

  return (
    <div className="article__container">
      {isLogged && (
        <div className="sidebar">
          {articles &&
            articles.map((article) => {
              return (
                <Link to={`/article/${article?.id}`} key={article.id}>
                  <Card key={article?.id} handleClick={handleOnChangeArticle}>
                    <Card.CardSideBar>
                      <p>TITLE: {article.title}</p>
                      <p>AUTHOR: {article.author}</p>
                    </Card.CardSideBar>
                  </Card>
                </Link>
              );
            })}
          <Link to={"/article"} key={article?.id}>
            <Card key={article?.id} handleClick={handleOnCreateArticle}>
              <Card.CardSideBar>
                <p>Create Article</p>
              </Card.CardSideBar>
            </Card>
          </Link>
        </div>
      )}
      <div className="main-column">
        <Button handleClick={() => navigate(-1)}>Back</Button>
        {isLogged && <Button handleClick={handleSave}>Edit</Button>}
        <Button
          handleClick={() => {
            setIsLogged(!isLogged);
          }}
        >
          Ex
        </Button>
        <h1
          contentEditable={isLogged}
          suppressContentEditableWarning={true}
          className="title"
          onInput={handleChange}
          style={isNew ? NEW_ARTICLE_STYLE : null}
        >
          {isNew ? "Title..." : title}
        </h1>

        <h2
          contentEditable={isLogged}
          suppressContentEditableWarning={true}
          className="description"
          onInput={handleChange}
          style={isNew ? NEW_ARTICLE_STYLE : null}
        >
          {isNew ? "Description..." : description}
        </h2>
        <h3
          contentEditable={isLogged}
          suppressContentEditableWarning={true}
          className="author"
          name="author"
          onInput={handleChange}
          style={isNew ? NEW_ARTICLE_STYLE : null}
        >
          {isNew ? "Author..." : author}
        </h3>
        <img src={thumbnail} alt="" />
        {isNew ? (
          <p
            contentEditable={isLogged}
            suppressContentEditableWarning={true}
            className="thumbnail"
            onInput={handleChange}
            name="thumbnail"
            style={isNew ? NEW_ARTICLE_STYLE : null}
          >
            Image URL...
          </p>
        ) : null}
        <p
          contentEditable={isLogged}
          suppressContentEditableWarning={true}
          className="content"
          onInput={handleChange}
          name="content"
          style={isNew ? NEW_ARTICLE_STYLE : null}
        >
          {isNew ? "Content..." : content}
        </p>
      </div>
    </div>
  );
}

export default Readers_view;
