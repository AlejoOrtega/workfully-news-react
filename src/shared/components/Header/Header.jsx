import React from "react";
import style from "./Header.module.css";
import logoLight from "../../../assets/icons/workfully_black_465x.avif";
import logoDark from "../../../assets/icons/workfully_white.png";
import iconLight from "../../../assets/icons/icon-light-theme.svg";
import iconDark from "../../../assets/icons/icon-dark-theme.svg";
import { ThemeContext } from "../../context/ThemeContext";
import Button from "../Button/Button";



const Header = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  const handleTheme = () => {
    setTheme(!theme);
    console.log(theme)
  };

  let themeMode = theme ? "light" : "dark";

const onReadersView = () => {
    window.location.href = "/"
  }
  const onJournalistView = () => {
    window.location.href = "/admin"
  }
  return (
    <section className={`${style.header}  ${style[`header--${themeMode}`]}`}>
      <div className={style.container}>
        <a href="/home"><img className={style.wlogo} src={theme ? logoLight : logoDark} alt='workfully' /></a>
        <div className="user-roles">
            <Button children={<h1>Reader</h1>} handleClick={onReadersView} />
            <Button children={<h1>Journalist</h1>} handleClick={onJournalistView} />
          <button onClick={handleTheme}>
            <img src={theme ? iconLight : iconDark} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
