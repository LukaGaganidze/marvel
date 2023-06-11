import { useRef, useEffect, useState } from "react";

import classes from "./ZPatternSeries.module.css";

import ZChildOne from "./ZChildOne";
import ZChildTwo from "./ZChildTwo";

import strange from "../../../assets/series/serieshome/afterFeatures/strange.jpg";
import thor from "../../../assets/series/serieshome/afterFeatures/thor.jpg";

const Z_CHILD_DATA = [
  {
    img: strange,
    name: "Doctor Strange",
    date: "(2023 - Present)",
    desc: "Stephen Strange is back! Reunited with Clea and Wong, it's back to business as usual for the Sorcerer Supreme. Are demonic refugees invading your home? Then call Doctor Strange! Join Jed MacKay and Pasqual Ferry as they begin a new chapter in the life of the Master of the Mystic Arts!",
  },
  {
    img: thor,
    name: "Thor",
    date: "(2020 - Present)",
    desc: "The prince is now a king. All Asgard lies before Thor, the God of Thunder. And after many months of war, the Ten Realms are finally at peace. But the skies above the Realm Eternal are never clear for long. The Black Winter is coming. And the God of the Storm will be powerless before it.",
  },
];

const ZPatternSeries = () => {
  //  INTERSECTIONOBSERVER
  const [z1, setZ1] = useState(false);
  const [z2, setZ2] = useState(false);

  const componenetRef = useRef(null);
  const componenetRef2 = useRef(null);

  useEffect(() => {
    const observer1 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setZ1(true);
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
          setZ2(true);
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

  return (
    <div className={classes["z-pattern-container"]}>
      {/* OPTIONAL HEADING */}
      {/* <h2 className={classes["optional-heading"]}>Featured Series</h2> */}
      {/* bachground */}
      <div className={classes["z-pattern-bacground"]}></div>

      {/* Z1 */}
      <div
        className={`${classes["z-item"]} ${classes["z-item-1"]} ${
          classes[z1 ? "visible" : ""]
        }`}
        ref={componenetRef}
      >
        <h3 className={classes["optional-series-heading"]}>Featured Series</h3>
        <ZChildOne
          img={Z_CHILD_DATA[0].img}
          name={Z_CHILD_DATA[0].name}
          date={Z_CHILD_DATA[0].date}
          desc={Z_CHILD_DATA[0].desc}
        />
      </div>

      {/* Z2 */}
      <div
        className={`${classes["z-item"]} ${classes["z-item-2"]} ${
          classes[z2 ? "visible" : ""]
        }`}
        ref={componenetRef2}
      >
        <ZChildTwo
          img={Z_CHILD_DATA[1].img}
          name={Z_CHILD_DATA[1].name}
          date={Z_CHILD_DATA[1].date}
          desc={Z_CHILD_DATA[1].desc}
        />
      </div>
    </div>
  );
};

export default ZPatternSeries;
