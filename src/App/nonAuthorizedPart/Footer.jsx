import React from "react";
import Radium from "radium";
import { Link, useLocation } from "react-router-dom";

const styles = {
  footerBase: {
    minHeight: "10vh",
    backgroundColor: "#212529",
    color: "#fff",
    top: "80%",
  },
  eachFooterLinkBasicOption: {
    display: "flex",
    color: "#fff",
    textDecoration: "none",
  },
};

const Footer = () => {
  return (
    <footer className="p-0 m-0" style={styles.footerBase}>
      <div
        className="p-2 p-md-2 text-center w-75 m-auto"
        style={
          useLocation().pathname === "/feedback"
            ? {}
            : { borderTop: "1px solid #fff" }
        }
      >
        <FooterLinksComponent />
        <p className="m-0 p-0">
          <small>Copyright © 2020 MK. All rights reserved.</small>
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
        style={styles.eachFooterLinkBasicOption}
        className={"d-inline-block mr-2 ml-2 mb-2" + eachLink.cName}
      >
        <li key={eachLink.name} style={styles.eachFooterLinkBasicOption}>
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
    path: "/",
    cName: "",
  },
  {
    name: "Blog",
    path: "/",
    cName: "",
  },
  {
    name: "About",
    path: "/",
    cName: "",
  },
  {
    name: "Newsletter",
    path: "/",
    cName: "",
  },
];
