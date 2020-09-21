import React from "react";
// import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import Menu from "../Navbar/MenuItems";

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
    backgroundColor: "#343a40",
    overflowY: "auto",
    overflowX: "hidden",
  },
  mobileLoginButton: {
    textAlign: "center",
    border: "1px solid #3eb650",
    textDecoration: "none",
  },
  sideMenuLogo: {
    color: "#3eb650",
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
          <div className="d-lg-none position-fixed z4" style={styles.sideMenu}>
            <nav
              className="sb-sidenav accordion sb-sidenav-dark"
              id="sidenavAccordion"
            >
              <div className="sb-sidenav-menu">
                <div className="nav">
                  <div className="row">
                    <div className="col-12 mb-2">
                      <button
                        className="btn btn-lg mt-2 mr-2 float-right"
                        onClick={this.props.closeSideMenu}
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
                  <div className="row m-0 mt-3 p-0">
                    <Menu
                      closeSideMenu={this.props.closeSideMenu}
                      mobile={true}
                    />
                  </div>
                  <div className="d-lg-none sb-sidenav-menu-heading">
                    Account
                  </div>
                  <Nav.Link href="/dashboard">
                    <button
                      className="btn btn-md float-right flex-row m-2 w-100"
                      variant="outline-info"
                      style={styles.mobileLoginButton}
                    >
                      Log in
                    </button>
                  </Nav.Link>
                </div>
              </div>
              <div className="sb-sidenav-footer">
                <div className="small">Created by:</div>
                Marcin Królczyk
              </div>
            </nav>
          </div>
        </div>
      </>
    );
  }
}

export default SideMenu;
