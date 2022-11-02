import React from "react";
import style from "./Layout.module.css";
// Components
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <main className={style.container}>{children}</main>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
