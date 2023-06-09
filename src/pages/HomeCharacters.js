import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import Hero from "../sections/CharactersPage/Hero";
import FeaturedCharacters from "../sections/CharactersPage/FeaturedCharacters";
import SearchChar from "../sections/CharactersPage/SearchChar";
import SearchedCharacters from "../sections/CharactersPage/SearcgedCharacters";

const CharactersHome = () => {
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
      <Hero />
      <FeaturedCharacters />
      <SearchChar data={getData} />
      <SearchedCharacters data={data} />
    </>
  );
};

export default CharactersHome;
