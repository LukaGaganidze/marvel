import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import CreatorsCard from "../../componenets/CreatorsCard";
import backgroundVideo from "../../assets/videos/marvel-intro.mp4";

import classes from "./Creators.module.css";

import image1 from "../../assets/creators/JASON-AARON.jpg";
import image2 from "../../assets/creators/JONATHAN-HICKMAN.jpg";
import image3 from "../../assets/creators/NICK-SPENCER.jpg";
// import image4 from "../assets/creators/RUSSELL-DAUTERMAN.jpg";
import image5 from "../../assets/creators/SALADIN-AHMED.jpg";
import image6 from "../../assets/creators/TA-NEHISI-COATES.jpg";
import image7 from "../../assets/creators/TINI-HOWARD.jpg";

const CREATORS_OBJ = [
  {
    firstName: "JASON ",
    lastName: "AARON",
    image: image1,
    creations: ["Avengers Forever #15", "Punisher #10", "Avengers #66"],
    id: "el1",
    link: "/creators/11463",
  },
  {
    firstName: "JONATHAN ",
    lastName: "HICKMAN",
    image: image2,
    creations: ["Inferno", "X-Men Annual #1", "Amazing Fantasy"],
    id: "el2",
    link: "/creators/11743",
  },
  {
    firstName: "NICK ",
    lastName: "SPENCER",
    image: image3,
    creations: ["Sinister War", "Spider-Man #74", "Sinister War #3"],
    id: "el3",
    link: "/creators/11434",
  },
  {
    firstName: "SALADIN ",
    lastName: "AHMED",
    image: image5,
    creations: ["Ms. Marvel", "Spider-Man ", "Wolverine"],
    id: "el4",
    link: "/creators/13081",
  },
  {
    firstName: "TA-NEHISI",
    lastName: "COATES",
    image: image6,
    creations: [
      "Black Panther #25",
      "Captain America #29",
      "Captain America #30",
    ],
    id: "el5",
    link: "/creators/13625",
  },
  {
    firstName: "TINI",
    lastName: "HOWARD",
    image: image7,
    creations: [
      "Trials Of X Vol. 3 ",
      "X-Men: Hellfire Gala",
      "Betsy Braddock",
    ],
    id: "el6",
    link: "/creators/13536",
  },
];

const Creators = () => {
  const [isVisible, setIsVisible] = useState(false);
  const componenet1Ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.8 }
    );

    if (componenet1Ref.current) {
      observer.observe(componenet1Ref.current);
    }
    return () => {
      if (componenet1Ref.current) {
        observer.unobserve(componenet1Ref.current);
      }
    };
  }, []);

  return (
    <>
      <h2 className={classes["creators-optional"]}>
        <span className={classes["highlited-text"]}>Marvel Creators</span>
      </h2>

      <section className={classes["creators-sec"]}>
        {/* oprional heading */}

        {/* ABSOLUTELY POSITIONED VIDEO */}
        <div className={classes["video-container"]}>
          <video className={classes["creators-vid"]} autoPlay loop muted>
            <source src={backgroundVideo} type="video/mp4" />
          </video>
          <div className={classes["video-overlay"]}></div>
        </div>

        {/* SECTION CONTENT */}
        <h2
          ref={componenet1Ref}
          className={`${classes["creators-header"]} ${
            classes["creators-header-1"]
          } ${classes[isVisible ? "animateleft" : ""]}`}
        >
          <span className={classes["highlited-text"]}>Marvel</span>'s
          Masterminds:
        </h2>
        <h2
          className={`${classes["creators-header"]} ${
            classes["creators-header-2"]
          } ${classes[isVisible ? "animateright" : ""]}`}
        >
          The Creative Geniuses Behind the{" "}
          <span className={classes["highlited-text"]}>Heroes</span>
        </h2>
        <div className={classes["creator-card-container"]}>
          {CREATORS_OBJ.map((el) => (
            <Link
              to={el.link}
              className={classes["creator-card-a"]}
              key={el.id}
            >
              <CreatorsCard
                image={el.image}
                firstName={el.firstName}
                lastName={el.lastName}
                creations={el.creations}
                id={el.id}
              />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default Creators;
