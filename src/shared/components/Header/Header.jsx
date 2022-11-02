import React from "react";
import { Link } from "react-router-dom";
import style from "./Header.module.css";
import logo from "../../../assets/icons/workfully_black_465x.avif"



const Header = () => {
  return (
    <section className={`${style.header}`}>
      <div className={style.container}>
        <a href ="/home"><img className={style.wlogo} src={logo} alt= 'workfully'/></a>
        <div className="user-roles">
        {/* <Link to="/" className="btn-primary">Reader</Link> */}
            <a className={style.role} href="/">Reader</a>
            <a className={style.role} href="/admin">Journalist</a>
        </div>
      </div>
    </section>
  );
};

export default Header;
