import React, { useState } from "react";
import { Link, useNavigation } from "react-router-dom";

import classes from "./FeaturedSeriesCard.module.css";

import LoadingSpinner from "../assets/svg/LoadingDots";

const FeaturedSeriesCard = ({ image, name, date, navTo }) => {
  // LOADING SPINNER
  const { state } = useNavigation();
  const [cardWasClicked, setCardWasClicked] = useState(false);
  const cardClickHandler = () => {
    setCardWasClicked(true);
  };

  const cardLoadingState = state === "loading" && cardWasClicked;

  return (
    <Link
      onClick={cardClickHandler}
      to={navTo}
      className={`${classes["FeaturedSeriesCard"]} ${
        classes[cardLoadingState ? "card-loading-state" : ""]
      }`}
    >
      <div className={classes["img-box"]}>
        <img src={image} alt={`picture of ${name}`} />

        <div className={classes["loading-spinner"]}>
          {cardLoadingState && <LoadingSpinner />}
        </div>
      </div>

      <div className={classes["text-box"]}>
        <p>{name}</p>
        <p>{date}</p>
      </div>
    </Link>
  );
};

export default FeaturedSeriesCard;
