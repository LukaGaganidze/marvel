import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../componenets/NavBar";
import Footer from "../componenets/Footer";

const Root = () => {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Root;
