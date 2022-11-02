import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useGlobalContext from "../hooks/useGlobalContext";
import Button from "../shared/components/Button/Button";
import Card from "../shared/components/Card/Card";
import { Link } from "react-router-dom";
function Readers_view() {
  let { id } = useParams();
  const INITIAL_STATE = {
    title: "",
    description: "",
    thumbnail: "",
    author: "",
    content: "",
  }

  const NEW_ARTICLE_STYLE = {
    backgroundColor:'lightGrey', 
    textAlign:'left',
    marginTop:'8px',
    paddingLeft: '8px',
    borderRadius: '8px',
  }
  const [article, setArticle] = useState(INITIAL_STATE);
  const [isNew, setIsNew] = useState(false);
  const isEditable =
    window.localStorage.getItem("isLogged") === "false" ? false : true;

  const { articles } = useGlobalContext();
  const navigate = useNavigate();
  const { title, description, author, thumbnail, content } = article;
  const handleChange = (e) => {
    const { className, textContent } = e.target;
    setArticle({
      ...article,
      [className]: textContent,
    });
  };

  useEffect(() => {
    if(id === undefined){
      setIsNew(()=> true)
    }else{
      const localArticle = articles.find((item) => {
        return item.id === id;
      });
      setArticle(localArticle);
    }
  }, [articles, id]);

  const handleOnCreateArticle = () => {
    setArticle({...INITIAL_STATE})
    setIsNew(()=>true)
  }

  const handleOnChangeArticle = () => {
    setIsNew(()=>false)
  }

  return (
    <div className="article__container">
      {isEditable && (
        <div className="sidebar">
          {articles.map((article) => {
            return (
              <Link to={`/article/${article.id}`} key={article.id}>
                <Card key={article.id} handleClick={handleOnChangeArticle}>
                  <Card.CardSideBar>
                    <p>TITLE: {article.title}</p>
                    <p>AUTHOR: {article.author}</p>
                  </Card.CardSideBar>
                </Card>
              </Link>
            );
          })}
          <Link to={'/article'} key={article.id}>
            <Card key={article.id} handleClick={handleOnCreateArticle}>
              <Card.CardSideBar>
                <p>Create Article</p>
              </Card.CardSideBar>
            </Card>
          </Link>
        </div>
      )}
      <div className="main-column">
        <Button handleClick={() => navigate(-1)}>Back</Button>
        {isEditable && (
          <Button handleClick={() => console.log("edit")}>{isNew?'Save':'Edit'}</Button>
        )}
        <h1
          contentEditable={isEditable}
          suppressContentEditableWarning={true}
          name="title"
          className="title"
          onInput={handleChange}
          style={isNew? NEW_ARTICLE_STYLE : null}
        >
          {isNew? 'Title...' : title}
        </h1>

        <h2
          contentEditable={isEditable}
          suppressContentEditableWarning={true}
          className="description"
          name="description"
          onInput={handleChange}
          style={isNew? NEW_ARTICLE_STYLE : null}
        >
          {isNew?'Description...': description}
        </h2>
        <h3
          contentEditable={isEditable}
          suppressContentEditableWarning={true}
          className="author"
          name="author"
          onInput={handleChange}
          style={isNew? NEW_ARTICLE_STYLE : null}
        >
          {isNew? 'Author...' : author}
        </h3>
        <img src={thumbnail} alt="" />
        {isNew?
            <p
              contentEditable={isEditable}
              suppressContentEditableWarning={true}
              className='thumbnail'
              onInput={handleChange}
              name="thumbnail"
              style={isNew? NEW_ARTICLE_STYLE : null}
            >
              Image URL...
            </p>
        : null}
        <p
          contentEditable={isEditable}
          suppressContentEditableWarning={true}
          className="content"
          onInput={handleChange}
          name="content"
          style={isNew? NEW_ARTICLE_STYLE : null}
        >
          {isNew?'Content...':content}
        </p>
      </div>
    </div>
  );
}

export default Readers_view;
