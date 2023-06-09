import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import CreatorsHero from "../sections/CreatorsPage/CreatorsHero";
import SearchCreator from "../sections/CreatorsPage/SearchCreator";
import CreatorsSearchResults from "../sections/CreatorsPage/CreatorsSearchResults";

const CreatorsHome = () => {
  // to load page from top
  const { pathname } = useLocation();
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }, [pathname]);

  const [creators, setCreators] = useState([]);
  const getCreatorsFetchResults = (creators) => {
    if (!creators || creators.length === 0) return;

    setCreators(creators);
  };
  return (
    <>
      <CreatorsHero />
      {/* <SearchCreator creatorsData={getCreatorsFetchResults} /> */}
      {/* <CreatorsSearchResults searchResults={creators} /> */}
    </>
  );
};

export default CreatorsHome;
