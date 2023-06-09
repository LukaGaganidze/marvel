import React from "react";

import DisplaySeries from "../../helpers/FetchAndDisplayCards/ComicsSeries/DisplayGrid4";

const SearcherdSeries = ({ serisItems }) => {
  return (
    <div>
      <DisplaySeries loadMore={false} data={serisItems} navTo={"/series/"} />
    </div>
  );
};

export default SearcherdSeries;
