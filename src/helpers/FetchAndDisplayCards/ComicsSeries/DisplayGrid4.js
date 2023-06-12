import React, { useState } from "react";

import FetchData from "./FetchData";

import classes from "./DisplayGrid4.module.css";

const DisplatDataGrid = ({ data, navTo, loadMore = false }) => {
  const [loadMoreData, setLoadMoreData] = useState(false);

  const updatedData = data.map((item) => {
    const name = item.name;
    const httpRequest = item.resourceURI.toString();
    const httpsRequest = httpRequest.slice(4);
    const updatedRequest = "https" + httpsRequest;
    return { updatedRequest, name };
  });

  const wordFormating = navTo.slice(1, -1);
  const optionalButtonWord =
    wordFormating[0].toUpperCase() + wordFormating.slice(1, -1) + "s";

  if (updatedData.length > 4 && loadMore) {
    const toBeLoaded = updatedData.slice(0, 4);
    return (
      <>
        {!loadMoreData ? (
          <div className={classes["container-marg"]}>
            <div className={classes["data-container"]}>
              {toBeLoaded.map((item) => (
                <FetchData
                  key={item.name || item.title}
                  marvelApi={item.updatedRequest}
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
              {updatedData.map((item) => (
                <FetchData
                  key={item.name || item.title}
                  marvelApi={item.updatedRequest}
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
        {updatedData.map((item) => (
          <FetchData
            key={item.name || item.title}
            marvelApi={item.updatedRequest}
            name={item.name}
            navTo={navTo}
          />
        ))}
      </div>
    </div>
  );
};

export default DisplatDataGrid;
