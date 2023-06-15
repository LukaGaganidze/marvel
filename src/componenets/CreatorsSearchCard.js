import { Link, useNavigation } from "react-router-dom";

import classes from "./CreatorsSearchCard.module.css";

import LoadingSpinnerPink from "../assets/svg/LoadingSpinnerPink";
import { useState } from "react";

const CreatorsSearchCard = ({
  id,
  firstName,
  lastName,
  comics,
  series,
  stories,
}) => {
  const { state } = useNavigation();
  const [cardWasclicked, setCardWasClicked] = useState(false);
  const cardClickHandler = () => setCardWasClicked(true);
  const cardLoadingState = state === "loading" && cardWasclicked;

  return (
    <Link
      onClick={cardClickHandler}
      to={`/creators/${id}`}
      id={id}
      className={`${classes["creators-search-results-card"]} ${
        classes[cardLoadingState ? "card-loading-state" : ""]
      }`}
    >
      <div className={classes["loading-spinner"]}>
        {cardLoadingState && <LoadingSpinnerPink />}
      </div>
      <div className={classes["cr-text-box"]}>
        <div className={classes["name-box"]}>
          <h3 className={classes["cr-inner-headings"]}> Creator's Name</h3>
          <p>{firstName}</p>
          <p>{lastName}</p>
        </div>

        <div className={classes["work-avalable"]}>
          <h3 className={classes["cr-inner-headings"]}> Creator's Work</h3>
          <h5 className={classes["sub-heading"]}>Work avalable:</h5>
          <div className={classes["avalable-comics"]}>
            <span>comics:</span>
            <span> {comics.available}</span>
          </div>

          <div className={classes["avalable-series"]}>
            <span>series:</span>
            <span>{series.available}</span>
          </div>

          <div className={classes["avalable-stories"]}>
            <span>stories:</span>
            <span>{stories.available}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default CreatorsSearchCard;
