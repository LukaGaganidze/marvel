import { Link } from "react-router-dom";

import classes from "./FeaturedComicsMinimalistic.module.css";

const FeaturedComicsMinimalistic = ({ id, name, img }) => {
  return (
    <Link to={id} className={classes["comic-link"]}>
      <div className={classes["img-box"]}>
        <img
          className={classes["comic-img"]}
          src={img}
          alt={`image of comic: ${name}`}
        />
      </div>

      <div className={classes["text-box"]}>
        <p className={classes["comic-name"]}>{name}</p>
      </div>
    </Link>
  );
};

export default FeaturedComicsMinimalistic;
