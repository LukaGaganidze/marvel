import React from "react";

import classes from "./ComicsCharacters.module.css";

import GridHeadingMin from "../../../componenets/headings/ChosenSection/GridHeadingMin";
import DisplayCharacterCardsGrid from "../../../helpers/FetchAndDisplayCards/Characters/DisplayGrid6";

const ComicsCharacters = ({ characters }) => {
  if (!characters) return;
  if (characters.available === 0) return;

  const { items, available } = characters;
  console.log(characters);

  return (
    <div className={classes["characters-container"]}>
      {/* heading */}
      <GridHeadingMin
        headingFor={"Characters"}
        total={characters.available}
        available={characters.returned}
        seriesName={null}
      />
      {/* chars */}
      <DisplayCharacterCardsGrid data={items} navTo={"/characters/"} />
    </div>
  );
};

export default ComicsCharacters;
