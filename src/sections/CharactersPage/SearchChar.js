import React, { useEffect, useRef, useState } from "react";
import MD5 from "crypto-js/md5";
import classes from "./SearchChar.module.css";
import { MagnifyingGlass } from "../../assets/svg/MagnifyingGlass";
import LoadingCircel from "../../assets/svg/LoadingCircle";

const apiURL = process.env.REACT_APP_MARVEL_BASE_URL;
const DUMMY_APLH_STR = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y";
const DUMMY_ALPH_ARR = DUMMY_APLH_STR.split(",");

const SearchChar = (props) => {
  // LOADING SPINNER UI
  const [loadingCharacters, setLoadingCharacters] = useState(false);
  const [formWasSubbed, setFormWasSubbed] = useState(false);
  const [letterWasClicked, setLetterWasClicked] = useState(false);

  // INTERSECTION OBSERVER
  const [searchbarIsVisible, setsearchbarIsVisible] = useState(false);
  const componenetRef = useRef(null);
  useEffect(() => {
    const observer1 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setsearchbarIsVisible(true);
          observer1.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (componenetRef.current) {
      observer1.observe(componenetRef.current);
    }

    return () => {
      if (componenetRef.current) {
        observer1.unobserve(componenetRef.current);
      }
    };
  }, []);

  // DATA FETCHING
  const ref = useRef();
  const [input, setInput] = useState("");

  useEffect(() => {
    if (input === "" || input.length === 0) return;
    setLoadingCharacters(true);

    const fetchData = async () => {
      const getHash = (timeStamp, privatKey, publicKey) => {
        return MD5(timeStamp + privatKey + publicKey).toString();
      };
      const baseURL = `${apiURL}/v1/public/characters`;
      const timeStamp = Date.now().toString();
      const publicKey = process.env.REACT_APP_MARVEL_PUBLIC_API_KEY;
      const privatKey = process.env.REACT_APP_MARVEL_PRIVET_API_KEY;
      const hash = getHash(timeStamp, privatKey, publicKey);

      const url = `${baseURL}?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}&nameStartsWith=${input}`;

      try {
        const response = await fetch(url);
        if (response.ok) setLoadingCharacters(false);
        const data = await response.json();
        props.data(data.data.results);

        return data;
      } catch (err) {
        return;
      }
    };
    fetchData();
  }, [input]);

  // HANDLERS
  const searchWithLettersHandler = (e) => {
    setInput(e.target.textContent);
    setLetterWasClicked(true);
  };
  const submitHandler = (e) => {
    e.preventDefault();

    if (
      ref.current.value === "" ||
      ref.current.value === null ||
      !ref.current.value
    )
      return;
    setFormWasSubbed(true);
    setInput(ref.current.value);
  };

  // SPINNER STATE
  const spinnerCircleActive =
    (loadingCharacters && formWasSubbed) ||
    (loadingCharacters && letterWasClicked);

  console.log(spinnerCircleActive);
  return (
    <div
      ref={componenetRef}
      className={`${classes["search-container"]} ${
        classes[searchbarIsVisible ? "active" : ""]
      }`}
    >
      <div
        className={`${classes["loading-circle-container"]} ${
          classes[spinnerCircleActive ? "loading-circle-active" : ""]
        }`}
      >
        <LoadingCircel />
      </div>
      <form onSubmit={submitHandler} className={classes["search-bar"]}>
        <div className={classes["heading-navigation"]}>
          <h2 className={classes["search-bar-heading"]}>
            Search for <span>character</span> by name or index A-Z
          </h2>
          <div className={classes["aphabet"]}>
            {DUMMY_ALPH_ARR.map((el) => (
              <span key={el} className={classes["letter-box"]}>
                <span
                  onClick={searchWithLettersHandler}
                  className={classes["letter"]}
                >
                  {el}
                </span>
                <span className={classes["dot-space"]}>&#8226;</span>
              </span>
            ))}
            <span
              onClick={searchWithLettersHandler}
              className={`${classes["letter"]} ${classes["letter-z"]}`}
            >
              Z
            </span>
          </div>
        </div>
        <div className={classes["input-container"]}>
          <label className={classes["search-lbl"]} htmlFor="searchCr">
            <MagnifyingGlass className={classes["search-svg"]} />
          </label>
          <input ref={ref} name="searchCr" id="searchCr" />
        </div>
      </form>
    </div>
  );
};

export default SearchChar;
