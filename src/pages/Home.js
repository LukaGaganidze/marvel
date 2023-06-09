import React from "react";

import Hero from "../sections/HomePage/Hero";
import Characters from "../sections/HomePage/Characters";
import Creators from "../sections/HomePage/Creators";
import Series from "../sections/HomePage/Series";

const Home = () => {
  return (
    <>
      <Hero />
      <Characters />
      <Creators />
      <Series />
    </>
  );
};

export default Home;
