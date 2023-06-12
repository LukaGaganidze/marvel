import React from "react";
import classes from "./LodingSpinner.module.css";

const LoadingSpinner = ({ className }) => {
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

export default LoadingSpinner;
