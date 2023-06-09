import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import ComicsHeading from "../sections/ComicsPage/ComicsHeading";
import ComicsSlider from "../sections/ComicsPage/ComicsSlider";
import FeaturedComics from "../sections/ComicsPage/FeaturedComics";
import SearchForComic from "../sections/ComicsPage/SearchForComic";
import ComicsList from "../sections/ComicsPage/ComicsList";

const ComicsHome = () => {
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
      <ComicsHeading />
      <ComicsSlider />
      <FeaturedComics />
      <SearchForComic dataSetter={getData} />
      <ComicsList fetchData={data} />
    </>
  );
};

export default ComicsHome;
