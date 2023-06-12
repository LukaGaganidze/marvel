import React, { useState } from "react";
import { Link, useNavigation } from "react-router-dom";

import classes from "./CharacterCardL.module.css";

import LoadingSpinner from "../assets/svg/LoadingSpinner";

const CharacterCardL = (props) => {
  const { state } = useNavigation();
  const [click, setClick] = useState(false);
  const clickHandler = () => {
    setClick(true);
  };

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
        <div className={classes["char-creator"]}>
          <p>creator</p>
          <p> {props.creator}</p>
        </div>
        <div className={classes["char-appearence"]}>
          <p>first appearence</p>
          <p>{props.firstAppearence}</p>
        </div>
        {click && state === "loading" ? (
          <div className={classes["btn-loading-state"]}>
            <LoadingSpinner className={classes["loading-spinner"]} />
          </div>
        ) : (
          <>
            <Link
              onClick={clickHandler}
              to={props.path}
              className={classes["char-card--btn"]}
            >
              Check Character
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default CharacterCardL;
