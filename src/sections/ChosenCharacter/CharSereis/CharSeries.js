import DisplayComicsGrid from "../../../helpers/FetchAndDisplayCards/ComicsSeries/DisplayGrid4";

const CharSeries = ({ seriesData }) => {
  const { series, seriesAvalable } = seriesData;
  return <DisplayComicsGrid loadMore={true} data={series} navTo={"/series/"} />;
};

export default CharSeries;
