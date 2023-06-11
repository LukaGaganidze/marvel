import classes from "./ChosenCharacterSec.module.css";

import CharacterHero from "./CharHero/CharacterHero";
import CharComics from "./CharComics/CharComics";
import CharSeries from "./CharSereis/CharSeries";
import GridHeadingMin from "../../componenets/headings/ChosenSection/GridHeadingMin";

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ChosenCharacterSec = ({
  name,
  id,
  series,
  comics,
  image,
  description,
}) => {
  //  to start page on top on load
  const { pathname } = useLocation();

  const [displaySeries, setDisplaySeries] = useState(false);
  const [displayStories, setDisplayStories] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }, [pathname]);

  return (
    <div className={classes["chosen-char-pg"]}>
      {/* HERO */}
      <CharacterHero name={name} image={image} description={description} />

      {/* CARDS/INFO */}
      <div className={classes["char-info"]}>
        {/* COMICS */}
        <div
          className={`${classes["results-container"]} ${classes["results-container-comics"]}`}
        >
          {/* heading */}
          <GridHeadingMin
            headingFor={"Comics"}
            total={comics.comicsAvalable}
            available={comics.comics.length}
          />

          {/* results */}
          <CharComics comicsData={comics} />
        </div>

        {/* SERIES */}
        <div
          className={`${classes["results-container"]} ${classes["results-container-series"]}`}
        >
          {/* heading */}
          <GridHeadingMin
            headingFor={"Series"}
            total={series.seriesAvalable}
            available={series.series.length}
          />
          {/* results */}
          <CharSeries seriesData={series} />
        </div>
      </div>
    </div>
  );
};

export default ChosenCharacterSec;
