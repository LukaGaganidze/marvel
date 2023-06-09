import React from "react";
import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={classes["characters-hero"]}>
      <div className={classes["hero-img-container"]}>
        <h1 className={classes["chars-main-heading"]}>
          Explore the Universe of{" "}
          <span className={classes["highlited"]}>marvel</span> Comic Book{" "}
          <span className={classes["highlited"]}>Characters</span>{" "}
        </h1>
        <h1 className={classes["optional-heading"]}>marvel Characters</h1>
      </div>
    </section>
  );
};

export default Hero;
