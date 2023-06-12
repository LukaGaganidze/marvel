import React from "react";

import classes from "./ChosenSeriesComics.module.css";

import GridMinHeading from "../../../componenets/headings/ChosenSection/GridHeadingMin";
import DisplaySeriesGrid from "../../../helpers/FetchAndDisplayCards/ComicsSeries/DisplayGrid4";

const ChosenSeriesComics = ({ comicsData }) => {
  return (
    <div className={classes["container"]}>
      <GridMinHeading
        headingFor={"Comics"}
        total={comicsData.available}
        available={comicsData.returned}
        seriesName={null}
      />
      <DisplaySeriesGrid
        loadMore={true}
        data={comicsData.items}
        navTo={"/comics/"}
      />
    </div>
  );
};

export default ChosenSeriesComics;
