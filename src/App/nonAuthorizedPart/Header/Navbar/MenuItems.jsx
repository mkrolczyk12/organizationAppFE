import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

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
];

const Menu = () => {
  return (
    <Nav className="mr-auto">
      {MenuItems.map((eachOption, index) => {
        return (
          <li key={index}>
            <Nav.Link>
              <Link to={eachOption.path} className={eachOption.cName}>
                {eachOption.name}
              </Link>
            </Nav.Link>
          </li>
        );
      })}
    </Nav>
  );
};

export default Menu;
