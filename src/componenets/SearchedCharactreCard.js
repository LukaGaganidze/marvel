import { Link } from "react-router-dom";

import classes from "./SearchedCharactreCard.module.css";

const IMAGE_SIZE = "portrait_fantastic";

const SearchedCharactreCard = ({ id, image, name }) => {
  return (
    <Link to={id} className={classes["ind-char-link"]}>
      <div className={classes["searched-char-card"]}>
        <div className={classes["searched-char-img-box"]}>
          <img
            className={classes["searched-char-img"]}
            src={`${image.path}/${IMAGE_SIZE}.${image.extension}`}
          />
        </div>

        <div className={classes["searched-char-text-box"]}>
          <h3 className={classes["char-name"]}>{name}</h3>
        </div>
      </div>
    </Link>
  );
};

export default SearchedCharactreCard;
