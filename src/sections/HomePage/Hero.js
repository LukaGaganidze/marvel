import React from "react";
import { Link } from "react-router-dom";

import classes from "./Hero.module.css";

// const DUMMY_QUOTES_ARR = [
//   "Your friendly neighborhood Spider-Man!",
//   "I believe there’s a hero in all of us",
//   "With great power comes great responsibility",
//   "Choose your weapon wisely",
//   "I Owed You a Great Debt – a Life for a Life",
//   "Every Breath You Take Is Mercy from Me",
// ];

const Hero = () => {
  // const [quote, setQuote] = useState("your friendly neighborhood Spider-Man!");

  // useEffect(() => {
  //   const rendomizerLength = DUMMY_QUOTES_ARR.length;
  //   const randomizer = Math.floor(Math.random() * rendomizerLength);

  //   setQuote(DUMMY_QUOTES_ARR[randomizer]);
  // }, []);

  return (
    <section className={classes["hero-section"]}>
      <div className={classes["text-container"]}>
        <h1>
          Explore the{" "}
          <span
            className={`${classes["text-container-span"]} ${classes["text-container-span-1"]}`}
          >
            Marvel
          </span>{" "}
          cinematic and comic universe{" "}
          <span
            className={`${classes["text-container-span"]} ${classes["text-container-span-2"]}`}
          >
            characters
          </span>
          , series, creators, villains, teams and more!
        </h1>
      </div>

      <div className={classes["alternative-text"]}>
        <h1>
          <span className={classes["heading-text-optional"]}>
            Explore Marvel
          </span>
          <Link className={classes["heading-text-optional-highlited"]}>
            characters
          </Link>
          <Link className={classes["heading-text-optional-highlited"]}>
            series
          </Link>
          <Link className={classes["heading-text-optional-highlited"]}>
            creators
          </Link>
          <Link className={classes["heading-text-optional-highlited"]}>
            comics
          </Link>
          <span className={classes["heading-text-optional"]}>
            and much more!
          </span>
        </h1>
      </div>
    </section>
  );
};

export default Hero;
