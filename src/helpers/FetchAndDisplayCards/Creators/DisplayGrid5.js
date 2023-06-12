import React, { useState } from "react";
import classes from "./DisplayGrid5.module.css";

import FetchCreators from "./FetchCreators";

const DisplayGrid5 = ({ data, navTo, loadMoreCreators = false }) => {
  console.log(navTo);
  const [loadMore, setLoadMore] = useState(false);

  if (data.length > 5 && loadMoreCreators) {
    const only5Items = data.slice(0, 5);

    return (
      <>
        {!loadMore ? (
          <div className={classes["container-marg"]}>
            <div className={classes["creators-cards-container"]}>
              {only5Items.map((el) => (
                <FetchCreators
                  resourceURI={el.resourceURI}
                  name={el.name}
                  role={el.role}
                  key={el.name}
                  navTo={navTo}
                />
              ))}
            </div>

            {!loadMore ? (
              <div className={classes["btn-box"]}>
                <button onClick={() => setLoadMore(true)}>
                  Load More Creators
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
        ) : (
          <div className={classes["container-marg"]}>
            <div className={classes["creators-cards-container"]}>
              {data.map((el) => (
                <FetchCreators
                  resourceURI={el.resourceURI}
                  name={el.name}
                  role={el.role}
                  key={el.name}
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
      <div className={classes["creators-cards-container"]}>
        {data.map((el) => (
          <FetchCreators
            resourceURI={el.resourceURI}
            name={el.name}
            role={el.role}
            key={el.name}
            navTo={navTo}
          />
        ))}
      </div>
    </div>
  );
};

export default DisplayGrid5;
