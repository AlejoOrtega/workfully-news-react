import style from "Button.module.css";

/**
 * Create a button.
 * @param {name, handleClick} param0 
 * @returns button.
 */
function Button({name, handleClick}) {
    return(
        <button className={style.btn} onClick={handleClick}>{name}</button>
    )
}

export default Button;

//* We have 5 buttons inside the project: 1.Reader, 2.Journalist, 3.Save Article, 4.Delete Article, 5.New article. Buttons 1 and 2 are at the Home page, and the rest of them are at the Journalist View page. */