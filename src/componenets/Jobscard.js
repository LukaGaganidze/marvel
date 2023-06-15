import React, { useState } from "react";
import { Link, useNavigation } from "react-router-dom";

import classes from "./Jobscard.module.css";

import LoadingSpinner from "../assets/svg/LoadingSpinnerWhite";

// COMICS JOB IMGS
import writer from "../assets/comics-page/jobs/writer.jpg";
import editor from "../assets/comics-page/jobs/editor.jpg";
import colorist from "../assets/comics-page/jobs/colorist.jpg";
import inker from "../assets/comics-page/jobs/inker.jpg";
import penciler from "../assets/comics-page/jobs/penciler.jpg";
import leterrer from "../assets/comics-page/jobs/leterrer.jpg";
import painter from "../assets/comics-page/jobs/painter.jpg";
import artist from "../assets/comics-page/jobs/artist.jpg";

const Jobscard = ({ name, id, role }) => {
  // LOADING STATE SPINNER
  const { state } = useNavigation();
  const [cardWasClickeed, setCardWasClicked] = useState(false);
  const cardClickHandler = () => {
    setCardWasClicked(true);
  };
  const cardLoadingState = state === "loading" && cardWasClickeed;
  const optionalRole = role.split(" ")[0];
  return (
    <Link
      onClick={cardClickHandler}
      to={id}
      className={`${classes["role-card"]} ${
        classes[cardLoadingState ? "active-card" : ""]
      }`}
    >
      {/* LOADING SPINNER */}
      <div className={classes["loading-spinner"]}>
        {cardLoadingState && <LoadingSpinner />}
      </div>
      {/* writer */}
      {optionalRole === "writer" && (
        <div className={classes["img-box"]}>
          <h3 className={classes["role"]}>{role}</h3>
          <img className={classes["role-img"]} src={writer} />
        </div>
      )}
      {/* artist */}
      {optionalRole === "artist" && (
        <div className={classes["img-box"]}>
          <h3 className={classes["role"]}>{role}</h3>
          <img className={classes["role-img"]} src={artist} />
        </div>
      )}

      {/* editor */}
      {optionalRole === "editor" && (
        <div className={classes["img-box"]}>
          <h3 className={classes["role"]}>{role}</h3>
          <img className={classes["role-img"]} src={editor} />
        </div>
      )}

      {/* colorist */}
      {optionalRole === "colorist" && (
        <div className={classes["img-box"]}>
          <h3 className={classes["role"]}>{role}</h3>
          <img className={classes["role-img"]} src={colorist} />
        </div>
      )}

      {/* inker */}
      {optionalRole === "inker" && (
        <div className={classes["img-box"]}>
          <h3 className={classes["role"]}>{role}</h3>
          <img className={classes["role-img"]} src={inker} />
        </div>
      )}

      {/* penciler */}
      {optionalRole === "penciler" && (
        <div className={classes["img-box"]}>
          <h3 className={classes["role"]}>{role}</h3>
          <img className={classes["role-img"]} src={penciler} />
        </div>
      )}
      {/* penciler */}
      {optionalRole === "penciller" && (
        <div className={classes["img-box"]}>
          <h3 className={classes["role"]}>{role}</h3>
          <img className={classes["role-img"]} src={penciler} />
        </div>
      )}

      {/* leterrer */}
      {optionalRole === "letterer" && (
        <div className={classes["img-box"]}>
          <h3 className={classes["role"]}>{role}</h3>
          <img className={classes["role-img"]} src={leterrer} />
        </div>
      )}
      {/* painter */}
      {optionalRole === "painter" && (
        <div className={classes["img-box"]}>
          <h3 className={classes["role"]}>{role}</h3>
          <img className={classes["role-img"]} src={painter} />
        </div>
      )}

      <div className={classes["text-box"]}>
        <p className={classes["name"]}>{name}</p>
      </div>
    </Link>
  );
};

export default Jobscard;
