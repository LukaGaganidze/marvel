import React from "react";

import classes from "./ChosenCreatorHeading.module.css";

const ChosenCreatorHeading = ({ name }) => {
  return (
    <h2 className={classes["heading"]}>
      <span>creator: </span>
      <span>{name}</span>
    </h2>
  );
};

export default ChosenCreatorHeading;
