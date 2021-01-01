import style from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className="col">
        <ul>
          <li>
            <a href="mailto:info@eugbs.com">info@eugbs.com</a>
          </li>
          <li>
            <a href="tel:+(417) 929-1503">USA : +(417) 929-1503</a>
          </li>
          <li>
            <a href="tel:+92 3218990027 ">PKR: +92 3218990027 </a>
          </li>
          <li><a href="https://tawk.to/chat/5c507558ab5284048d0f6f45/default">Live Chat</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
