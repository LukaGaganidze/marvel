import React from "react";

import classes from "./CharacterCard.module.css";

const CharacterCard = (props) => {
  return (
    <div className={classes["char-card"]}>
      <div className={classes["img-box"]}>
        <img src={props.image} />
      </div>

      <div className={classes["text-box"]}>
        <h2>{props.name}</h2>
        <p className={classes["grey-sub-heading"]}>First appearance</p>
        <p className={classes["first-appearance"]}>{props.appearance}</p>
      </div>
    </div>
  );
};

export default CharacterCard;
