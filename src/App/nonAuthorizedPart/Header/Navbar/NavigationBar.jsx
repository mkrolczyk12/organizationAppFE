import React from "react";
// import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import Menu from "./MenuItems.jsx";
import SideMenu from "../SideMenu/SideMenu";
import "../styles.css";

const styles = {
  navigationBar: {
    height: "55px",
  },
};

class NavigationBar extends React.Component {
  state = {};

  render() {
    return (
      <>
        {/* Desktop menu */}
        <Navbar
          className="d-none d-lg-flex"
          bg="dark"
          variant="dark"
          style={styles.navigationBar}
        >
          <Navbar.Brand href="/">
            <h3>MoneyApp</h3>
          </Navbar.Brand>
          <Nav className="flex-grow-1">
            <Menu />
          </Nav>
          <Nav.Link href="/dashboard">
            <button
              id="loginButton"
              className="btn btn-md float-right flex-row"
              variant="outline-info"
            >
              Zaloguj się
            </button>
          </Nav.Link>
        </Navbar>
        {/* Mobile menu */}
        <Navbar
          className="d-lg-none"
          bg="dark"
          variant="dark"
          style={styles.navigationBar}
        >
          <button
            className="btn btn-link btn-md border-0"
            id="sidebarToggle"
            href="#"
            variant="outline-primary"
            onClick={this.props.showSideMenu}
          >
            <i className="navbar-toggler-icon"></i>
          </button>
          <Navbar.Brand href="/" className="m-auto p-0">
            <h3>MoneyApp</h3>
          </Navbar.Brand>
          <Nav.Link href="/dashboard">
            <button
              id="loginButton"
              className="d-none d-sm-block btn btn-md float-right flex-row"
              variant="outline-info"
            >
              Zaloguj się
            </button>
          </Nav.Link>
        </Navbar>
        {/* Side menu */}
        {this.props.sideMenu ? (
          <SideMenu closeSideMenu={this.props.showSideMenu} />
        ) : (
          ""
        )}
      </>
    );
  }
}

export default NavigationBar;
