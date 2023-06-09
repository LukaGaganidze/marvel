import React from "react";

import classes from "./GridHeadingMin.module.css";

const GridHeadingMin = ({ headingFor, total, available, seriesName }) => {
  return (
    <div className={classes["heading-box"]}>
      <h2 className={classes["main-heading"]}>
        <span>{headingFor}</span>
      </h2>
      {seriesName ? (
        <h3 className={classes["main-heading-optional"]}>{seriesName}</h3>
      ) : (
        ""
      )}

      <div className={classes["secondary-heading"]}>
        <span>Total {headingFor}:</span>
        <span>{total}</span>
      </div>

      <div className={classes["secondary-heading"]}>
        <span>Avalable: </span>
        <span>{available}</span>
      </div>
    </div>
  );
};

export default GridHeadingMin;
