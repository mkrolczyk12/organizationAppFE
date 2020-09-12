import React from "react";
// import { Link } from "react-router-dom";
import { Button, Navbar } from "react-bootstrap";
import Menu from "../Navbar/MenuItems";

class SideMenu extends React.Component {
  render() {
    return (
      <>
        <div
          className="w-100 h-100 m-0 p-0 d-lg-none"
          style={{
            position: "fixed",
            left: 0,
            top: 0,
            height: "100%",
            width: "100%",
            // backgroundColor: "#02203c",
            backgroundColor: "rgba(41, 43, 44,0.9)",
            boxShadow: "0 0 15px 0 #000",
            // overflowY: "auto",
            zIndex: "9040",
          }}
        >
          <div
            // id="layoutSidenav_nav"
            className="d-lg-none position-fixed z4"
            style={{
              position: "fixed",
              left: 0,
              top: 0,
              width: "300px",
              height: "100%",
              backgroundColor: "#212529",
              // boxShadow: "0 0 15px 0 #000",
              overflowY: "auto",
              overflowX: "hidden",
              // overflow: "scroll"
              // zIndex: "9040",
            }}
          >
            <nav
              className="sb-sidenav accordion sb-sidenav-dark"
              id="sidenavAccordion"
            >
              <div className="sb-sidenav-menu">
                <div className="nav">
                  <div className="row">
                    <div className="col-12 mb-2">
                      <Button
                        className="btn btn-lg mt-2 mr-2 float-right"
                        onClick={this.props.closeSideMenu}
                      >
                        X
                      </Button>
                    </div>
                    <div className="col-12 m-auto mb-4 text-center">
                      <Navbar.Brand
                        href="#home"
                        id="sideMenuLogo"
                        className="align-self-center m-0 p-0"
                      >
                        <h1 className="m-0 p-0">MoneyApp</h1>
                        <small>Be aware of your finances.</small>
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
                  <Button className="d-lg-none m-2" variant="outline-primary">
                    Zaloguj się
                  </Button>
                  <Button className="d-lg-none m-2" variant="outline-info">
                    Utwórz konto
                  </Button>
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
