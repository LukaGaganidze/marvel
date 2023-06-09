import classes from "./CharacterHero.module.css";

const CharacterHero = ({ name, image, description }) => {
  return (
    <div className={classes["hero-char"]}>
      <div className={classes["char-pg-container"]}>
        <div className={classes["char-hero-flex"]}>
          <div className={classes["srch-char-img-box"]}>
            <img className={classes["srch-char-img"]} src={image} />
          </div>

          {description !== "" ? (
            <div className={classes["srch-char-text-box"]}>
              <h2 className={classes["srch-comic-name"]}>{name}</h2>
              <p className={classes["srch-desc"]}>{description}</p>
            </div>
          ) : (
            <div className={classes["srch-char-text-box-2"]}>
              <h2 className={classes["srch-comic-name-2"]}>{name}</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CharacterHero;
