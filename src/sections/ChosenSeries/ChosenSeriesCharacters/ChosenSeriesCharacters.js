import React from "react";

import classes from "./ChosenSeriesCharacters.module.css";

import GridHeadingMin from "../../../componenets/headings/ChosenSection/GridHeadingMin";
import DisplayCharactersCardsGrid from "../../../helpers/FetchAndDisplayCards/Characters/DisplayGrid6";

const ChosenSeriesCharacters = ({ charactersData }) => {
  return (
    <div className={classes["chos-series-char-container"]}>
      <GridHeadingMin
        headingFor={"Characters"}
        total={charactersData.available}
        available={charactersData.returned}
        seriesName={null}
      />
      <DisplayCharactersCardsGrid
        loadMoreChars={true}
        data={charactersData.items}
        navTo={"/characters/"}
      />
    </div>
  );
};

export default ChosenSeriesCharacters;

// headingFor, total, available, seriesName
