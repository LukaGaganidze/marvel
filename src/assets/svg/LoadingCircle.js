import React from "react";

import classes from "./loadingCircle.module.css";

const LoadingCircle = () => {
  return (
    <div className={classes["lds-ring"]}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default LoadingCircle;
