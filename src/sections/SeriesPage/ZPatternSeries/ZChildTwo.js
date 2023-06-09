import classes from "./ZChildTwo.module.css";
import { Link } from "react-router-dom";

const ZChildTwo = ({ img, name, date, desc }) => {
  return (
    <Link to={"/series/28031"} className={classes["Z-pattern-item"]}>
      {/* text */}
      <div className={classes["text-box"]}>
        <h3>{name}</h3>
        <p>{date}</p>
        <p>{desc}</p>
      </div>

      {/* img */}
      <div className={classes["img-box"]}>
        <img src={img} alt={`${name} image`} />
      </div>
    </Link>
  );
};

export default ZChildTwo;
