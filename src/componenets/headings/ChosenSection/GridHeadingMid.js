import classes from "./GridHeadingMid.module.css";

const GridHeadingMid = ({ headingFor, total, available, name }) => {
  return (
    <div className={classes["creators-Series-heading"]}>
      <h3>
        {headingFor} by {name}
      </h3>

      <div className={classes["heading-info-box"]}>
        <span>{headingFor} in total: </span>
        <span>{total}</span>
      </div>

      <div className={classes["heading-info-box"]}>
        <span>{headingFor} available: </span>
        <span>{available}</span>
      </div>
    </div>
  );
};

export default GridHeadingMid;
