import { useState } from "react";
import { Link, useNavigation } from "react-router-dom";

import classes from "./FeaturedComicsMinimalistic.module.css";

import LoadingSpinner from "../assets/svg/LoadingSpinnerWhite";

const FeaturedComicsMinimalistic = ({ id, name, img }) => {
  // LOADING INDICATOR
  const [cardWasClicked, setCardWasClicked] = useState(false);
  const clickOnCardHandler = () => {
    setCardWasClicked(true);
  };
  const { state } = useNavigation();

  const loadingCard = state === "loading" && cardWasClicked;

  return (
    <Link
      onClick={clickOnCardHandler}
      to={id}
      className={`${classes["comic-link"]} ${
        classes[loadingCard ? "card-loading-state" : ""]
      }`}
    >
      <div className={classes["img-box"]}>
        <div className={classes["loading-spinner"]}>
          {loadingCard && <LoadingSpinner />}
        </div>

        <img
          className={classes["comic-img"]}
          src={img}
          alt={`image of comic: ${name}`}
        />
      </div>

      <div className={classes["text-box"]}>
        <p className={classes["comic-name"]}>{name}</p>
      </div>
    </Link>
  );
};

export default FeaturedComicsMinimalistic;
