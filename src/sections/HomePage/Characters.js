import CharacterCardL from "../../componenets/CharacterCardL";
import CharacterVideo from "../../componenets/CharacterVideo";

import classes from "./Characters.module.css";

import { useState, useEffect, useRef } from "react";
import { useNavigation } from "react-router-dom";

import america from "../../assets/characters/america.jpg";
import deadpool from "../../assets/characters/deadpool.jpg";
import loki from "../../assets/characters/loki.jpg";
import walwerine from "../../assets/characters/walwerine.jpg";

const DUMMY_CHARS = [
  {
    name: "Captain America",
    createdBy: "Joe Simon and Jack Kirby",
    firstAppearence: "Captain America Comics #1, in 1941",
    image: america,
    id: 1,
    path: "/characters/1009220",
  },
  {
    name: "Deadpool",
    createdBy: "Fabian Nicieza and Rob Liefeld",
    firstAppearence: "Batman #59, in 1950",
    image: deadpool,
    id: 2,
    path: "/characters/1009268",
  },
  {
    name: "Loki",
    createdBy: "Stan Lee, scripter Larry Lieber and Jack Kirby",
    firstAppearence: "The New Mutants - published December 11, 1990",
    image: loki,
    id: 3,
    path: "/characters/1009407",
  },
  {
    name: "Wolverine",
    createdBy: "Len Wein and John Romita, Sr.",
    firstAppearence: "The Incredible Hulk no. 181, in 1974",
    image: walwerine,
    id: 4,
    path: "/characters/1009718",
  },
];

const Characters = () => {
  // INTERSECTION OBSERVER
  const [isVisible, setIsVisible] = useState(false);
  const componenetRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (componenetRef.current) {
      observer.observe(componenetRef.current);
    }
    return () => {
      if (componenetRef.current) {
        observer.unobserve(componenetRef.current);
      }
    };
  }, []);

  // LOADING STATUS
  const [isClicked, setIsClicked] = useState(false);

  const loadingStatus = useNavigation();
  const charClickHandler = () => {
    setIsClicked(true);
  };
  const isLoading = loadingStatus.state === "loading" && isClicked;

  return (
    <section className={classes["chars-sec"]}>
      {/* OPTIONAL HEADING */}
      <h2 className={classes["mobile-heading"]}>Marvel Characters</h2>
      {/* CHARACTERS CARDS */}
      <ul className={classes["characters-card-box"]}>
        {DUMMY_CHARS.map((char) => (
          <li key={char.id} className={classes["characters-list"]}>
            <CharacterCardL
              path={char.path}
              name={char.name}
              creator={char.createdBy}
              firstAppearence={char.firstAppearence}
              image={char.image}
              onClick={charClickHandler}
              isLoading={isLoading}
            />
          </li>
        ))}
      </ul>

      {/* CHARACTER YOUTUBE VIDEO AND DESCTIPTION */}
      <div
        ref={componenetRef}
        className={`${classes["char-video-desc-box"]} ${
          classes[isVisible ? "fadeIn" : ""]
        }`}
      >
        <CharacterVideo className={classes["char-vid"]} />
        <div className={classes["chat-text-box"]}>
          <h2 className={classes["chat-text-heading"]}>
            Spider-Man: Across the Spider-Verse
          </h2>

          <div className={classes["chat-text-date-time"]}>
            <span>2023 / </span>
            <span>2h 20m</span>
          </div>

          <p className={classes["chat-text-desc"]}>
            Miles Morales catapults across the Multiverse, where he encounters a
            team of Spider-People charged with protecting its very existence.
            When the heroes clash on how to handle a new threat, Miles must
            redefine what it means to be a hero.
          </p>

          <div className={classes["chat-text-details"]}>
            <p className={classes["chat-text-details-inner-box"]}>
              <span>Directors:</span>
              <span>Joaquim Dos Santos, </span>
              <span>Kemp Powers, </span>
              <span>Justin K. Thompson</span>
            </p>

            <p className={classes["chat-text-details-inner-box"]}>
              <span>Writers:</span>
              <span>Phil Lord, </span>
              <span>Christopher Miller, </span>
              <span>Dave Callaham</span>
            </p>

            <p className={classes["chat-text-details-inner-box"]}>
              <span>Stars:</span>
              <span>Shameik Moore, </span>
              <span>Hailee Steinfeld, </span>
              <span>Oscar Isaac</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Characters;
