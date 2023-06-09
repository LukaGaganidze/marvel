import React, { useEffect } from "react";
import { useLoaderData, useLocation } from "react-router-dom";
import MD5 from "crypto-js/md5";

import ChosenSeriesHero from "../sections/ChosenSeries/ChosenSeriesHero/ChosenSeriesHero";
import ChosenSeriesComics from "../sections/ChosenSeries/ChosenSeriesComics/ChosenSeriesComics";
import ChosenSeriesCharacters from "../sections/ChosenSeries/ChosenSeriesCharacters/ChosenSeriesCharacters";
import ChosenSeriesCreators from "../sections/ChosenSeries/ChosenSeriesCreators/ChosenSeriesCreators";

const ChosenSeries = () => {
  // to load page from beggining
  const { pathname } = useLocation();
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }, [pathname]);

  // page data
  const loaderData = useLoaderData();
  const chosenSeriesData = loaderData.data.results[0];
  const { title, startYear, endYear, thumbnail, characters, comics, creators } =
    chosenSeriesData;

  return (
    <>
      <ChosenSeriesHero
        image={thumbnail}
        title={title}
        startYear={startYear}
        endYear={endYear}
      />
      <ChosenSeriesComics comicsData={comics} />
      <ChosenSeriesCharacters charactersData={characters} />
      <ChosenSeriesCreators creatorsData={creators} />
    </>
  );
};

export default ChosenSeries;

const apiURL = process.env.REACT_APP_MARVEL_BASE_URL;
export async function loader({ request, params }) {
  const creatorID = params.seriesID;

  const getHash = (timeStamp, privatKey, publicKey) => {
    return MD5(timeStamp + privatKey + publicKey).toString();
  };
  const baseURL = `${apiURL}/v1/public/series`;
  const timeStamp = Date.now().toString();
  const publicKey = process.env.REACT_APP_MARVEL_PUBLIC_API_KEY;
  const privatKey = process.env.REACT_APP_MARVEL_PRIVET_API_KEY;
  const hash = getHash(timeStamp, privatKey, publicKey);

  const url = `${baseURL}/${creatorID}?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`;

  try {
    const response = await fetch(url);
    return response;
  } catch (err) {
    return;
  }
}
