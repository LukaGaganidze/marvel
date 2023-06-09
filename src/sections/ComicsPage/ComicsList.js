import DisplayComicsCardsGrid from "../../helpers/FetchAndDisplayCards/ComicsSeries/DisplayGrid4";

const ComicsList = ({ fetchData }) => {
  // forwarded chats data
  const fetchedData = fetchData;
  if (fetchedData.length === 0) return;

  // display characters with description and image
  const data = fetchedData.filter(
    (el) => !el.thumbnail.path.includes("image_not")
  );

  return (
    <DisplayComicsCardsGrid data={data} navTo={"/comics/"} loadMore={false} />
  );
};

export default ComicsList;
