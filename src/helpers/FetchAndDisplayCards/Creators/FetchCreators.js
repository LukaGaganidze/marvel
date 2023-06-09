import React, { useState, useEffect } from "react";

import { MD5 } from "crypto-js";

import Jobscard from "../../../componenets/Jobscard";

const FetchCreators = ({ resourceURI, name, role, navTo }) => {
  const [creator, setCreator] = useState(null);

  useEffect(() => {
    async function fetchCreators() {
      const getHash = (timeStamp, privatKey, publicKey) => {
        return MD5(timeStamp + privatKey + publicKey).toString();
      };

      const baseURL = resourceURI;
      const timeStamp = Date.now().toString();
      const publicKey = process.env.REACT_APP_MARVEL_PUBLIC_API_KEY;
      const privatKey = process.env.REACT_APP_MARVEL_PRIVET_API_KEY;
      const hash = getHash(timeStamp, privatKey, publicKey);

      const url = `${baseURL}?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        setCreator(data);
      } catch (err) {
        return;
      }
    }
    fetchCreators();
  }, [resourceURI]);

  if (creator === null) return;

  const creatorData = creator.data.results[0];

  const { id, thumbnail } = creatorData;
  const creatorImage = `${thumbnail.path}/portrait_fantastic.${thumbnail.extension}`;

  return <Jobscard role={role} name={name} id={`${navTo}${id}`} />;
};

export default FetchCreators;
