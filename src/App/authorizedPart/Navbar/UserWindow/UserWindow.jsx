import React from "react";
import Radium from "radium";

import { DropdownButton, Dropdown } from "react-bootstrap";
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
          id="dropdown-menu-align-right"
          variant=""
          title={<FontAwesomeIcon icon={faUser} />}
        >
          <Dropdown.Item eventKey="1" disabled>
            Settings
          </Dropdown.Item>
          <Dropdown.Item eventKey="2" disabled>
            Activity log
          </Dropdown.Item>
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
    );
  }
}

export default Radium(userWindow);
