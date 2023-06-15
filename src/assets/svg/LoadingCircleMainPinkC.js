import React from "react";

import classes from "./LoadingCircleMainPinkC.module.css";

const LoadingCircleMainPinkC = () => {
  return (
    <div className={classes["lds-ring"]}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default LoadingCircleMainPinkC;
