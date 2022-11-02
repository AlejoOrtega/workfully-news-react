import React from "react";
import { Link } from "react-router-dom";
import style from "./Header.module.css";
import logo from "../../../assets/icons/workfully_black_465x.avif";
import iconLight from "../../../assets/icons/icon-light-theme.svg";
import iconDark from "../../../assets/icons/icon-dark-theme.svg";
import { ThemeContext } from "../../context/ThemeContext";



const Header = () => {
    const { theme, setTheme } = React.useContext(ThemeContext);

    const handleTheme = () => {
        setTheme(!theme);
        console.log(theme)
      };

      let themeMode = theme ? "light" : "dark";

  return (
    <section className={`${style.header}  ${style[`header--${themeMode}`]}`}>
      <div className={style.container}>
        <a href ="/home"><img className={style.wlogo} src={logo} alt= 'workfully'/></a>
        <div className="user-roles">
        {/* <Link to="/" className="btn-primary">Reader</Link> */}
            <a className={style.role} href="/">Reader</a>
            <a className={style.role} href="/admin">Journalist</a>
            <button onClick={handleTheme}>
                <img src={theme ? iconLight : iconDark} />
            </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
