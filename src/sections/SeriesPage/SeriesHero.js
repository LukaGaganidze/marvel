import React from "react";

import classes from "./SeriesHero.module.css";

import FeaturedSeries from "./FeaturedSeries";

const SeriesHero = () => {
  return (
    <div className={classes["hero-container"]}>
      <h2 className={classes["sec-heading"]}>
        <span>marvel comics series</span>
        <span>Unraveling the Marvelous World of Heroes and Villains</span>
      </h2>
      <h2 className={classes["optional-heading"]}>Comics Series</h2>
      <FeaturedSeries />
    </div>
  );
};

export default SeriesHero;
