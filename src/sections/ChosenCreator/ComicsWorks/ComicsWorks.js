import React from "react";

import GridHeadingMid from "../../../componenets/headings/ChosenSection/GridHeadingMid";
import DisplayGridComics from "../../../helpers/FetchAndDisplayCards/ComicsSeries/DisplayGrid4";

import classes from "./ComicsWorks.module.css";

const ComicsWorks = ({ comics, firstName }) => {
  const { available, returned, items } = comics;

  return (
    <div className={classes["creators-comics"]}>
      {/* heading */}
      <GridHeadingMid
        headingFor={"Comics"}
        total={available}
        available={returned}
        name={firstName}
      />

      {/* cards */}
      <DisplayGridComics loadMore={true} data={items} navTo={"/comics/"} />
    </div>
  );
};

export default ComicsWorks;
