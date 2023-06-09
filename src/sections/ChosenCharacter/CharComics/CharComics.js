import DisplayComicsGrid from "../../../helpers/FetchAndDisplayCards/ComicsSeries/DisplayGrid4";
import classes from "./CharComics.module.css";

const CharComics = ({ comicsData }) => {
  const { comics, comicsAvalable } = comicsData;
  return <DisplayComicsGrid data={comics} navTo={"/comics/"} />;
};

export default CharComics;
