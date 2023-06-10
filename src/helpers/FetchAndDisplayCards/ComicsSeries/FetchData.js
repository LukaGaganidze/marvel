import React, { useState, useEffect } from "react";
import { MD5 } from "crypto-js";

import FeaturedComicsMinimalistic from "../../../componenets/FeaturedComicsMinimalistic";

const FetchData = ({ marvelApi, navTo }) => {
  const [data, setData] = useState(null);

  const baseURL = marvelApi;
  const updatingBaseUrl = baseURL.toString();
  const updatingBaseUrl1 = updatingBaseUrl.slice(25, -1);
  console.log(updatingBaseUrl1);
  const updatedBaseUrl =
    "https://marvelpedia-v1.netlify.app" + updatingBaseUrl1;
  // console.log(baseURL);

  useEffect(() => {
    async function fetchData() {
      const getHash = (timeStamp, privatKey, publicKey) => {
        return MD5(timeStamp + privatKey + publicKey).toString();
      };

      const timeStamp = Date.now().toString();
      const publicKey = process.env.REACT_APP_MARVEL_PUBLIC_API_KEY;
      const privatKey = process.env.REACT_APP_MARVEL_PRIVET_API_KEY;
      const hash = getHash(timeStamp, privatKey, publicKey);

      const url = `${updatedBaseUrl}?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
      } catch (err) {
        return;
      }
    }
    fetchData();
  }, [marvelApi]);

  if (data === null) return;

  const fetchedData = data.data.results[0];

  const { id, thumbnail, title } = fetchedData;

  const comicImage = `${thumbnail.path}/portrait_fantastic.${thumbnail.extension}`;

  return (
    <FeaturedComicsMinimalistic
      id={`${navTo}${id}`}
      name={title}
      img={comicImage}
    />
  );
};

export default FetchData;
