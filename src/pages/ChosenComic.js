import React, { useEffect } from "react";
import { useLoaderData, useLocation } from "react-router-dom";
import MD5 from "crypto-js/md5";

import ChosenComicHero from "../sections/ChosenComic/ChosenComicHero";
import ComicsSeries from "../sections/ChosenComic/ComicsSeries/ComicsSeries";
import ComicsCharacters from "../sections/ChosenComic/ComicsCharacters/ComicsCharacters";
import ComicsCreators from "../sections/ChosenComic/ComicsCreators/ComicsCreators";

const CosenComic = () => {
  // to load page from beggining
  const { pathname } = useLocation();
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }, [pathname]);

  // page data
  const fetchedData = useLoaderData();
  const { id, thumbnail, title, characters, creators, series } =
    fetchedData.data.results[0];

  return (
    <>
      <ChosenComicHero
        thumbnail={thumbnail}
        title={title}
        series={series}
        characters={characters}
        creators={creators}
      />
      <ComicsSeries series={series} />
      <ComicsCharacters characters={characters} />
      <ComicsCreators creators={creators} />
    </>
  );
};

export default CosenComic;

const apiURL = process.env.REACT_APP_MARVEL_BASE_URL;
export async function loader({ request, params }) {
  const comicID = params.comicID;
  const getHash = (timeStamp, privatKey, publicKey) => {
    return MD5(timeStamp + privatKey + publicKey).toString();
  };
  const baseURL = `${apiURL}/v1/public/comics`;
  const timeStamp = Date.now().toString();
  const publicKey = process.env.REACT_APP_MARVEL_PUBLIC_API_KEY;
  const privatKey = process.env.REACT_APP_MARVEL_PRIVET_API_KEY;
  const hash = getHash(timeStamp, privatKey, publicKey);

  const url = `${baseURL}/${comicID}?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`;

  try {
    const response = await fetch(url);
    return response;
  } catch (err) {
    return;
  }
}
