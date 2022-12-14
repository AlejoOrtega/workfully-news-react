import styles from "./Card.module.css";

function CardText({ children }) {
  return <div className={styles.article__previewText}>{children}</div>;
}

function CardThumbnail({ img }) {
  return (
    <img src={img} alt="thumbnail" className={styles.article__previewImg} />
  );
}

function CardSideBar({ children }) {
  return <div className={styles.card__sidebar}>{children}</div>;
}

function Card({ children, handleClick }) {
  return (
    <div className={styles.article__preview} onClick={handleClick}>
      {children}
    </div>
  );
}
Card.CardText = CardText;
Card.CardThumbnail = CardThumbnail;
Card.CardSideBar = CardSideBar;

export default Card;

// ` <a href="${window.location.href}html/article${
//     Number(item.id) + 1
//   }.html">
//   ${index === 0 ? "" : '<hr class="inner-separator" />'}
//   <div class="article__preview">
//     <img src=${item.thumbnail} alt="" />
//     <div class="article__preview--text">
//       <h1>${item.title}</h1>
//       <p>
//       ${item.description}
//       </p>
//     </div>
//   </div></a
// >`
