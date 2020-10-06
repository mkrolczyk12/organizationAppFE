import React from "react";

import Logo from "./Logo/Logo";
import SideBarMenu from "./SideBarMenu/SideBarMenu";
import SearchBar from "./SearchBar/SearchBar";
import UserWindow from "./UserWindow/UserWindow";

const styles = {
  sbTopNav: {
    position: "fixed",
    top: 0,
    right: 0,
    left: 0,
    zIndex: 1039,
  },
};
class Navbar extends React.Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand navbar-dark bg-dark"
        style={styles.sbTopNav}
      >
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
