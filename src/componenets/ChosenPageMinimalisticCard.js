import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MD5 from "crypto-js/md5";

import classes from "./ChosenPageMinimalisticCard.module.css";

const ChosenPageMinimalisticCard = ({ name, baseUrl }) => {
  const [comicData, setComicData] = useState(null);

  useEffect(() => {
    async function fetchComic() {
      const getHash = (timeStamp, privatKey, publicKey) => {
        return MD5(timeStamp + privatKey + publicKey).toString();
      };

      const baseURL = baseUrl;
      const timeStamp = Date.now().toString();
      const publicKey = process.env.REACT_APP_MARVEL_PUBLIC_API_KEY;
      const privatKey = process.env.REACT_APP_MARVEL_PRIVET_API_KEY;
      const hash = getHash(timeStamp, privatKey, publicKey);

      const url = `${baseURL}?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        setComicData(data);
      } catch (err) {
        return;
      }
    }
    fetchComic();
  }, [baseUrl]);

  if (comicData === null) return;

  const data = comicData.data.results[0];
  const id = data.id;
  const img = `${data.thumbnail.path}/portrait_incredible.${data.thumbnail.extension}`;
  const title = data.title;

  return (
    <Link className={classes["comic-min-card"]}>
      <div className={classes["img-box"]}>
        <img src={img} alt={`${title} comics image`} />
      </div>
      <div className={classes["txt-box"]}>
        <p>{title}</p>
      </div>
    </Link>
  );
};

export default ChosenPageMinimalisticCard;
