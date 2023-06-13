import React, { useState } from "react";

import { useNavigation } from "react-router-dom";

import classes from "./DisplayGrid6.module.css";
import FetchCharacters from "./FetchCharacters";

const DisplayCharacterCardsGrid = ({ data, navTo, loadMoreChars }) => {
  // loader btn and card states
  const [loadMore, setLoadMore] = useState(false);

  const updatedData = data.map((item) => {
    const name = item.name;
    const httpRequest = item.resourceURI.toString();
    const httpsRequest = httpRequest.slice(4);
    const updatedRequest = "https" + httpsRequest;
    return { updatedRequest, name };
  });

  // if more then 6 characters render 6 cards and loader btn
  if (updatedData.length > 6 && loadMoreChars) {
    const toBeLoaded = updatedData.slice(0, 6);
    return (
      <>
        {!loadMore ? (
          <div className={classes["container-marg"]}>
            <div className={classes["characters-container"]}>
              {toBeLoaded.map((el) => (
                <FetchCharacters
                  data={el.updatedRequest}
                  navTo={navTo}
                  key={el.updatedRequest.toString()}
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
              {updatedData.map((el) => (
                <FetchCharacters
                  data={el.updatedRequest}
                  navTo={navTo}
                  key={el.updatedRequest.toString()}
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
        {updatedData.map((el) => (
          <FetchCharacters
            data={el.updatedRequest}
            navTo={navTo}
            key={el.updatedRequest.toString()}
          />
        ))}
      </div>
    </div>
  );
};

export default DisplayCharacterCardsGrid;

{
  /* <div
className={`${classes["loading-circle"]} ${classes["loading-circle-active"]}`}
>
<LoadingCircle />
</div> */
}
