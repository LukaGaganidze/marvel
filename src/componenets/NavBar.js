import React, { useState } from "react";
import { createPortal } from "react-dom";
import { NavLink } from "react-router-dom";

import classes from "./NavBar.module.css";

const NavBar = () => {
  const [navIsActive, setNavIsActive] = useState(false);
  const menuStateToggleHandler = () => {
    setNavIsActive((prev) => !prev);
  };
  const closeNavbarHandler = () => {
    setNavIsActive(false);
  };

  return (
    <>
      {/* LARGE VERSION */}
      <div className={classes["navbar--background"]}>
        <nav className={classes.navigation}>
          <div className={classes["logo-box"]}></div>
          <ul className={classes["navigation-link-box"]}>
            <li className={classes["navigation-link-item"]}>
              <NavLink
                className={({ isActive, isPending }) =>
                  classes[isActive ? "active-link" : ""]
                }
                to="/"
              >
                <div className={classes["navbar-link-backgr"]}></div>
                <p className={classes["navbar-link-text"]}>Home</p>
              </NavLink>
            </li>

            <li className={classes["navigation-link-item"]}>
              <NavLink
                className={({ isActive, isPending }) =>
                  classes[isActive ? "active-link" : ""]
                }
                to="/characters"
              >
                <div className={classes["navbar-link-backgr"]}></div>
                <p className={classes["navbar-link-text"]}> Characters</p>
              </NavLink>
            </li>

            <li className={classes["navigation-link-item"]}>
              <NavLink
                to="/comics"
                className={({ isActive, isPending }) =>
                  classes[isActive ? "active-link" : ""]
                }
              >
                <div className={classes["navbar-link-backgr"]}></div>
                <p className={classes["navbar-link-text"]}>Comics</p>
              </NavLink>
            </li>

            <li className={classes["navigation-link-item"]}>
              <NavLink
                to="/series"
                className={({ isActive, isPending }) =>
                  classes[isActive ? "active-link" : ""]
                }
              >
                <div className={classes["navbar-link-backgr"]}></div>
                <p className={classes["navbar-link-text"]}>Series</p>
              </NavLink>
            </li>

            <li className={classes["navigation-link-item"]}>
              <NavLink
                className={({ isActive, isPending }) =>
                  classes[isActive ? "active-link" : ""]
                }
                to="/creators"
              >
                <div className={classes["navbar-link-backgr"]}></div>
                <p className={classes["navbar-link-text"]}>Creators</p>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      {/* SMALLER VERSION */}
      <div className={classes["smaller-nav-container"]}>
        {/* BURGER MENU BUTTON */}
        <div
          onClick={menuStateToggleHandler}
          className={classes["burger-men-container"]}
        >
          <div
            className={`${classes["burger-men"]}  ${
              classes[navIsActive ? "active-nav" : ""]
            }`}
          >
            <div className={classes["bread-1"]}>
              <span></span>
            </div>
            <div className={classes["beef"]}>
              <span></span>
            </div>
            <div className={classes["bread-2"]}>
              <span></span>
            </div>
          </div>
        </div>

        {/* NAVIGATION */}

        {createPortal(
          <nav
            className={`${classes["responsive-navbar"]} ${
              classes[navIsActive ? "active-navigation" : ""]
            }`}
          >
            <ul className={classes["resp-navigation-link-box"]}>
              <li
                onClick={closeNavbarHandler}
                className={classes["resp-navigation-link-item"]}
              >
                <NavLink
                  className={({ isActive, isPending }) =>
                    classes[isActive ? "active-link" : ""]
                  }
                  to="/"
                >
                  <div className={classes["resp-navbar-link-backgr"]}></div>
                  <p className={classes["resp-navbar-link-text"]}>Home</p>
                </NavLink>
              </li>

              <li
                onClick={closeNavbarHandler}
                className={classes["resp-navigation-link-item"]}
              >
                <NavLink
                  className={({ isActive, isPending }) =>
                    classes[isActive ? "active-link" : ""]
                  }
                  to="/characters"
                >
                  <div className={classes["resp-navbar-link-backgr"]}></div>
                  <p className={classes["resp-navbar-link-text"]}>Characters</p>
                </NavLink>
              </li>

              <li
                onClick={closeNavbarHandler}
                className={classes["resp-navigation-link-item"]}
              >
                <NavLink
                  to="/comics"
                  className={({ isActive, isPending }) =>
                    classes[isActive ? "active-link" : ""]
                  }
                >
                  <div className={classes["resp-navbar-link-backgr"]}></div>
                  <p className={classes["resp-navbar-link-text"]}>Comics</p>
                </NavLink>
              </li>

              <li
                onClick={closeNavbarHandler}
                className={classes["resp-navigation-link-item"]}
              >
                <NavLink
                  to="/series"
                  className={({ isActive, isPending }) =>
                    classes[isActive ? "active-link" : ""]
                  }
                >
                  <div className={classes["resp-navbar-link-backgr"]}></div>
                  <p className={classes["resp-navbar-link-text"]}>Series</p>
                </NavLink>
              </li>

              <li
                onClick={closeNavbarHandler}
                className={classes["resp-navigation-link-item"]}
              >
                <NavLink
                  className={({ isActive, isPending }) =>
                    classes[isActive ? "active-link" : ""]
                  }
                  to="/creators"
                >
                  <div className={classes["resp-navbar-link-backgr"]}></div>
                  <p className={classes["resp-navbar-link-text"]}>Creators</p>
                </NavLink>
              </li>
            </ul>
          </nav>,
          document.getElementById("navbar")
        )}
      </div>
    </>
  );
};

export default NavBar;
