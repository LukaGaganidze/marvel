import classes from "./ChosenComicHero.module.css";

const ChosenComicHero = ({
  thumbnail,
  title,
  series,
  characters,
  creators,
}) => {
  // SERIES
  const seriesName = series.name;

  // CHARACTERS
  const avalableCharacters = characters.available;
  const charactersArr = characters.items;

  // CREATORS
  const avalableCreators = creators.available;
  const creatorssArr = creators.items;

  // IMAGE
  const { extension } = thumbnail;
  const { path } = thumbnail;

  return (
    <div className={classes["comics-hero"]}>
      <div className={classes["comics-hero-content"]}>
        {/* IMAGE BOX */}
        <div className={classes["img-box"]}>
          <img
            src={`${path}.${extension}`}
            className={classes["img"]}
            alt={`comics: ${title} image`}
          />
        </div>

        {/* TEXT BOX */}
        <div className={classes["comics-text-box"]}>
          <h2 className={`${classes["comics-text-heading"]} `}>{title}</h2>

          <div className={classes["additional-info"]}>
            {/* SERIES */}
            {seriesName !== "" ? (
              <div className={classes["additional-sub-info"]}>
                <span className={classes["additional-sub-info-heading"]}>
                  Comics Series:
                </span>
                <p>{seriesName}</p>
              </div>
            ) : (
              ""
            )}

            {/* CHARACTERS */}
            {avalableCharacters !== 0 ? (
              <div className={classes["additional-sub-info"]}>
                <span className={classes["additional-sub-info-heading"]}>
                  Characters:
                </span>
                <ul>
                  {charactersArr.map((el) => (
                    <li key={el.name}>{el.name}</li>
                  ))}
                </ul>
              </div>
            ) : (
              ""
            )}

            {/* CREATORS */}
            {avalableCreators !== 0 ? (
              <div className={classes["additional-sub-info"]}>
                <span className={classes["additional-sub-info-heading"]}>
                  Creators:
                </span>
                <ul>
                  {creatorssArr.map((el) => (
                    <li key={el.name}>{el.name}</li>
                  ))}
                </ul>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChosenComicHero;
