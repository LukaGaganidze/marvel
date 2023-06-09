import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { MagnifyingGlass } from "../../assets/svg/MagnifyingGlass";
import MD5 from "crypto-js/md5";

import classes from "./SearchSeries.module.css";

const apiURL = process.env.REACT_APP_MARVEL_BASE_URL;
const DUMMY_APLH_STR = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y";
const DUMMY_ALPH_ARR = DUMMY_APLH_STR.split(",");

const SearchSeries = ({ fetchedData }) => {
  // DATA FETCHING
  const ref = useRef();
  const [input, setInput] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    if (
      ref.current.value === "" ||
      ref.current.value === null ||
      !ref.current.value
    )
      return;
    setInput(ref.current.value);
  };

  useEffect(() => {
    if (input === "" || input.length === 0) return;

    const fetchData = async () => {
      const getHash = (timeStamp, privatKey, publicKey) => {
        return MD5(timeStamp + privatKey + publicKey).toString();
      };
      const baseURL = `${apiURL}/v1/public/series`;
      const timeStamp = Date.now().toString();
      const publicKey = process.env.REACT_APP_MARVEL_PUBLIC_API_KEY;
      const privatKey = process.env.REACT_APP_MARVEL_PRIVET_API_KEY;
      const hash = getHash(timeStamp, privatKey, publicKey);

      const url = `${baseURL}?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}&titleStartsWith=${input}`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        fetchedData(data.data.results);
        return data;
      } catch (err) {
        return;
      }
    };
    fetchData();
  }, [input]);

  const searchByLettersHandler = (e) => {
    setInput(e.target.textContent);
  };
  return (
    <div className={classes["search-bar-sec"]}>
      {/* heading */}
      <div className={`${classes["heading"]}`}>
        <h2>
          Search for the <span>Marvel Series</span> by name or index A-Z
        </h2>
      </div>

      {/* letters */}
      <div className={classes["letter-box"]}>
        {DUMMY_ALPH_ARR.map((letter) => (
          <Link
            onClick={searchByLettersHandler}
            className={classes["letter"]}
            key={letter}
          >
            <span>{letter}</span>
          </Link>
        ))}
        <Link className={classes["letter"]}>Z</Link>
      </div>

      {/* search bar */}
      <form onSubmit={submitHandler} className={classes["search-bar"]}>
        <div>
          <label className={classes["search-lbl"]} htmlFor="searchCr">
            <MagnifyingGlass className={classes["search-svg"]} />
          </label>
          <input ref={ref} name="searchCreator" id="searchCr" />
        </div>
      </form>
    </div>
  );
};

export default SearchSeries;
