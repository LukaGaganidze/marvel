import React from "react";
import classes from "./LoadingSpinnerWhite.module.css";

const LoadingSpinnerWhite = ({ className }) => {
  return (
    <div className={`${classes["lds-spinner"]} ${className}`}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default LoadingSpinnerWhite;
