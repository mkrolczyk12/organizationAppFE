import React from "react";
import Radium from "radium";

import { NavLink } from "react-router-dom";

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
  LargeMenuMenuItemOption: {
    color: "#fff",
    textDecoration: "none",
  },
  activeLink: {
    borderBottom: "1px solid #3eb650",
  },
  activeMobileLink: {
    display: "flex",
    borderRight: "2px solid #3eb650",
    fontSize: 20,
  },
};

const Menu = (props) => {
  return props.mobile ? (
    <MobileMenu closeSideMenu={props.closeSideMenu} />
  ) : (
    <PcMenu closeSideMenu={props.closeSideMenu} />
  );
};
export default Radium(Menu);

const MobileMenu = (props) => {
  return (
    <div className="col-12 p-0 m-0" style={styles.menu}>
      {MenuItems.map((eachOption, index) => {
        return (
          <div
            key={index}
            href={eachOption.path}
            className={eachOption.cName}
            style={styles.eachMenuItemDiv}
          >
            <NavLink
              className={eachOption.cName}
              activeStyle={styles.activeMobileLink}
              style={styles.eachMenuItemOption}
              to={eachOption.path}
              exact
            >
              <li
                key={eachOption.name}
                onClick={props.closeSideMenu}
                style={styles.eachMenuItemOption}
              >
                {eachOption.name}
              </li>
            </NavLink>
          </div>
        );
      })}
    </div>
  );
};

const PcMenu = () => {
  return MenuItems.map((eachOption, index) => {
    return (
      <li
        key={index}
        className="m-0 p-0"
        style={styles.LargeMenuMenuItemOption}
      >
        <NavLink
          to={eachOption.path}
          activeStyle={styles.activeLink}
          className={"m-2" + eachOption.cName}
          style={styles.LargeMenuMenuItemOption}
          exact={eachOption.exact}
        >
          {eachOption.name}
        </NavLink>
      </li>
    );
  });
};

const MenuItems = [
  {
    name: "Home",
    path: "/",
    cName: "",
    exact: true,
  },
  {
    name: "Features",
    path: "/features",
    cName: "",
    exact: true,
  },
  {
    name: "Contact",
    path: "/contact",
    cName: "",
    exact: true,
  },
  {
    name: "Give feedback",
    path: "/feedback",
    cName: "",
    exact: true,
  },
];
