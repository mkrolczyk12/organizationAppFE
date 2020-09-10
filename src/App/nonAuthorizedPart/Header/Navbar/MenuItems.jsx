import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import "./MenuItems.css";

const MenuItems = [
  {
    name: "Home",
    path: "/",
    cName: "nav-links",
    exact: true,
  },
  {
    name: "Features",
    path: "/features",
    cName: "nav-links",
    exact: false,
  },
  {
    name: "Pricing",
    path: "/pricing",
    cName: "nav-links",
    exact: false,
  },
  {
    name: "About",
    path: "/about",
    cName: "nav-links",
    exact: false,
  },
  {
    name: "Charts",
    path: "/charts",
    cName: "nav-links",
    exact: false,
  },
  {
    name: "Give feedback",
    path: "/feedback",
    cName: "nav-links",
    exact: false,
  },
];

const Menu = (props) => {
  return (
    <>
      {props.mobile ? (
        <div id="MobileMenu" className="col-12 p-0 m-0">
          {MenuItems.map((eachOption, index) => {
            return (
              <Nav.Link href={eachOption.path} className="menuItem">
                <Link className={eachOption.cName}>
                  <li key={index} onClick={props.closeSideMenu}>
                    {eachOption.name}
                  </li>
                </Link>
              </Nav.Link>
            );
          })}
        </div>
      ) : (
        MenuItems.map((eachOption, index) => {
          return (
            <li key={index} onClick={props.closeSideMenu}>
              <Nav.Link>
                <Link to={eachOption.path} className={eachOption.cName}>
                  {eachOption.name}
                </Link>
              </Nav.Link>
            </li>
          );
        })
      )}
    </>
  );
};

export default Menu;
