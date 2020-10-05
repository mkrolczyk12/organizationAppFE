import React from "react";

import { Navbar, Nav } from "react-bootstrap";
import Menu from "../NavigationBar/MenuItems";

const styles = {
  background: {
    position: "fixed",
    left: 0,
    top: 0,
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(41, 43, 44,0.9)",
    boxShadow: "0 0 15px 0 #000",
    zIndex: "9040",
  },
  sideMenu: {
    position: "fixed",
    left: 0,
    top: 0,
    width: "300px",
    height: "100%",
    backgroundColor: "#212529",
    color: "#fff",
    overflowY: "auto",
    overflowX: "hidden",
  },
  mobileLoginButton: {
    textAlign: "center",
    border: "1px solid #3eb650",
    textDecoration: "none",
    color: "#fff",
  },
  sideMenuLogo: {
    color: "#3eb650",
  },
  closeButton: {
    color: "white",
  },
  sideNavMenuHeading: {
    padding: "1.75rem 1rem 0.75rem",
    fontSize: "0.75rem",
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "white",
  },
  sideNavFooter: {
    backgroundColor: "#343a40",
    padding: "0.75rem",
    flexShrink: 0,
    color: "rgba(255, 255, 255, 0.5)",
  },
};

class SideMenu extends React.Component {
  render() {
    return (
      <>
        <div
          className="w-100 h-100 m-0 p-0 d-lg-none"
          style={styles.background}
        >
          <div
            className="d-lg-none position-fixed z4 h-100"
            style={styles.sideMenu}
          >
            <nav
              className="sb-sidenav accordion sb-sidenav-dark h-100 d-flex flex-column"
              id="sidenavAccordion"
            >
              <div className="sb-sidenav-menu flex-grow-1">
                <div className="nav">
                  <div className="row m-auto">
                    <div className="col-12 mb-2">
                      <button
                        className="btn btn-lg mt-2 float-right"
                        onClick={this.props.closeSideMenu}
                        style={styles.closeButton}
                      >
                        X
                      </button>
                    </div>
                    <div className="col-12 m-auto mb-4 text-center">
                      <Navbar.Brand
                        href="/"
                        style={styles.sideMenuLogo}
                        className="align-self-center m-0 p-0"
                      >
                        <h1 className="m-0 p-0">MoneyApp</h1>
                        <small>
                          <i>Be aware of your finances.</i>
                        </small>
                      </Navbar.Brand>
                    </div>
                  </div>
                  <div className="row m-0 mt-3 p-0 w-100">
                    <Menu
                      closeSideMenu={this.props.closeSideMenu}
                      mobile={true}
                    />
                  </div>
                  <div
                    className="d-lg-none w-100"
                    style={styles.sideNavMenuHeading}
                  >
                    Account
                  </div>
                  <Nav.Link href="/dashboard" className="m-auto flex-grow-1">
                    <button
                      className="btn btn-md ml-auto mr-auto m-2 w-100"
                      variant="outline-info"
                      style={styles.mobileLoginButton}
                    >
                      Log in
                    </button>
                  </Nav.Link>
                </div>
              </div>
              <div style={styles.sideNavFooter}>
                <div className="small">Created by:</div>
                <b>Marcin Królczyk</b>
              </div>
            </nav>
          </div>
        </div>
      </>
    );
  }
}

export default SideMenu;
