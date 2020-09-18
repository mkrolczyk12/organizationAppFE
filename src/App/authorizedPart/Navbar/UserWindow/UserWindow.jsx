import React from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import "./styles.css";
// import { Link } from "react-router-dom";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class userWindow extends React.Component {
  state = {
    userWindow: false,
  };

  handleUserWindow = (event) => {
    this.setState({
      userWindow: !this.state.userWindow,
    });
  };

  handleLogout = () => {
    //
  };

  render() {
    return (
      <>
        <DropdownButton
          id="dropdown-menu-align-right userWindow"
          variant=""
          title={<FontAwesomeIcon icon={faUser} />}
        >
          <Dropdown.Item eventKey="1">Settings</Dropdown.Item>
          <Dropdown.Item eventKey="2">Activity log</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item
            eventKey="4"
            onClick={this.handleLogout}
            href="http://localhost:8180/auth/realms/OrganizationApp/protocol/openid-connect/logout"
          >
            Log out
          </Dropdown.Item>
        </DropdownButton>
      </>
      //   <ul className="navbar-nav ml-auto ml-md-0">
      //     <li className="nav-item dropdown">
      //       <Link
      //         className={
      //           this.state.userWindow
      //             ? "nav-link dropdown-toggle show"
      //             : "nav-link dropdown-toggle"
      //         }
      //         id="userDropdown"
      //         href="#"
      //         role="button"
      //         data-toggle="dropdown"
      //         aria-haspopup="true"
      //         aria-expanded={this.state.userWindow}
      //         onClick={this.handleUserWindow}
      //       >
      //         <FontAwesomeIcon icon={faUser} />
      //       </Link>
      //       <div
      //         className={
      //           this.state.userWindow
      //             ? "dropdown-menu dropdown-menu-right show"
      //             : "dropdown-menu dropdown-menu-right"
      //         }
      //         aria-labelledby="userDropdown"
      //       >
      //         <Link className="dropdown-item" href="#">
      //           Settings
      //         </Link>
      //         <Link className="dropdown-item" href="#">
      //           Activity Log
      //         </Link>
      //         <div className="dropdown-divider"></div>
      //         <Link className="dropdown-item" href="login.html">
      //           Logout
      //         </Link>
      //       </div>
      //     </li>
      //   </ul>
    );
  }
}

export default userWindow;
