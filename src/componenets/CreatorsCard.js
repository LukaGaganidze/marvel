import classes from "./CreatorsCard.module.css";

const CreatorsCard = (props) => {
  return (
    <div className={classes["creator-card"]}>
      <img src={props.image} className={classes["creator-img"]} />
      <div className={classes["creator-textbox"]}>
        <h3 className={classes["card-heading-int"]}>Creator of:</h3>
        <ul className={classes["ccard-ul"]}>
          {props.creations.map((el) => (
            <li key={el}>{el}</li>
          ))}
        </ul>

        <div className={classes["hover-background"]}>
          <h2 className={classes["hoverbg-text"]}>
            {props.firstName} <br /> {props.lastName}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default CreatorsCard;
