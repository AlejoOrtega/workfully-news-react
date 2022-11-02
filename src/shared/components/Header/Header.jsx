import React from "react";
import style from "./Header.module.css";
import logo from "../../../assets/icons/workfully_black_465x.avif"
import Button from "../Button/Button";


const Header = () => {
  const onReadersView = () => {
    window.location.href = "/"
  }
  const onJournalistView = () => {
    window.location.href = "/admin"
  }
  return (
    <section className={`${style.header}`}>
      <div className={style.container}>
        <a href ="/home"><img className={style.wlogo} src={logo} alt= 'workfully'/></a>
        <div className="user-roles">
        {/* <Link to="/" className="btn-primary">Reader</Link> */}
            <Button children={<h1>Reader</h1>} handleClick={onReadersView} />
            <Button children={<h1>Journalist</h1>} handleClick={onJournalistView} />
            {/* <a className={style.role} href="/">Reader</a>
            <a className={style.role} href="/admin">Journalist</a> */}
        </div>
      </div>
    </section>
  );
};

export default Header;
