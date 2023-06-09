import classes from "./CreatorsSearchResults.module.css";

import CreatorsSearchCard from "../../componenets/CreatorsSearchCard";

const CreatorsSearchResults = (props) => {
  if (props.searchResults.length === 0) return;

  return (
    <div className={classes["creators-card-container"]}>
      {props.searchResults.map((el) => (
        <CreatorsSearchCard
          key={el.id}
          id={el.id}
          firstName={el.firstName}
          lastName={el.lastName}
          comics={el.comics}
          series={el.series}
          stories={el.stories}
          image={el.thumbnail.path}
          imgExtension={el.thumbnail.extension}
        />
      ))}
    </div>
  );
};

export default CreatorsSearchResults;
