import React from "react";
import Radium from "radium";

import NavigationBar from "./NavigationBar/NavigationBar.jsx";

class Header extends React.Component {
  state = {
    sideMenu: false,
  };

  manageSideMenu = () => {
    this.setState({
      sideMenu: !this.state.sideMenu,
    });
  };

  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <header>
        <NavigationBar
          showSideMenu={this.manageSideMenu}
          sideMenu={this.state.sideMenu}
        />
      </header>
    );
  }
}

export default Radium(Header);
