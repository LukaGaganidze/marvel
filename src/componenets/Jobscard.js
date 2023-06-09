import React from "react";
import { Link } from "react-router-dom";

import classes from "./Jobscard.module.css";

// COMICS JOB IMGS
import writer from "../assets/comics-page/jobs/writer.jpg";
import editor from "../assets/comics-page/jobs/editor.jpg";
import colorist from "../assets/comics-page/jobs/colorist.jpg";
import inker from "../assets/comics-page/jobs/inker.jpg";
import penciler from "../assets/comics-page/jobs/penciler.jpg";
import leterrer from "../assets/comics-page/jobs/leterrer.jpg";
import painter from "../assets/comics-page/jobs/painter.jpg";

const Jobscard = ({ name, id, role }) => {
  const optionalRole = role.split(" ")[0];
  return (
    <Link to={id} className={classes["role-card"]}>
      {/* writer */}
      {optionalRole === "writer" && (
        <div className={classes["img-box"]}>
          <h3 className={classes["role"]}>{role}</h3>
          <img className={classes["role-img"]} src={writer} />
        </div>
      )}

      {/* editor */}
      {optionalRole === "editor" && (
        <div className={classes["img-box"]}>
          <h3 className={classes["role"]}>{role}</h3>
          <img className={classes["role-img"]} src={editor} />
        </div>
      )}

      {/* colorist */}
      {optionalRole === "colorist" && (
        <div className={classes["img-box"]}>
          <h3 className={classes["role"]}>{role}</h3>
          <img className={classes["role-img"]} src={colorist} />
        </div>
      )}

      {/* inker */}
      {optionalRole === "inker" && (
        <div className={classes["img-box"]}>
          <h3 className={classes["role"]}>{role}</h3>
          <img className={classes["role-img"]} src={inker} />
        </div>
      )}

      {/* penciler */}
      {optionalRole === "penciler" && (
        <div className={classes["img-box"]}>
          <h3 className={classes["role"]}>{role}</h3>
          <img className={classes["role-img"]} src={penciler} />
        </div>
      )}
      {/* penciler */}
      {optionalRole === "penciller" && (
        <div className={classes["img-box"]}>
          <h3 className={classes["role"]}>{role}</h3>
          <img className={classes["role-img"]} src={penciler} />
        </div>
      )}

      {/* leterrer */}
      {optionalRole === "letterer" && (
        <div className={classes["img-box"]}>
          <h3 className={classes["role"]}>{role}</h3>
          <img className={classes["role-img"]} src={leterrer} />
        </div>
      )}
      {/* painter */}
      {optionalRole === "painter" && (
        <div className={classes["img-box"]}>
          <h3 className={classes["role"]}>{role}</h3>
          <img className={classes["role-img"]} src={painter} />
        </div>
      )}

      <div className={classes["text-box"]}>
        <p className={classes["name"]}>{name}</p>
      </div>
    </Link>
  );
};

export default Jobscard;
