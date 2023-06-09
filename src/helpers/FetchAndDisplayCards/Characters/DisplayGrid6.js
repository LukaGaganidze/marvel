import React, { useState } from "react";

import classes from "./DisplayGrid6.module.css";
import FetchCharacters from "./FetchCharacters";

const DisplayCharacterCardsGrid = ({ data, navTo, loadMoreChars }) => {
  // loader btn and card states
  const [loadMore, setLoadMore] = useState(false);

  // if more then 6 characters render 6 cards and loader btn
  if (data.length > 6 && loadMoreChars) {
    const toBeLoaded = data.slice(0, 6);
    return (
      <>
        {!loadMore ? (
          <div className={classes["container-marg"]}>
            <div className={classes["characters-container"]}>
              {toBeLoaded.map((el) => (
                <FetchCharacters
                  data={el.resourceURI}
                  navTo={navTo}
                  key={el.resourceURI.toString()}
                />
              ))}
            </div>

            {!loadMore ? (
              <div className={classes["btn-box"]}>
                <button onClick={() => setLoadMore(true)}>
                  Load More Characters
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
        ) : (
          <div className={classes["container-marg"]}>
            <div
              className={`${classes["characters-container"]} ${classes["characters-container-extended"]}`}
            >
              {data.map((el) => (
                <FetchCharacters
                  data={el.resourceURI}
                  navTo={navTo}
                  key={el.resourceURI.toString()}
                />
              ))}
            </div>
          </div>
        )}
      </>
    );
  }

  // if its <=  6
  return (
    <div className={classes["container-marg"]}>
      <div
        className={`${classes["characters-container"]} ${classes["characters-container-extended"]}`}
      >
        {data.map((el) => (
          <FetchCharacters
            data={el.resourceURI}
            navTo={navTo}
            key={el.resourceURI.toString()}
          />
        ))}
      </div>
    </div>
  );
};

export default DisplayCharacterCardsGrid;
