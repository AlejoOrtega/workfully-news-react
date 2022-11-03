const url = "http://localhost:3000/articles";

//* Functions
/**
 * Function delete the article that is on the main column.
 * @param {*} item
 */
export function deleteArticle(id) {
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
export async function saveBtn(currentArticle, callback) {
  console.log(currentArticle);
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
