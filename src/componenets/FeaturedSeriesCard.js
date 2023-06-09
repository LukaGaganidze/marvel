import React from "react";
import { Link } from "react-router-dom";

import classes from "./FeaturedSeriesCard.module.css";

const FeaturedSeriesCard = ({ image, name, date, navTo }) => {
  return (
    <Link to={navTo} className={classes["FeaturedSeriesCard"]}>
      <div className={classes["img-box"]}>
        <img src={image} alt={`picture of ${name}`} />
      </div>

      <div className={classes["text-box"]}>
        <p>{name}</p>
        <p>{date}</p>
      </div>
    </Link>
  );
};

export default FeaturedSeriesCard;
