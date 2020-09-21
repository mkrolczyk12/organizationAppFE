import React from "react";
import Radium from "radium";

import { Link } from "react-router-dom";
import { Nav as div } from "react-bootstrap";

const styles = {
  menu: {
    paddingBottom: "3px",
    paddingTop: "3px",
    top: "-1px",
    zIndex: 999,
  },
  eachMenuItemDiv: {
    minHeight: "40px",
    padding: 10,
    width: "100%",
    transition: "0.2s",
    ":hover": {
      backgroundColor: "rgba(41, 43, 44,0.9)",
    },
  },
  eachMenuItemOption: {
    color: "#fff",
    textDecoration: "none",
  },
};

const MenuItems = [
  {
    name: "Home",
    path: "/",
    cName: "",
  },
  {
    name: "Features",
    path: "/features",
    cName: "",
  },
  {
    name: "Contact",
    path: "/contact",
    cName: "",
  },
  {
    name: "Give feedback",
    path: "/feedback",
    cName: "",
  },
];

const Menu = (props) => {
  return (
    <>
      {props.mobile ? (
        <div className="col-12 p-0 m-0" style={styles.menu}>
          {MenuItems.map((eachOption, index) => {
            return (
              <div
                key={index}
                href={eachOption.path}
                className={eachOption.cName}
                style={styles.eachMenuItemDiv}
              >
                <Link
                  className={eachOption.cName}
                  style={styles.eachMenuItemOption}
                  to={eachOption.path}
                >
                  <li
                    key={eachOption.name}
                    onClick={props.closeSideMenu}
                    style={styles.eachMenuItemOption}
                  >
                    {eachOption.name}
                  </li>
                </Link>
              </div>
            );
          })}
        </div>
      ) : (
        MenuItems.map((eachOption, index) => {
          return (
            <li key={index} onClick={props.closeSideMenu}>
              <div.Link>
                <Link
                  to={eachOption.path}
                  className={eachOption.cName}
                  style={styles.eachMenuItemOption}
                >
                  {eachOption.name}
                </Link>
              </div.Link>
            </li>
          );
        })
      )}
    </>
  );
};

export default Radium(Menu);
