import React from "react";

import classes from "./ChosenSeriesHero.module.css";

const ChosenSeriesHero = ({ image, title, startYear, endYear }) => {
  const imageNotFound = image.path.includes("_not");

  return (
    <>
      {!imageNotFound ? (
        <div className={classes["hero-char"]}>
          <div className={classes["char-pg-container"]}>
            <div className={classes["char-hero-flex"]}>
              <div className={classes["srch-char-img-box"]}>
                <img
                  className={classes["srch-char-img"]}
                  src={`${image.path}.${image.extension}`}
                />
              </div>

              <div className={classes["srch-char-text-box"]}>
                <h2 className={classes["srch-comic-name"]}>{title}</h2>
                <p
                  className={classes["srch-comic-year"]}
                >{`(${startYear} - ${endYear})`}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={classes["optional-hero-container"]}>
          <h2 className={classes["optional-info"]}>{title}</h2>
          <h2
            className={classes["optional-info"]}
          >{`(${startYear} - ${endYear})`}</h2>
        </div>
      )}
    </>
  );
};

export default ChosenSeriesHero;
