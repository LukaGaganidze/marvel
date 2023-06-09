import classes from "./CardSmall.module.css";

const CardSmall = (props) => {
  return (
    <div className={classes["card-sml"]}>
      <div className={classes["card-smimg-box"]}>
        <img className={classes["card-smimg"]} src={props.image} />
      </div>
      <div className={classes["card-sml-text-box"]}>
        <p className={classes["card-owner-desc"]}>{props.desc}</p>
        <p className={classes["card-owner-name"]}>{props.fullName}</p>
      </div>
    </div>
  );
};

export default CardSmall;
