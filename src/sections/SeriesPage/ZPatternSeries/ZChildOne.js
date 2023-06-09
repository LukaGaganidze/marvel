import React from "react";
import { Link } from "react-router-dom";

import classes from "./ZChildOne.module.css";

const ZChildOne = ({ img, name, date, desc }) => {
  return (
    <Link to={"/series/36592"} className={classes["Z-pattern-item"]}>
      {/* img */}
      <div className={classes["img-box"]}>
        <img src={img} alt={`${name} image`} />
      </div>

      {/* text */}
      <div className={classes["text-box"]}>
        <h3>{name}</h3>
        <p>{date}</p>
        <p>{desc}</p>
      </div>
    </Link>
  );
};

export default ZChildOne;
