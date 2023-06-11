import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import MD5 from "crypto-js/md5";

import classes from "./CreatorsHero.module.css";
import CardSmall from "../../componenets/CardSmall";

// images
// chars
import deadpool from "../../assets/covers/deadpool-cr.jpg";
import spider from "../../assets/covers/spider-cr-new.jpg";
import hulk from "../../assets/covers/hulk-cr.jpg";

// creators
import stanLeeSpiderHulk from "../../assets/creators/card-cr/stan-lee-spider-man-hulk.png";
import JackKirbyHulk from "../../assets/creators/card-cr/JackKirby--hulk.png";

import DitkoSpiderMan from "../../assets/creators/card-cr/Ditko--spider-man.png";

import FabianNiciezaDeadpool from "../../assets/creators/card-cr/FabianNicieza--deadpool.png";
import RobLiefeldDeadpool from "../../assets/creators/card-cr/RobLiefeld-deadpool.png";

const DEADPOOL_DAT = [
  {
    image: FabianNiciezaDeadpool,
    fullName: "Fabian Nicieza",
    desc: "writer ",
    link: "/creators/6001",
  },
  {
    image: RobLiefeldDeadpool,
    fullName: "Rob Liefeld",
    desc: "artist/writer ",
    link: "/creators/571",
  },
];
const SPIDER_DAT = [
  {
    image: stanLeeSpiderHulk,
    fullName: "Stan Lee",
    desc: "writer ",
    link: "/creators/30",
  },
  {
    image: DitkoSpiderMan,
    fullName: "Steve Ditko",
    desc: "artist",
    link: "/creators/32",
  },
];
const HULK_DAT = [
  {
    image: JackKirbyHulk,
    fullName: "Jack Kirby",
    desc: "artist",
    link: "/creators/196",
  },
  {
    image: stanLeeSpiderHulk,
    fullName: "Stan Lee",
    desc: "writer ",
    link: "/creators/30",
  },
];

const apiURL = process.env.REACT_APP_MARVEL_BASE_URL;

