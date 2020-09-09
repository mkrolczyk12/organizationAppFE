import React from "react";
// import { Link } from "react-router-dom";
import { Navbar, Button } from "react-bootstrap";
import Menu from "./MenuItems.jsx";
import SideMenu from "../SideMenu/SideMenu";
// import logo from "./logo.png";

class NavigationBar extends React.Component {
  state = {
    sideMenu: false,
  };

  showSideMenu = () => {
    this.setState({
      sideMenu: !this.state.sideMenu,
    });
  };

  render() {
    return (
      <>
        {/* Desktop menu */}
        <Navbar className="d-none d-lg-flex" bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <h1>MoneyApp</h1>
          </Navbar.Brand>
          <Menu />
          <Button className="m-2" variant="outline-primary">
            Zaloguj się
          </Button>
          <Button className="m-2" variant="outline-info">
            Utwórz konto
          </Button>
        </Navbar>
        {/* Mobile menu */}
        <Navbar className="d-lg-none" bg="dark" variant="dark">
          <Button
            className="btn btn-link btn-lg border-0"
            id="sidebarToggle"
            href="#"
            variant="outline-info"
            onClick={this.showSideMenu}
          >
            <i className="navbar-toggler-icon"></i>
          </Button>
          <div className="m-auto">
            <Navbar.Brand href="#home" className="align-self-center">
              <h1>MoneyApp</h1>
            </Navbar.Brand>
          </div>
          <Button className="d-none d-sm-block m-2" variant="outline-primary">
            Zaloguj się
          </Button>
          <Button className="d-none d-sm-block m-2" variant="outline-info">
            Utwórz konto
          </Button>
        </Navbar>
        {/* Side menu */}
        {this.state.sideMenu ? <SideMenu /> : ""}
      </>
    );
  }
}

export default NavigationBar;
