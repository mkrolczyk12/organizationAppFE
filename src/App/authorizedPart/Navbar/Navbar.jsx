import React from "react";
import {} from "react-bootstrap";

import Logo from "./Logo/Logo";
import SideBarMenu from "./SideBarMenu/SideBarMenu";
import SearchBar from "./SearchBar/SearchBar";
import UserWindow from "./UserWindow/UserWindow";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
        <Logo />
        <SideBarMenu
          handleSideBarMenuDisplay={this.props.handleSideBarMenuDisplay}
        />
        <SearchBar />
        <UserWindow />
      </nav>
    );
  }
}

export default Navbar;