const CreatorsHero = () => {
  //  INTERSECTIONOBSERVER
  const [spiderIsVisible, setspiderIsVisible] = useState(false);
  const [hulkIsVisible, sethulkIsVisible] = useState(false);

  const componenetRef = useRef(null);
  const componenetRef2 = useRef(null);

  useEffect(() => {
    const observer1 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setspiderIsVisible(true);
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
          sethulkIsVisible(true);
          observer2.disconnect();
        }
      },
      { threshold: 0.2 }
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

  // FETCHING DATA
  useEffect(() => {
    const fetchData = async () => {
      const getHash = (timeStamp, privatKey, publicKey) => {
        return MD5(timeStamp + privatKey + publicKey).toString();
      };
      const baseURL = `${apiURL}/v1/public/creators`;
      const timeStamp = Date.now().toString();
      const publicKey = process.env.REACT_APP_MARVEL_PUBLIC_API_KEY;
      const privatKey = process.env.REACT_APP_MARVEL_PRIVET_API_KEY;
      const hash = getHash(timeStamp, privatKey, publicKey);

      const url = `${baseURL}?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}&nameStartsWith=${"Fabian Nicieza"}`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
      } catch (err) {
        return;
      }
    };
    fetchData();
  }, []);

  return (
    <div className={classes["creators-container"]}>
      {/* heading */}
      <div className={classes["creators-hero"]}>
        <h2 className={classes["creators-heading"]}>
          <span className={classes["creators-heading-main"]}>
            Discover Marvels Creators
          </span>
          <span className={classes["creators-heading-sec"]}>
            who bring your favorite characters and comics to life
          </span>
        </h2>
      </div>
      <h2 className={classes["optional-heading"]}>Marvels Creators</h2>

      {/* hero */}
      <div className={classes["creators-z-container"]}>
        {/* DEADPOOL */}
        <div
          className={`${classes["creators-z"]} ${classes["creators-deadoool"]}`}
        >
          <div className={classes["creators-z-img-box"]}>
            <img src={deadpool} />
          </div>

          <div className={classes["creators-z-text-box"]}>
            <h2 className={classes["creators-z-text-heading"]}>
              Deadpool Creators
            </h2>

            <ul className={classes["creator-cards"]}>
              {DEADPOOL_DAT.map((el) => (
                <li key={el.fullName}>
                  <Link to={el.link} className={classes["creator-cards-link"]}>
                    <CardSmall
                      image={el.image}
                      fullName={el.fullName}
                      desc={el.desc}
                    />
                  </Link>
                </li>
              ))}
            </ul>

            <div className={classes["char--origins-heading"]}>
              <p className={classes["heading-p"]}>
                Interesting fact about the creation of Deadpool
              </p>
              <span className={classes["heading-span"]}>
                Deadpool: Initially conceived as a villain called "The
                Mercenary," underwent a transformation to become humorous
                anti-hero, gaining popularity for his character traits.
              </span>
            </div>
          </div>

          <div className={classes["creators-card-box"]}></div>
        </div>

        {/* SPIDER-MAN */}
        <div
          ref={componenetRef}
          className={`${classes["creators-z"]} ${classes["creators-spider"]} ${
            classes[spiderIsVisible ? "active-cr" : ""]
          }`}
        >
          <div className={classes["creators-z-text-box"]}>
            <h2 className={classes["creators-z-text-heading"]}>
              Spider-Man Creators
            </h2>

            <ul className={classes["creator-cards"]}>
              {SPIDER_DAT.map((el) => (
                <li key={el.fullName}>
                  <Link to={el.link} className={classes["creator-cards-link"]}>
                    <CardSmall
                      image={el.image}
                      fullName={el.fullName}
                      desc={el.desc}
                    />
                  </Link>
                </li>
              ))}
            </ul>

            <div className={classes["char--origins-heading"]}>
              <p className={classes["heading-p"]}>
                Interesting fact about the creation of Spider-Man
              </p>
              <span className={classes["heading-span"]}>
                Spider-Man: Spider-Man was the first teenage superhero, main
                protagonist of his own comic books, breaking the mold of
                adult-dominated superheroes and resonating with readers through
                relatable youth.
              </span>
            </div>
          </div>

          <div className={classes["creators-z-img-box"]}>
            <img src={spider} />
          </div>
        </div>

        {/* HULK */}
        <div
          ref={componenetRef2}
          className={`${classes["creators-z"]} ${classes["creators-hulk"]} ${
            classes[hulkIsVisible ? "active-cr" : ""]
          }`}
        >
          <div className={classes["creators-z-img-box"]}>
            <img src={hulk} />
          </div>

          <div className={classes["creators-z-text-box"]}>
            <h2 className={classes["creators-z-text-heading"]}>
              Hulk Creators
            </h2>

            <ul className={classes["creator-cards"]}>
              {HULK_DAT.map((el) => (
                <li key={el.fullName}>
                  <Link to={el.link} className={classes["creator-cards-link"]}>
                    <CardSmall
                      image={el.image}
                      fullName={el.fullName}
                      desc={el.desc}
                    />
                  </Link>
                </li>
              ))}
            </ul>

            <div className={classes["char--origins-heading"]}>
              <p className={classes["heading-p"]}>
                Interesting fact about the creation of Hulk
              </p>
              <span className={classes["heading-span"]}>
                Hulk: Inspired by Frankenstein's monster, the Hulk was created
                as a brilliant scientist with a tragic transformation, embodying
                themes of duality.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorsHero;

// Deadpool: Initially conceived as a villain called "The Mercenary," Deadpool underwent a transformation to become a witty and humorous anti-hero, gaining immense popularity for his unique character traits.

// Spider-Man: Spider-Man was the first teenage superhero to be the main protagonist of his own comic book series, breaking the mold of adult-dominated superheroes and resonating with readers through relatable youth and everyday struggles.

// Hulk: Inspired by Frankenstein's monster and Dr. Jekyll and Mr. Hyde, the Hulk was created as a brilliant scientist with a tragic transformation, embodying themes of duality and inner conflict that set him apart as a unique and compelling character.
