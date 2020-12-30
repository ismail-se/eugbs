import Nav from "../Nav/Nav";
import style from "./Header.module.css";

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.logo}>
        <img src="/eugbs-logo.png" alt="" />
      </div>
      <div className={style.nav}>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
