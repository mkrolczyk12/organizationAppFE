import React from "react";
import NavigationBar from "./Navbar/NavigationBar";

class Header extends React.Component {
  state = {
    sideMenu: true,
  };
  render() {
    return (
      <>
        <NavigationBar sideMenu={this.state.sideMenu} />
        <div></div>
      </>
    );
  }
}

export default Header;
