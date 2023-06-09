import MD5 from "crypto-js/md5";

const apiURL = process.env.REACT_APP_MARVEL_BASE_URL;

const getHash = (timeStamp, privatKey, publicKey) => {
  return MD5(timeStamp + privatKey + publicKey).toString();
};

export const FetchCharacters = async (value) => {
  const baseURL = `${apiURL}/v1/public/characters`;
  const timeStamp = Date.now().toString();
  const publicKey = process.env.REACT_APP_MARVEL_PUBLIC_API_KEY;
  const privatKey = process.env.REACT_APP_MARVEL_PRIVET_API_KEY;
  const hash = getHash(timeStamp, privatKey, publicKey);

  const url = `${baseURL}?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}&nameStartsWith=${value}`;

  try {
    const response = await fetch(url);
    // const data = await response.json();
    // return data;
    console.log(response);
    return response;
  } catch (err) {
    return;
  }
};
