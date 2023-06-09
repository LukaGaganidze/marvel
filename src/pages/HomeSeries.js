import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import SeriesHero from "../sections/SeriesPage/SeriesHero";
import ZPatternSeries from "../sections/SeriesPage/ZPatternSeries/ZPatternSeries";
import SearchSeries from "../sections/SeriesPage/SearchSeries";
import SearchedSeries from "../sections/SeriesPage/SearcherdSeries";

const SeriesHome = () => {
  // to load page from top
  const { pathname } = useLocation();
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }, [pathname]);

  const [data, setData] = useState([]);

  const getData = (data) => {
    setData(data);
  };

  return (
    <>
      <SeriesHero />
      <ZPatternSeries />
      <SearchSeries fetchedData={getData} />
      {/* <SearchedSeries serisItems={data} /> */}
    </>
  );
};

export default SeriesHome;
