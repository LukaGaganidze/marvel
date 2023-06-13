import React from "react";
import { Link } from "react-router-dom";

import classes from "./FeaturedCharacters.module.css";
import CharacterCard from "../../componenets/CharacterCard";

// images

import AdamWarlock from "../../assets/characters/CharactersSection/characters/AdamWarlock.jpg";
import moonKnignt from "../../assets/characters/CharactersSection/characters/Moon-Knight.jpg";
import nightCrawler from "../../assets/characters/CharactersSection/characters/night-crawler.jpg";
import dareDevil from "../../assets/characters/CharactersSection/characters/dareDevil.jpg";
import thing from "../../assets/characters/CharactersSection/characters/Thing.jpg";

const CHARACTERS_SECTION_CHARCTERS_DATA = [
  {
    name: "Daredevil",
    dirstApperance: "Daredevil #1 - The Origin of Daredevil",
    image: dareDevil,
    link: "/characters/1009262",
  },
  {
    name: "Thing",
    dirstApperance: "Fantastic Four #1 - The Fantastic Four!",
    image: thing,
    link: "/characters/1010983",
  },
  {
    name: "Adam Warlock",
    dirstApperance: "Fantastic Four #66–67 As Adam Warlock: Marvel Premiere #1",
    image: AdamWarlock,
    link: "/characters/1010354",
  },
  {
    name: "Moon Knight",
    dirstApperance: "Werewolf by Night #32 - The Stalker called Moon Knight",
    image: moonKnignt,
    link: "/characters/1009452",
  },
  {
    name: "Nightcrawler",
    dirstApperance: "Giant-Size X-Men #1 - Deadly Genesis",
    image: nightCrawler,
    link: "/characters/1009472",
  },
];

const FeaturedCharacters = () => {
  return (
    <div className={classes["characters-sub-sec"]}>
      <p className={classes["characters-sub-text"]}>Featured Characters</p>
      <ul className={classes["featured-char-list"]}>
        {CHARACTERS_SECTION_CHARCTERS_DATA.map((el) => (
          <li key={el.name} className={classes["featured-chars"]}>
            <CharacterCard
              navTo={el.link}
              key={el.name}
              name={el.name}
              appearance={el.dirstApperance}
              image={el.image}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeaturedCharacters;
