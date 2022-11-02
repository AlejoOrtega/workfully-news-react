import style from "./Footer.module.css";

const Footer = () => {
  return (
    <section className={style.footer}>
      <div className={style.container}>
        <p>
        © Copyright 2022. Workfully News - All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
