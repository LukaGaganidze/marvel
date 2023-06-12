import React, { useEffect, useState } from "react";
import MD5 from "crypto-js/md5";

import classes from "./ComicsSeries.module.css";

import GridHeadingMin from "../../../componenets/headings/ChosenSection/GridHeadingMin";
import DisplaySereisGrid from "../../../helpers/FetchAndDisplayCards/ComicsSeries/DisplayGrid4";

const ComicsSeries = ({ series }) => {
  const [seriesData, setSeriesData] = useState(null);

  const serieURL = series.resourceURI;
  const seriesName = series.name;

  useEffect(() => {
    async function fetchSeries() {
      const getHash = (timeStamp, privatKey, publicKey) => {
        return MD5(timeStamp + privatKey + publicKey).toString();
      };

      const baseURL = serieURL;
      const timeStamp = Date.now().toString();
      const publicKey = process.env.REACT_APP_MARVEL_PUBLIC_API_KEY;
      const privatKey = process.env.REACT_APP_MARVEL_PRIVET_API_KEY;
      const hash = getHash(timeStamp, privatKey, publicKey);

      const url = `${baseURL}?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        setSeriesData(data);
      } catch (err) {
        return;
      }
    }
    fetchSeries();
  }, [serieURL]);

  if (seriesData === null) return;

  const { id, comics, creators, description, thumbnail } =
    seriesData.data.results[0];

  const comicsInSerie = comics.items;

  const { available, returned } = comics;

  return (
    <div className={classes["comic-series-sec"]}>
      {/* heading */}
      <GridHeadingMin
        headingFor={"Series"}
        total={available}
        available={returned}
        seriesName={seriesName}
      />

      {/* Comics in this Series */}
      <div className={classes["comic-series"]}>
        <DisplaySereisGrid
          data={comicsInSerie}
          navTo={"/comics/"}
          loadMore={true}
        />
      </div>
    </div>
  );
};

export default ComicsSeries;
