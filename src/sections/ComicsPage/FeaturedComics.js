import FeaturedComicsMinimalistic from "../../componenets/FeaturedComicsMinimalistic";
import React, { useState, useRef, useEffect } from "react";
import classes from "./FeaturedComics.module.css";

import img1 from "../../assets/comics-page/Featired-Comics/comic1.jpg";
import img2 from "../../assets/comics-page/Featired-Comics/comic2.jpg";
import img3 from "../../assets/comics-page/Featired-Comics/comic3.jpg";
import img4 from "../../assets/comics-page/Featired-Comics/comic4.jpg";
import img5 from "../../assets/comics-page/Featired-Comics/comic5.jpg";
import img6 from "../../assets/comics-page/Featired-Comics/comic6.jpg";
import img7 from "../../assets/comics-page/Featired-Comics/comic7.jpg";
import img8 from "../../assets/comics-page/Featired-Comics/comic8.jpg";

const FEATURED_COMICS_DATA = [
  {
    img: img1,
    name: "Avengers Assemble Omega (2023) #1",
    id: 102440,
  },
  {
    img: img2,
    name: "Avengers (2023) #1",
    id: 101513,
  },
  {
    img: img3,
    name: "Hulk Smash Avengers (2011) #2",
    id: 41220,
  },
  {
    img: img4,
    name: "Deadpool Kills the Marvel Universe (2011) #2",
    id: 41552,
  },
  {
    img: img5,
    name: "Age of Ultron (2013) #10 (Brooks Variant)",
    id: 47022,
  },
  {
    img: img6,
    name: "Ghost Rider (2022) #14 (Variant)",
    id: 108742,
  },
  {
    img: img7,
    name: "Amazing Spider-Man Presents: Anti-Venom - New Ways to Live (2009) #1",
    id: 24821,
  },
  {
    img: img8,
    name: "DEADPOOL KILLS THE MARVEL UNIVERSE TPB (Trade Paperback)",
    id: 41577,
  },
];

const FeaturedComics = () => {
  //  INTERSECTIONOBSERVER
  const [headingIsVisible, setheadingIsVisible] = useState(false);
  const [cardIisible, setcardIisible] = useState(false);

  const componenetRef = useRef(null);
  const componenetRef2 = useRef(null);

  useEffect(() => {
    const observer1 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setheadingIsVisible(true);
          observer1.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (componenetRef.current) {
      observer1.observe(componenetRef.current);
    }

    const observer2 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setcardIisible(true);
          observer2.disconnect();
        }
      },
      { threshold: 0 }
    );

    if (componenetRef2.current) {
      observer2.observe(componenetRef2.current);
    }

    return () => {
      if (componenetRef.current) {
        observer1.unobserve(componenetRef.current);
      }
      if (componenetRef2.current) {
        observer2.unobserve(componenetRef2.current);
      }
    };
  }, []);

  return (
    <div className={classes["featured-comics-container"]}>
      <h2
        className={`${classes["featured-comics-heading"]} ${
          classes[headingIsVisible ? "active-header" : ""]
        }`}
        ref={componenetRef}
      >
        Best selling digital comics
      </h2>
      <h2 className={classes["optional-heading"]}>Digital Comics</h2>
      <div
        ref={componenetRef2}
        className={`${classes["card-container"]} ${
          classes[cardIisible ? "active-cards" : ""]
        }`}
      >
        {FEATURED_COMICS_DATA.map((comic) => (
          <FeaturedComicsMinimalistic
            id={`/comics/${comic.id}`}
            key={comic.id}
            name={comic.name}
            img={comic.img}
          />
        ))}
      </div>
    </div>
  );
};
export default FeaturedComics;
