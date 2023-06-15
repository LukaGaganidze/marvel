import React, { useEffect, useState, useRef } from "react";
import { MagnifyingGlass } from "../../assets/svg/MagnifyingGlass";
import MD5 from "crypto-js/md5";

import classes from "./SearchCreator.module.css";

import LoadingCircle from "../../assets/svg/LoadingCircle";

const apiURL = process.env.REACT_APP_MARVEL_BASE_URL;

const DUMMY_APLH_STR = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y";
const DUMMY_ALPH_ARR = DUMMY_APLH_STR.split(",");

const SearchCreator = (props) => {
  // LOADING SPINNER UI
  const [loadingCreators, setLoadingCreators] = useState(false);
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

  // FETCH CREATORS DATA
  const searchInp = useRef();
  const [fetchInput, setFetchInput] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (
      searchInp.current.value === "" ||
      searchInp.current.value === null ||
      !searchInp.current.value
    )
      return;

    setFetchInput(searchInp.current.value);
    setFormWasSubbed(true);
  };

  useEffect(() => {
    if (fetchInput === "" || fetchInput.length === 0) return;
    setLoadingCreators(true);

    const fetchData = async () => {
      const getHash = (timeStamp, privatKey, publicKey) => {
        return MD5(timeStamp + privatKey + publicKey).toString();
      };
      const baseURL = `${apiURL}/v1/public/creators`;
      const timeStamp = Date.now().toString();
      const publicKey = process.env.REACT_APP_MARVEL_PUBLIC_API_KEY;
      const privatKey = process.env.REACT_APP_MARVEL_PRIVET_API_KEY;
      const hash = getHash(timeStamp, privatKey, publicKey);
      const url = `${baseURL}?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}&nameStartsWith=${fetchInput}`;

      try {
        const response = await fetch(url);
        if (response.ok) setLoadingCreators(false);

        const data = await response.json();
        props.creatorsData(data.data.results);
        return data;
      } catch (err) {
        return;
      }
    };
    fetchData();
  }, [fetchInput]);

  const searchWithLettersHandler = (e) => {
    setFetchInput(e.target.textContent);
    setLetterWasClicked(true);
  };

  // SPINNER STATE
  const spinnerCircleActive =
    (loadingCreators && formWasSubbed) || (loadingCreators && letterWasClicked);

  return (
    <div
      ref={componenetRef}
      className={`${classes["search-container"]} ${
        classes[searchbarIsVisible ? "active" : ""]
      }`}
    >
      <div className={classes["loading-circle"]}>
        {spinnerCircleActive && <LoadingCircle />}
      </div>
      <form onSubmit={submitHandler} className={classes["search-bar"]}>
        <div className={classes["heading-navigation"]}>
          <h2 className={classes["search-bar-heading"]}>
            Search for <span>Creator</span> by name or index A-Z
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
              className={classes["letter"]}
            >
              Z
            </span>
          </div>
        </div>

        <div className={classes["input-box"]}>
          <label className={classes["search-lbl"]} htmlFor="searchCr">
            <MagnifyingGlass className={classes["search-svg"]} />
          </label>
          <input ref={searchInp} name="searchCreator" id="searchCr" />
        </div>
      </form>
    </div>
  );
};

export default SearchCreator;
