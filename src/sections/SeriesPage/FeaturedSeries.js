import React from "react";

import FeaturedSeriesCard from "../../componenets/FeaturedSeriesCard";

import classes from "./FeaturedSeries.module.css";

import Hay from "../../assets/series/serieshome/Hay.jpg";
import iron from "../../assets/series/serieshome/iron.jpg";
import magneto from "../../assets/series/serieshome/magneto.jpg";
import scarlet from "../../assets/series/serieshome/scarlet.jpg";
import storm from "../../assets/series/serieshome/storm.jpg";
import walwerine from "../../assets/series/serieshome/walwerine.jpg";

const FEATURED_SERIES = [
  {
    image: walwerine,
    name: "Wolverine",
    release: "(2020 - Present)",
    id: "28051",
  },
  {
    image: Hay,
    name: "Hawkeye",
    release: "(2012 - 2015)",
    id: "16309",
  },
  {
    image: iron,
    name: "Iron Man",
    release: "(1998 - 2004)",
    id: "2572",
  },
  {
    image: magneto,
    name: "Magneto",
    release: " (2014 - 2015)",
    id: "18407",
  },
  {
    image: scarlet,
    name: "Scarlet Witch",
    release: "(2015 - 2017)",
    id: "20854",
  },
  {
    image: storm,
    name: "Storm",
    release: "(2014 - 2015)",
    id: "19046",
  },
];

const FeaturedSeries = () => {
  return (
    <div className={classes["featured-series"]}>
      {FEATURED_SERIES.map((item) => (
        <FeaturedSeriesCard
          image={item.image}
          name={item.name}
          date={item.release}
          key={item.id}
          id={item.id}
          navTo={`/series/${item.id}`}
        />
      ))}
    </div>
  );
};

export default FeaturedSeries;
