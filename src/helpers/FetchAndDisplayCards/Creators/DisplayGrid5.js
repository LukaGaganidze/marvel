import React, { useState } from "react";
import classes from "./DisplayGrid5.module.css";

import FetchCreators from "./FetchCreators";

const DisplayGrid5 = ({ data, navTo, loadMoreCreators = false }) => {
  console.log(navTo);
  const [loadMore, setLoadMore] = useState(false);

  const updatedData = data.map((item) => {
    const name = item.name;
    const role = item.role;
    const httpRequest = item.resourceURI.toString();
    const httpsRequest = httpRequest.slice(4);
    const updatedRequest = "https" + httpsRequest;
    return { updatedRequest, name, role };
  });

  if (updatedData.length > 5 && loadMoreCreators) {
    const only5Items = updatedData.slice(0, 5);

    return (
      <>
        {!loadMore ? (
          <div className={classes["container-marg"]}>
            <div className={classes["creators-cards-container"]}>
              {only5Items.map((el) => (
                <FetchCreators
                  resourceURI={el.updatedRequest}
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
              {updatedData.map((el) => (
                <FetchCreators
                  resourceURI={el.updatedRequest}
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
        {updatedData.map((el) => (
          <FetchCreators
            resourceURI={el.updatedRequest}
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
