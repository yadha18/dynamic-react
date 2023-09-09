import bird from "./svg/bird.svg";
import cat from "./svg/cat.svg";
import cow from "./svg/cow.svg";
import dog from "./svg/dog.svg";
import alligator from "./svg/gator.svg";
import horse from "./svg/horse.svg";
import heart from "./svg/heart.svg";
import { useState } from "react";
import "./AnimalShow.css";

const imgSvg = {
  bird,
  cat,
  cow,
  dog,
  alligator,
  horse,
};

export default function AnimalShow({ type }) {
  const [click, setClick] = useState(0);

  const handleClick = () => {
    setClick(click + 1);
  };

  return (
    <div className="animal-show" onClick={handleClick}>
      <img className="animal" src={imgSvg[type]} alt="animal" />
      <img
        className="heart"
        src={heart}
        alt="heart"
        style={{ width: 10 + 10 * click + "px" }}
      />
    </div>
  );
}
