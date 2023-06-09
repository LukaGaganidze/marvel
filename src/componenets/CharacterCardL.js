import React from "react";
import { Link } from "react-router-dom";

import classes from "./CharacterCardL.module.css";

const CharacterCardL = (props) => {
  return (
    <div className={classes["character-card-L"]}>
      <div className={classes["char--img-bx"]}>
        <img
          src={props.image}
          alt="character image"
          className={classes["char-card--img"]}
        />
      </div>

      <div className={classes["card-char--text-box"]}>
        <h2 className={classes["card-char-name"]}>{props.name}</h2>
        <p className={classes["char-creator"]}>
          <span>creator</span>
          <br />
          {props.creator}
        </p>
        <p className={classes["char-appearence"]}>
          <span>first appearence</span>
          <br />
          {props.firstAppearence}
        </p>

        <Link to={props.path} className={classes["char-card--btn"]}>
          Check Character
        </Link>
      </div>
    </div>
  );
};

export default CharacterCardL;
