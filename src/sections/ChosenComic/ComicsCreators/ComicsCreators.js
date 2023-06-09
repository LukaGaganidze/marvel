import React from "react";

import classes from "./ComicsCreators.module.css";

import GridHeadingMin from "../../../componenets/headings/ChosenSection/GridHeadingMin";
import DisplayCreatorsGridCards from "../../../helpers/FetchAndDisplayCards/Creators/DisplayGrid5";

const CreatorsList = ({ creators }) => {
  console.log(creators);
  if (!creators || creators.available === 0) return;
  const { available, items } = creators;

  return (
    <div className={classes["characters-container"]}>
      {/* heading */}
      <GridHeadingMin
        headingFor={"Creators"}
        total={available}
        available={items.length}
      />

      {/* creator card */}
      <DisplayCreatorsGridCards data={creators.items} navTo={"/creators/"} />
    </div>
  );
};

export default CreatorsList;
