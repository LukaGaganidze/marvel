import React from "react";
import Youtube from "react-youtube";

import classes from "./CharacterVideo.module.css";

const MyVideoComponent = () => {
  const videoId = "shW9i6k8cB0";

  return <Youtube className={classes["testvid"]} videoId={videoId} />;
};

export default MyVideoComponent;
