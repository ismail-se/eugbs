import { useState, useEffect } from "react";
import style from "./Hero.module.css";
const words = ["Developer.", "Designer.", "Digital Marketer.", ""];
const developer = "/web.svg";
const designer = "/design.svg";
const digital = "/digital.svg";

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);
  const [img, setImg] = useState("/web.svg")

  // typeWriter
  useEffect(() => {
    if (index === words.length - 1) setIndex(0);

    if (index === 0){
        setImg(developer)
    }
    else if (index === 1){
        setImg(designer)
    }
    else if (index === 2){
        setImg(digital)
    }

    if (
      subIndex === words[index].length + 1 &&
      index !== words.length - 1 &&
      !reverse
    ) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => prev + 1);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 : 150, parseInt(Math.random() * 350)));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  // blinker
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  return (
    <div className={style.hero}>
      <div className={style.left}>
        <h3>
          Welcome to <span>EUGBS</span>
        </h3>
        <h1>
          We Are {`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`}
        </h1>
      </div>
      <div className={style.right}>
        <div className={style.circle}>
          <img className={style.img} src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
