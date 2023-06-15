import classes from "./CardSmall.module.css";
import { Link, useNavigation } from "react-router-dom";
import { useState } from "react";

import LoadingSpinner from "../assets/svg/LoadingSpinnerWhite";

const CardSmall = (props) => {
  // LOADING SPINNER
  const { state } = useNavigation();
  const [cardWasClicked, setCardWasClicked] = useState(false);
  const creatorCardClickHandler = () => {
    setCardWasClicked(true);
  };

  const cardLoadingState = state === "loading" && cardWasClicked;

  return (
    <Link
      onClick={creatorCardClickHandler}
      to={props.link}
      className={`${classes["creator-cards-link"]} ${
        classes[cardLoadingState ? "card-loading-state" : ""]
      }`}
    >
      <div className={classes["card-sml"]}>
        <div className={classes["card-smimg-box"]}>
          <div className={classes["loading-spinner"]}>
            {cardLoadingState && <LoadingSpinner />}
          </div>
          <img className={classes["card-smimg"]} src={props.image} />
        </div>
        <div className={classes["card-sml-text-box"]}>
          <p className={classes["card-owner-desc"]}>{props.desc}</p>
          <p className={classes["card-owner-name"]}>{props.fullName}</p>
        </div>
      </div>
    </Link>
  );
};

export default CardSmall;
