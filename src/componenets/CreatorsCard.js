import classes from "./CreatorsCard.module.css";
import LoadingSpinnerWhite from "../assets/svg/LoadingSpinnerWhite";

import { Link, useNavigation } from "react-router-dom";
import { useState } from "react";

const CreatorsCard = ({ navTo, image, firstName, lastName, creations, id }) => {
  // LOADING HANDLER
  const { state } = useNavigation();

  const [creatorClicked, setCreatorCicked] = useState(false);
  const creatorClickHandler = () => {
    setCreatorCicked(true);
  };

  return (
    <Link
      to={navTo}
      className={classes["creators-link"]}
      onClick={creatorClickHandler}
    >
      <div
        className={`${classes["creator-card"]} ${
          creatorClicked && state === "loading" ? classes["was-clicked"] : ""
        }`}
      >
        <div className={classes["img-box"]}>
          <img src={image} className={classes["creator-img"]} />
          <div className={classes["loading-spinner"]}>
            <LoadingSpinnerWhite />
          </div>
        </div>
        <div className={classes["creator-textbox"]}>
          <h3 className={classes["card-heading-int"]}>Creator of:</h3>
          <ul className={classes["ccard-ul"]}>
            {creations.map((el) => (
              <li key={el}>{el}</li>
            ))}
          </ul>

          <div className={classes["hover-background"]}>
            <h2 className={classes["hoverbg-text"]}>
              {firstName} <br /> {lastName}
            </h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CreatorsCard;
