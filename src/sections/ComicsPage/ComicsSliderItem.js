import React, { useState } from "react";

import { Link, useNavigation } from "react-router-dom";

import LoadingSpinnerWhite from "../../assets/svg/LoadingSpinnerWhite";
import classes from "./ComicsSliderItem.module.css";

const ComicsSlideritem = ({
  image,
  comicName,
  published,
  writer,
  penciler,
  id,
}) => {
  // SPINNER LOADING INDICATOR
  const { state } = useNavigation();
  const [sliderWasClicked, setSliderWasClicked] = useState(false);
  const comicsSliderClickHandler = (e) => {
    console.log(e.target);
    setSliderWasClicked(true);
  };

  const activeSliderLoader = sliderWasClicked && state === "loading";

  return (
    <Link
      onClick={comicsSliderClickHandler}
      to={`/comics/${id}`}
      className={`${classes["deatured-comics-a"]} ${
        classes[activeSliderLoader ? "active-slider" : ""]
      }`}
    >
      <div
        className={`${classes["loading-spinner-box"]} ${classes["loading-spinner-active"]}`}
      >
        {activeSliderLoader && <LoadingSpinnerWhite />}
      </div>
      <h2 className={`${classes["content"]} ${classes["comic-heading"]}`}>
        {comicName}
      </h2>
      <div className={`${classes["content"]} ${classes["releasedate"]}`}>
        <span className={classes["inner-cntent-desc"]}>Release date: </span>
        <span className={classes["inner-cntent"]}>{published}</span>
      </div>
      <div className={`${classes["content"]} ${classes["writer-name"]}`}>
        <span className={classes["inner-cntent-desc"]}>Writer: </span>
        <span className={classes["inner-cntent"]}>{writer}</span>
      </div>
      {penciler !== "" ? (
        <div className={`${classes["content"]} ${classes["penciler"]}`}>
          <span className={classes["inner-cntent-desc"]}>Penciler: </span>
          <span className={classes["inner-cntent"]}>{penciler}</span>
        </div>
      ) : (
        ""
      )}
      <img className={classes["background-img"]} src={image} />
    </Link>
  );
};

export default ComicsSlideritem;
