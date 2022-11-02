import Card from "../shared/components/Card/Card";

//* Variables
const url = "http://localhost:3000/articles";
let currentArticle = {};

//* Functions
/**
 * Function delete the article that is on the main column.
 * @param {*} item
 */
function deleteArticle(item) {
  const id = item.id;
  const deleteUrl = `${url}/${id}`;
  fetch(deleteUrl, {
    method: "DELETE",
  }).then((res) => {
    if (!res.ok) {
      console.log("Failed to delete");
    }
  });
}

/**
 * Function save the article with modifications.
 */
async function saveBtn() {
  const editUrl = `${url}/${currentArticle.id}`;
  await fetch(editUrl, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(currentArticle),
  }).then((res) => {
    if (!res.ok) {
      console.log("Failed to update");
    }
  });
}

function JournalistView() {
  return (
    <div className="sidebar">
      {articles.map((article) => {
        <Card>
          <Card.CardSideBar>
            <p>TITLE: {article.title}</p>
            <p>AUTHOR: {article.author}</p>
          </Card.CardSideBar>
        </Card>;
      })}
    </div>
  );
}
