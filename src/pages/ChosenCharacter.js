import React, { useEffect } from "react";
import { useLoaderData, useLocation } from "react-router-dom";
import MD5 from "crypto-js/md5";

import ChosenCharacterSec from "../sections/ChosenCharacter/ChosenCharacterSec";
const apiURL = process.env.REACT_APP_MARVEL_BASE_URL;

const ChosenCharacter = () => {
  // to load page from top
  const { pathname } = useLocation();
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }, [pathname]);

  const loader = useLoaderData();

  console.log(loader);

  const data = loader.data.results[0];

  const name = data.name;
  const description = data.description;
  const id = data.id;

  const seriesAvalable = data.series.available;
  const series = data.series.items;

  const comicsAvalable = data.comics.available;
  const comics = data.comics.items;

  const image = `${data.thumbnail.path}.${data.thumbnail.extension}`;

  return (
    <>
      <ChosenCharacterSec
        name={name}
        key={id}
        id={id}
        series={{
          seriesAvalable,
          series,
        }}
        comics={{
          comicsAvalable,
          comics,
        }}
        image={image}
        description={description}
      />
    </>
  );
};

export default ChosenCharacter;

export async function loader({ request, params }) {
  const characterId = params.charID;
  const getHash = (timeStamp, privatKey, publicKey) => {
    return MD5(timeStamp + privatKey + publicKey).toString();
  };
  const baseURL = `${apiURL}/v1/public/characters`;
  const timeStamp = Date.now().toString();
  const publicKey = process.env.REACT_APP_MARVEL_PUBLIC_API_KEY;
  const privatKey = process.env.REACT_APP_MARVEL_PRIVET_API_KEY;
  const hash = getHash(timeStamp, privatKey, publicKey);

  const url = `${baseURL}/${characterId}?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`;

  try {
    const response = await fetch(url);
    return response;
  } catch (err) {
    return;
  }
}
