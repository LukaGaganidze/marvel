import React, { useState } from "react";

import FetchData from "./FetchData";

import classes from "./DisplayGrid4.module.css";

const DisplatDataGrid = ({ data, navTo, loadMore = false }) => {
  const [loadMoreData, setLoadMoreData] = useState(false);

  console.log(data);

  const wordFormating = navTo.slice(1, -1);
  const optionalButtonWord =
    wordFormating[0].toUpperCase() + wordFormating.slice(1, -1) + "s";

  if (data.length > 4 && loadMore) {
    const toBeLoaded = data.slice(0, 4);
    return (
      <>
        {!loadMoreData ? (
          <div className={classes["container-marg"]}>
            <div className={classes["data-container"]}>
              {toBeLoaded.map((item) => (
                <FetchData
                  key={item.name || item.title}
                  marvelApi={item.resourceURI}
                  name={item.name}
                  navTo={navTo}
                />
              ))}
            </div>

            {!loadMoreData ? (
              <div className={classes["btn-box"]}>
                <button onClick={() => setLoadMoreData(true)}>
                  Load More {optionalButtonWord}
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
        ) : (
          <div className={classes["container-marg"]}>
            <div className={classes["data-container"]}>
              {data.map((item) => (
                <FetchData
                  key={item.name || item.title}
                  marvelApi={item.resourceURI}
                  name={item.name}
                  navTo={navTo}
                />
              ))}
            </div>
          </div>
        )}
      </>
    );
  }

  return (
    <div className={classes["container-marg"]}>
      <div className={classes["data-container"]}>
        {data.map((item) => (
          <FetchData
            key={item.name || item.title}
            marvelApi={item.resourceURI}
            name={item.name}
            navTo={navTo}
          />
        ))}
      </div>
    </div>
  );
};

export default DisplatDataGrid;
