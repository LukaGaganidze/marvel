import React, { useEffect, useState } from "react";

import classes from "./ComicsHeading.module.css";

const ComicsHeading = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 1000);
  }, []);
  return (
    <>
      <h2 className={classes["comics-heading"]}>
        <span className={classes["comics-heading-outer"]}>Marvel</span>
        <span
          className={`${classes[animate ? "active-heading" : ""]} ${
            classes["comics-heading-inner"]
          }`}
        >
          all-time fun favorite classics
        </span>
        <span className={classes["comics-heading-outer"]}>Comics</span>
      </h2>

      <h2 className={classes["optional-heading"]}>marvel comics</h2>
    </>
  );
};

export default ComicsHeading;
