import React from "react";
// import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Menu from "../Navbar/MenuItems";

class SideMenu extends React.Component {
  render() {
    return (
      <>
        <div
          id="layoutSidenav_nav"
          className="d-lg-none position-absolute w-75 h-100"
        >
          <nav
            className="sb-sidenav accordion sb-sidenav-dark"
            id="sidenavAccordion"
          >
            <div className="sb-sidenav-menu">
              <div className="nav">
                <Menu />
                <div className="d-sm-none sb-sidenav-menu-heading">Account</div>
                <Button className="d-sm-none m-2" variant="outline-primary">
                  Zaloguj się
                </Button>
                <Button className="d-sm-none m-2" variant="outline-info">
                  Utwórz konto
                </Button>
              </div>
            </div>
            <div className="sb-sidenav-footer">
              <div className="small">Produced by:</div>
              Marcin Królczyk
            </div>
          </nav>
        </div>
      </>
    );
  }
}

export default SideMenu;
