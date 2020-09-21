import React from "react";
import Radium from "radium";
import { Link } from "react-router-dom";

const styles = {
  footer: {
    minHeight: "10vh",
    backgroundColor: "#343a40",
    borderTop: "2px double #000",
    borderTopWidth: "medium",
    top: "80%",
  },
  text: {
    color: "#fff",
  },
  eachFooterLinkOption: {
    display: "flex",
    color: "#fff",
    textDecoration: "none",
  },
};

const Footer = () => {
  return (
    <footer className="p-2 m-0" style={styles.footer}>
      <div className="m-0 p-2 text-center">
        <FooterLinksComponent />
        <p className="m-0 p-0" style={styles.text}>
          Copyright © 2020 MK. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
export default Radium(Footer);

const FooterLinksComponent = () => {
  return FooterLinks.map((eachLink, index) => {
    return (
      <Link
        key={index}
        to={eachLink.path}
        style={styles.eachFooterLinkOption}
        className={"d-inline-block mr-2 ml-2 mb-2" + eachLink.cName}
      >
        <li key={eachLink.name} style={styles.eachFooterLinkOption}>
          {eachLink.name}
        </li>
      </Link>
    );
  });
};
const FooterLinks = [
  {
    name: "Contact us",
    path: "/contact",
    cName: "",
  },
  {
    name: "FAQ",
    path: "/feedback",
    cName: "",
  },
  {
    name: "Reviews",
    path: "/revievs",
    cName: "",
  },
  {
    name: "Blog",
    path: "/blog",
    cName: "",
  },
  {
    name: "About",
    path: "/",
    cName: "",
  },
  {
    name: "Newsletter",
    path: "/newsletter",
    cName: "",
  },
];
