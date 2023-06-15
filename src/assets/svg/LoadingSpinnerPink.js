import React from "react";
import classes from "./LoadingSpinnerPink.module.css";

const LoadingSpinnerPink = ({ className }) => {
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

export default LoadingSpinnerPink;
