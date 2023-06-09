import React, { useEffect } from "react";
import { useLoaderData, useLocation } from "react-router-dom";
import MD5 from "crypto-js/md5";

import ChosenCreatorHeading from "../sections/ChosenCreator/ChosenCreatorHeading";
import ComicsWork from "../sections/ChosenCreator/ComicsWorks/ComicsWorks";
import SeriesWork from "../sections/ChosenCreator/SeriesWork/SeriesWork";

const ChosenCreator = () => {
  // to load page from top
  const { pathname } = useLocation();
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }, [pathname]);

  const loaderData = useLoaderData();
  const data = loaderData.data.results[0];

  const { comics, series, firstName, fullName, id } = data;

  return (
    <>
      <ChosenCreatorHeading name={fullName} />
      <ComicsWork comics={comics} firstName={firstName} />
      <SeriesWork series={series} firstName={firstName} />
    </>
  );
};

export default ChosenCreator;

const apiURL = process.env.REACT_APP_MARVEL_BASE_URL;
export async function loader({ request, params }) {
  const creatorID = params.crID;
  const getHash = (timeStamp, privatKey, publicKey) => {
    return MD5(timeStamp + privatKey + publicKey).toString();
  };
  const baseURL = `${apiURL}/v1/public/creators`;
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
