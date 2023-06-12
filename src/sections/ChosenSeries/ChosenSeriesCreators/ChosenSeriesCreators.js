import React from "react";
import classes from "./ChosenSeriesCreators.module.css";

import GridHeadingMin from "../../../componenets/headings/ChosenSection/GridHeadingMin";
import DisplayCreatorsCardsGrid from "../../../helpers/FetchAndDisplayCards/Creators/DisplayGrid5";

const ChosenSeriesCreators = ({ creatorsData }) => {
  return (
    <div className={classes["series-creator-container"]}>
      <GridHeadingMin
        headingFor={"Creators"}
        total={creatorsData.available}
        available={creatorsData.returned}
        seriesName={null}
      />
      <DisplayCreatorsCardsGrid
        loadMoreCreators={true}
        data={creatorsData.items}
        navTo={"/creators/"}
      />
    </div>
  );
};

export default ChosenSeriesCreators;
