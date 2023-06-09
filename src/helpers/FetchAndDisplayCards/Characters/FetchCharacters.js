import React, { useState, useEffect } from "react";
import { MD5 } from "crypto-js";

import SearchedCharactreCard from "../../../componenets/SearchedCharactreCard";

const FetchCharacters = ({ data, navTo }) => {
  const [character, setCharacter] = useState(null);
  useEffect(() => {
    async function fetchComics() {
      const getHash = (timeStamp, privatKey, publicKey) => {
        return MD5(timeStamp + privatKey + publicKey).toString();
      };

      const baseURL = data;
      const timeStamp = Date.now().toString();
      const publicKey = process.env.REACT_APP_MARVEL_PUBLIC_API_KEY;
      const privatKey = process.env.REACT_APP_MARVEL_PRIVET_API_KEY;
      const hash = getHash(timeStamp, privatKey, publicKey);

      const url = `${baseURL}?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        setCharacter(data);
      } catch (err) {
        return;
      }
    }
    fetchComics();
  }, [data]);

  // id,image= thumbnail, name

  if (character === null) return;

  const charcterData = character.data.results[0];

  const { id, name: charName, thumbnail } = charcterData;
  return (
    <SearchedCharactreCard
      id={`${navTo}${id}`}
      name={charName}
      image={thumbnail}
    />
  );
};

export default FetchCharacters;
