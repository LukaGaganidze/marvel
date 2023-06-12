import React from "react";

import classes from "./GridHeadingMin.module.css";

const GridHeadingMin = ({ headingFor, total, available, seriesName }) => {
  return (
    <div className={classes["heading-box"]}>
      <h2 className={classes["main-heading"]}>
        <span className={classes["for"]}>{headingFor}</span>
      </h2>
      {seriesName ? (
        <h3 className={classes["main-heading-optional"]}>{seriesName}</h3>
      ) : (
        ""
      )}

      <div className={classes["secondary-heading"]}>
        <span className={classes["total"]}>Total {headingFor}:</span>
        <span className={classes["total-num"]}>{total}</span>
      </div>

      <div className={classes["secondary-heading"]}>
        <span className={classes["available"]}>Avalable: </span>
        <span className={classes["available-num"]}>{available}</span>
      </div>
    </div>
  );
};

export default GridHeadingMin;
