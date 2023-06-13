import { useState } from "react";
import { Link, useNavigation } from "react-router-dom";

import classes from "./SearchedCharactreCard.module.css";

import LoadingSpinner from "../assets/svg/LoadingSpinnerWhite";

const IMAGE_SIZE = "portrait_fantastic";

const SearchedCharactreCard = ({ id, image, name }) => {
  const { state } = useNavigation();
  const [wasClicked, setWasClicked] = useState(false);
  const charClickHandler = () => {
    setWasClicked(true);
  };

  const activeSpinner = state === "loading" && wasClicked;
  return (
    <Link
      onClick={charClickHandler}
      to={id}
      className={classes["ind-char-link"]}
    >
      <div className={classes["searched-char-card"]}>
        <div className={classes["searched-char-img-box"]}>
          <img
            className={classes["searched-char-img"]}
            src={`${image.path}/${IMAGE_SIZE}.${image.extension}`}
          />

          <div
            className={`${classes["loading-spinner"]} ${
              classes[activeSpinner ? "active-spinner" : ""]
            } `}
          >
            <LoadingSpinner />
          </div>
        </div>

        <div className={classes["searched-char-text-box"]}>
          <h3 className={classes["char-name"]}>{name}</h3>
        </div>
      </div>
    </Link>
  );
};

export default SearchedCharactreCard;
