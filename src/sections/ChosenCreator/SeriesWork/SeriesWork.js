import React from "react";

import GridHeadingMid from "../../../componenets/headings/ChosenSection/GridHeadingMid";
import DisplayGridSeries from "../../../helpers/FetchAndDisplayCards/ComicsSeries/DisplayGrid4";

import classes from "./SeriesWork.module.css";

const SeriesWork = ({ series, firstName }) => {
  const { available, items, returned } = series;

  return (
    <div className={classes["creators-Series"]}>
      {/* heading */}
      <GridHeadingMid
        headingFor={"Series"}
        total={available}
        available={returned}
        name={firstName}
      />

      {/* cards */}
      <DisplayGridSeries data={items} navTo={"/series/"} />
    </div>
  );
};

export default SeriesWork;
