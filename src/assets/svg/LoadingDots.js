import React from "react";

import classes from "./LoadingDots.module.css";

const LoadingDots = ({ className }) => {
  return (
    <div className={`${classes["lds-ellipsis"]} ${className}`}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default LoadingDots;
