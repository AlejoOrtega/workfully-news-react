import Card from "../shared/components/Card/Card";
import useGlobalContext from "../hooks/useGlobalContext";
import { useState, useEffect } from "react";

//* Variables

function JournalistView() {
  const { articles } = useGlobalContext();
  return (
    <div className="sidebar">
      {articles.map((article) => {
        return (
          <Card>
            <Card.CardSideBar>
              <p>TITLE: {article.title}</p>
              <p>AUTHOR: {article.author}</p>
            </Card.CardSideBar>
          </Card>
        );
      })}
    </div>
  );
}

export default JournalistView;
