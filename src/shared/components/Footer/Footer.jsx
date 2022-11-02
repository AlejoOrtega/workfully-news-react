import style from "./Footer.module.css";
import React from "react";
import { ThemeContext } from "../../context/ThemeContext";

const Footer = () => {
    const { theme, setTheme } = React.useContext(ThemeContext);

    let themeMode = theme ? "light" : "dark";


  return (
    <section className={`${style.footer}  ${style[`footer--${themeMode}`]}`}>
      <div className={style.container}>
        <p>
        © Copyright 2022. Workfully News - All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
