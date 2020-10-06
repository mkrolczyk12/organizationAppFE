import React from "react";
import Radium from "radium";

import { Link } from "react-router-dom";
import "../styles.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAlt,
  faCreditCard,
  faChartBar,
  faCalendarAlt,
  faCalculator,
  faClipboard,
  faCoins,
  faWallet,
  faListUl,
  faQuestionCircle,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";

// const styles = {
//   layoutSideNav: {
//     //
//   },
// };
class SideBarMenu extends React.Component {
  render() {
    return (
      <div id="layoutSidenav_nav" className="overflow-auto">
        <nav
          className="sb-sidenav accordion sb-sidenav-dark"
          id="sidenavAccordion"
        >
          <div className="sb-sidenav-menu">
            <div className="nav">
              <div className="sb-sidenav-menu-heading">Core</div>
              <Link className="nav-link" to="/dashboard">
                <div className="sb-nav-link-icon">
                  <FontAwesomeIcon icon={faTachometerAlt}></FontAwesomeIcon>
                </div>
                Dashboard
              </Link>
              <a className="nav-link" href="index.html">
                <div className="sb-nav-link-icon">
                  <FontAwesomeIcon icon={faCreditCard}></FontAwesomeIcon>
                </div>
                Summary
              </a>
              <a className="nav-link" href="index.html">
                <div className="sb-nav-link-icon">
                  <FontAwesomeIcon icon={faChartBar}></FontAwesomeIcon>
                </div>
                Statistics
              </a>
              <a className="nav-link" href="index.html">
                <div className="sb-nav-link-icon">
                  <FontAwesomeIcon icon={faWallet}></FontAwesomeIcon>
                </div>
                Earnings
              </a>
              <a className="nav-link" href="index.html">
                <div className="sb-nav-link-icon">
                  <FontAwesomeIcon icon={faListUl}></FontAwesomeIcon>
                </div>
                Transactions
              </a>
              <div className="sb-sidenav-menu-heading">Tools</div>
              <Link
                className="nav-link collapsed"
                to="#"
                data-toggle="collapse"
                data-target="#collapseLayouts"
                aria-expanded="false"
                aria-controls="collapseLayouts"
              >
                <div className="sb-nav-link-icon">
                  <FontAwesomeIcon icon={faCalendarAlt}></FontAwesomeIcon>
                </div>
                Calendar
              </Link>
              <Link
                className="nav-link collapsed"
                href="#"
                data-toggle="collapse"
                data-target="#collapsePages"
                aria-expanded="false"
                aria-controls="collapsePages"
              >
                <div className="sb-nav-link-icon">
                  <FontAwesomeIcon icon={faCalculator}></FontAwesomeIcon>
                </div>
                Calculator
              </Link>
              <Link
                className="nav-link collapsed"
                href="#"
                data-toggle="collapse"
                data-target="#collapsePages"
                aria-expanded="false"
                aria-controls="collapsePages"
              >
                <div className="sb-nav-link-icon">
                  <FontAwesomeIcon icon={faClipboard}></FontAwesomeIcon>
                </div>
                Notebook
              </Link>
              <Link
                className="nav-link collapsed"
                href="#"
                data-toggle="collapse"
                data-target="#collapsePages"
                aria-expanded="false"
                aria-controls="collapsePages"
              >
                <div className="sb-nav-link-icon">
                  <FontAwesomeIcon icon={faCoins}></FontAwesomeIcon>
                </div>
                Currency converter
              </Link>
              <div className="sb-sidenav-menu-heading">Other</div>
              <a className="nav-link" href="charts.html">
                <div className="sb-nav-link-icon">
                  <FontAwesomeIcon icon={faQuestionCircle}></FontAwesomeIcon>
                </div>
                FAQ
              </a>
              <a className="nav-link" href="tables.html">
                <div className="sb-nav-link-icon">
                  <FontAwesomeIcon icon={faAddressCard}></FontAwesomeIcon>
                </div>
                Contact me
              </a>
            </div>
          </div>
          <div className="sb-sidenav-footer">
            <div className="small">Logged in as:</div>
            MK
          </div>
        </nav>
      </div>
    );
  }
}

export default Radium(SideBarMenu);
