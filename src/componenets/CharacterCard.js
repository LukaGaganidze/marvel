import React, { useState } from "react";
import { Link, useNavigation } from "react-router-dom";

import classes from "./CharacterCard.module.css";

import LoadingSpinner from "../assets/svg/LoadingSpinnerWhite";

const CharacterCard = ({ navTo, name, appearance, image }) => {
  const [wasClicked, setWasClicked] = useState(false);
  const { state } = useNavigation();
  const cardClickHandler = () => {
    setWasClicked(true);
  };

  return (
    <Link
      onClick={cardClickHandler}
      className={`${classes["featured-chars-link"]} ${
        classes[wasClicked && state === "loading" ? "active-card" : ""]
      }`}
      to={navTo}
    >
      <div className={classes["char-card"]}>
        <div className={classes["img-box"]}>
          <img src={image} />
          <div className={classes["spinning-svg"]}>
            <LoadingSpinner />
          </div>
        </div>

        <div className={classes["text-box"]}>
          <h2>{name}</h2>
          <p className={classes["grey-sub-heading"]}>First appearance</p>
          <p className={classes["first-appearance"]}>{appearance}</p>
        </div>
      </div>
    </Link>
  );
};

export default CharacterCard;
