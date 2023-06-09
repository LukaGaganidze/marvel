import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";

const CharactersRoot = () => {
  // to load page from top
  const { pathname } = useLocation();
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }, [pathname]);
  return (
    <>
      <Outlet />
    </>
  );
};

export default CharactersRoot;
