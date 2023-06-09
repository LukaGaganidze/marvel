import DisplayCharactersCardsGrid from "../../helpers/FetchAndDisplayCards/Characters/DisplayGrid6";

const SearchedCharacters = (props) => {
  // forwarded chats data
  const fetchedData = props.data;
  if (fetchedData.length === 0) return;

  // display characters with description and image
  const data = fetchedData.filter(
    (el) => !el.thumbnail.path.includes("image_not")
  );

  return (
    <DisplayCharactersCardsGrid
      data={data}
      loadMoreChars={false}
      navTo={"/characters/"}
    />
  );
};

export default SearchedCharacters;
